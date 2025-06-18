import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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

const positionsArray = {
  firstLeft: {
    position: {
      x: 0,
      y: 0,
      z: -10.5,
    },
    rotation: {
      x: -0.01062,
      y: 0.77,
      z: 0.005,
    },
  },
  firstRight: {
    position: {
      x: 0,
      y: 0,
      z: -10.5,
    },
    rotation: {
      x: 0.01062,
      y: -0.77,
      z: -0.005,
    },
  },
  secondLeft: {
    position: {
      x: 0,
      y: 0,
      z: -115.5,
    },
    rotation: {
      x: -0.01062,
      y: 0.77,
      z: 0.005,
    },
  },
  secondRight: {
    position: {
      x: 0,
      y: 0,
      z: -115.5,
    },
    rotation: {
      x: 0.01062,
      y: -0.77,
      z: -0.005,
    },
  },
  thirdLeft: {
    position: {
      x: 0,
      y: 0,
      z: -215.5,
    },
    rotation: {
      x: -0.01062,
      y: 0.77,
      z: 0.005,
    },
  },
  thirdRight: {
    position: {
      x: 0,
      y: 0,
      z: -215.5,
    },
    rotation: {
      x: 0.01062,
      y: -0.77,
      z: -0.005,
    },
  },
};

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
        cameraRef.current.updateProjectionMatrix();
      }
    } else {
      if (cameraRef.current !== undefined) {
        cameraRef.current.position.z = THREE.MathUtils.lerp(
          cameraRef.current.position.z,
          positionsArray[selectedProject].position.z,
          lerpSpeed
        );
        cameraRef.current.rotation.x = THREE.MathUtils.lerp(
          cameraRef.current.rotation.x,
          positionsArray[selectedProject].rotation.x,
          lerpSpeed
        );
        cameraRef.current.rotation.y = THREE.MathUtils.lerp(
          cameraRef.current.rotation.y,
          positionsArray[selectedProject].rotation.y,
          lerpSpeed
        );
        cameraRef.current.rotation.z = THREE.MathUtils.lerp(
          cameraRef.current.rotation.z,
          positionsArray[selectedProject].rotation.z,
          lerpSpeed
        );
        cameraRef.current.updateProjectionMatrix();
      }
    }
  });

  return (
    <>
      {/* <OrbitControls></OrbitControls> */}
      <PerspectiveCamera ref={cameraRef} makeDefault far={25000} />
    </>
  );
}
