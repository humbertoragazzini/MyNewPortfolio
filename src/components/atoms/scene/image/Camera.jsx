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
import { AppContext } from "../../../../context/AppContext";

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

export default function Camera({
  scroll,
  joystickLeft,
  joystickRight,
  children,
  setTurnOn,
}) {
  const cameraRef = useRef();
  const lerpSpeed = 0.05;
  const horizontal = useRef({ x: 0, y: 0, z: 0 });
  const lateralDisplacement = useRef(0);
  const vertical = useRef(0);
  const { selectedProject } = useContext(AppContext);

  useEffect(() => {
    const move = (e) => {
      if (joystickRight.current == null) {
        horizontal.current.x =
          (-(e.clientX - window.outerWidth / 2) / window.outerWidth) * 1;
        horizontal.current.y =
          (-(e.clientY - window.outerHeight / 2) / window.outerHeight) * 0.25;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(() => {
    if (selectedProject == null) {
      if (cameraRef.current !== undefined) {
        const targetZ = 75 - 1 * 1260 * scroll.current;
        if (targetZ < -200) {
          setTurnOn(true);
        }
        joystickRight.current !== null
          ? (horizontal.current.x = -joystickRight.current.x)
          : null;
        joystickRight.current !== null
          ? (horizontal.current.y = joystickRight.current.y)
          : null;
        joystickLeft.current !== null
          ? (lateralDisplacement.current = joystickLeft.current.x)
          : null;
        cameraRef.current.position.z = THREE.MathUtils.lerp(
          cameraRef.current.position.z,
          targetZ,
          lerpSpeed
        );
        cameraRef.current.position.x = THREE.MathUtils.lerp(
          cameraRef.current.position.x,
          lateralDisplacement.current,
          lerpSpeed
        );
        cameraRef.current.rotation.y = THREE.MathUtils.lerp(
          cameraRef.current.rotation.y,
          horizontal.current.x,
          lerpSpeed
        );
        cameraRef.current.rotation.x = THREE.MathUtils.lerp(
          cameraRef.current.rotation.x,
          horizontal.current.y,
          lerpSpeed
        );
        cameraRef.current.rotation.z = THREE.MathUtils.lerp(
          cameraRef.current.rotation.z,
          horizontal.current.x * 0.01 + horizontal.current.y * 0.01,
          lerpSpeed
        );
        cameraRef.current.updateProjectionMatrix();
      }
    } else {
      if (cameraRef.current !== undefined) {
        joystickRight.current !== null
          ? (horizontal.current.x = -joystickRight.current.x)
          : null;
        joystickRight.current !== null
          ? (horizontal.current.y = joystickRight.current.y)
          : null;
        cameraRef.current.position.z = THREE.MathUtils.lerp(
          cameraRef.current.position.z,
          positionsArray[selectedProject].position.z,
          lerpSpeed
        );
        cameraRef.current.rotation.x = THREE.MathUtils.lerp(
          cameraRef.current.rotation.x,
          positionsArray[selectedProject].rotation.x + horizontal.current.y,
          lerpSpeed
        );
        cameraRef.current.rotation.y = THREE.MathUtils.lerp(
          cameraRef.current.rotation.y,
          positionsArray[selectedProject].rotation.y + horizontal.current.x,
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
