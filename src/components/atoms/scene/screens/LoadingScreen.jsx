import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function LoadingScreen() {
  return (
    <mesh scale={10} position={[0, 0, -50]}>
      <Text>Loading</Text>
      <mesh position={[0, -2, 0]}>
        <sphereGeometry args={[50, 10, 10]}></sphereGeometry>
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>
    </mesh>
  );
}
