import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MovingMap({ scroll, children }) {
  const meshRef = useRef();
  const targetZ = useRef(0);
  const lerpSpeed = 0.05;

  useFrame(() => {
    if (!meshRef.current) return;

    const newZ = -(100 - 450 * scroll);
    targetZ.current = THREE.MathUtils.lerp(targetZ.current, newZ, lerpSpeed);

    // meshRef.current.position.z = targetZ.current;
  });

  return <group ref={meshRef}>{children}</group>;
}
