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

export default function Camera({ scroll, children }) {
  const cameraRef = useRef();
  const lerpSpeed = 0.05;
  const horizontal = useRef(0);
  const vertical = useRef(0);

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
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault far={25000} />;
}
