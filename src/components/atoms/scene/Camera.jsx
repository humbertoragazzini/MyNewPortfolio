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
import { AppContext } from "../../../context/AppContext";

export default function Camera({ scroll, children }) {
  const cameraRef = useRef();
  const lerpSpeed = 0.05;
  const horizontal = useRef(0);
  const vertical = useRef(0);
  const { selectedProject } = useContext(AppContext);

  useEffect(() => {
    const move = (e) => {
      horizontal.current =
        (-(e.clientX - window.outerWidth / 2) / window.outerWidth) * 1;
      vertical.current =
        (-(e.clientY - window.outerHeight / 2) / window.outerHeight) * 0.25;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(() => {
    if (selectedProject == null) {
      if (cameraRef.current !== undefined) {
        const targetZ = 75 - 1 * 1260 * scroll.current;
        cameraRef.current.position.z = THREE.MathUtils.lerp(
          cameraRef.current.position.z,
          targetZ,
          lerpSpeed
        );
        cameraRef.current.rotation.y = THREE.MathUtils.lerp(
          cameraRef.current.rotation.y,
          horizontal.current,
          lerpSpeed
        );
        cameraRef.current.rotation.x = THREE.MathUtils.lerp(
          cameraRef.current.rotation.x,
          vertical.current,
          lerpSpeed
        );
        cameraRef.current.rotation.z = THREE.MathUtils.lerp(
          cameraRef.current.rotation.z,
          horizontal.current * 0.01 + vertical.current * 0.01,
          lerpSpeed
        );
        console.log(`rotation:x${cameraRef.current.rotation.x},rotation:y${cameraRef.current.rotation.y},rotation:z${cameraRef.current.rotation.z}`)
        cameraRef.current.updateProjectionMatrix();
      }
    } else {
      // 0.010624999999999983,rotation:y-0.49947916666666553,rotation:z-0.0048
      if (cameraRef.current !== undefined) {
        const targetZ = -12.5;
        cameraRef.current.position.z = THREE.MathUtils.lerp(
          cameraRef.current.position.z,
          targetZ,
          lerpSpeed
        );
        cameraRef.current.rotation.y = THREE.MathUtils.lerp(
          cameraRef.current.rotation.y,
          -0.7994,
          lerpSpeed
        );
        cameraRef.current.rotation.x = THREE.MathUtils.lerp(
          cameraRef.current.rotation.x,
          0.01062,
          lerpSpeed
        );
        cameraRef.current.rotation.z = THREE.MathUtils.lerp(
          cameraRef.current.rotation.z,
          horizontal.current * 0.01 + vertical.current * 0.01,
          lerpSpeed
        );
        cameraRef.current.updateProjectionMatrix();
      }
    }


  });

  return <PerspectiveCamera ref={cameraRef} makeDefault far={25000} />;
}
