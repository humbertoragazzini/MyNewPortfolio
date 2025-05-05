import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";

export default function Experience() {
  return (
    <div className="w-full h-full">
      <Canvas className="z-[0]" shadows>
        <ambientLight intensity={7}></ambientLight>
        <OrbitControls></OrbitControls>
        <Environment preset="sunset" background />
        <group>
          <mesh>
            <boxGeometry></boxGeometry>
            <meshBasicMaterial></meshBasicMaterial>
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}
