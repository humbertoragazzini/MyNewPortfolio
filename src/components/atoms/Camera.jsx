import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Camera({ scroll }) {
  const { camera } = useThree();
  const targetZ = 80 - 1 * 350 * scroll;
  const lerpSpeed = 0.05;

  useFrame(() => {
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZ,
      lerpSpeed
    );
    camera.updateProjectionMatrix();
  });
  return <PerspectiveCamera makeDefault />;
}
