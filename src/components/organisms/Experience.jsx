import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import MainScene from "../MainScene";

export default function Experience() {
  return (
    <div className="w-full h-full bg-black">
      <Canvas className="z-[0]" shadows>
        <ambientLight intensity={7}></ambientLight>
        <OrbitControls></OrbitControls>
        <Environment preset="sunset" />
        <MainScene></MainScene>
      </Canvas>
    </div>
  );
}
