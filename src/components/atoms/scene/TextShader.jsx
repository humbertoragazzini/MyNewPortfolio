import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function TextShader({ text }) {
  return (
    <Text
      position={[0, 15, 0]}
      scale={5}
      anchorX="center"
      anchorY="middle"
      material={new THREE.MeshStandardMaterial({ color: "red" })}
    >
      {text}
    </Text>
  );
}
