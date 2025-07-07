import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function LoadingScreen() {
  const sphereRef = useRef(null);

  useFrame(() => {
    if (sphereRef.current !== null) {
      sphereRef.current.rotation.x += 0.0002;
      sphereRef.current.rotation.y += 0.0002;
      sphereRef.current.rotation.z += 0.0002;
    }
  });
  return (
    <mesh scale={10} position={[0, 0, -50]}>
      <Text>Loading</Text>
      <mesh ref={sphereRef} position={[0, -2, 0]}>
        <sphereGeometry args={[50, 10, 10]}></sphereGeometry>
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>
    </mesh>
  );
}
