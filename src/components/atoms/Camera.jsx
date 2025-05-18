import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as THREE from "three";

// const EnvMapContext = createContext();
// export const useEnvMap = () => useContext(EnvMapContext);

export default function Camera({ scroll, children }) {
  const { camera, gl, scene } = useThree();
  const targetZ = 70 - 1 * 3900 * scroll;
  const lerpSpeed = 0.05;
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);

  // CubeCamera render target
  // const cubeRenderTarget = useMemo(
  //   () =>
  //     new THREE.WebGLCubeRenderTarget(4096, {
  //       format: THREE.RGBFormat,
  //       generateMipmaps: true,
  //       minFilter: THREE.LinearMipmapLinearFilter,
  //     }),
  //   []
  // );

  const cubeCameraRef = useRef();

  useEffect(() => {
    const move = (e) => {
      setHorizontal(
        (-(e.clientX - window.outerWidth / 2) / window.outerWidth) * 1
      );
      setVertical(
        (-(e.clientY - window.outerHeight / 2) / window.outerHeight) * 0.25
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(() => {
    // update your main camera
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZ,
      lerpSpeed
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      horizontal,
      lerpSpeed
    );
    camera.rotation.x = THREE.MathUtils.lerp(
      camera.rotation.x,
      vertical,
      lerpSpeed
    );
    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      horizontal * 0.01 + vertical * 0.01,
      lerpSpeed
    );
    camera.updateProjectionMatrix();

    // // update cube camera from current camera position
    // if (cubeCameraRef.current) {
    //   cubeCameraRef.current.position.copy(camera.position);
    //   cubeCameraRef.current.update(gl, scene);
    // }
  });

  return <PerspectiveCamera makeDefault />;
}
// <EnvMapContext.Provider value={cubeRenderTarget.texture}>

//   {/* <cubeCamera ref={cubeCameraRef} args={[0.1, 1000, cubeRenderTarget]} /> */}
//   {/* {children} */}
// // </EnvMapContext.Provider>
