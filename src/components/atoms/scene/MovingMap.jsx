import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MovingMap({ children }) {
  const meshRef = useRef();
  // const targetZ = 75 + 1 * 1492 * scroll;
  // const lerpSpeed = 0.05;
  // useFrame(() => {
  //   if (!meshRef.current) return;

  //   const newZ = -(100 - 1 * 1492 * scroll);
  //   // targetZ.current = THREE.MathUtils.lerp(targetZ.current, newZ, lerpSpeed);
  //   meshRef.current.position.z = THREE.MathUtils.lerp(
  //     meshRef.current.position.z,
  //     targetZ,
  //     lerpSpeed
  //   );
  // });

  console.log("mounted");
  return <group ref={meshRef}>{children}</group>;
}
