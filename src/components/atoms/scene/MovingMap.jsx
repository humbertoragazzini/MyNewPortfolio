import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MovingMap({ scroll, children }) {
  const meshRef = useRef();
  const lerpSpeed = 0.05;
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      -(100 - 1 * 1492 * scroll.current),
      lerpSpeed
    );
  });

  return <group ref={meshRef}>{children}</group>;
}
