import { Text } from "@react-three/drei";

export default function TextShader({ text }) {
  return (
    <Text
      position={[0, 15, 0]}
      scale={5}
      color="blue"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}
