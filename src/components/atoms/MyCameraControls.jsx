import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MyCameraControls({ scroll }) {
  const { camera } = useThree();
  const targetZ = 80 - 1 * 300 * scroll;
  const lerpSpeed = 0.05;

  useFrame(() => {
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZ,
      lerpSpeed
    );
    camera.updateProjectionMatrix();
  });

  return null;
}
