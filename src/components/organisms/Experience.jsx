import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import MainScene from "../MainScene";
import Enviroment from "../atoms/Enviroment";
import Project from "../atoms/Project";

export default function Experience() {
  return (
    <div className="w-full h-full bg-black">
      <Canvas className="z-[0]" shadows>
        <ambientLight intensity={7}></ambientLight>
        <OrbitControls></OrbitControls>
        {/* <Environment preset="sunset" /> */}
        {/* <Enviroment></Enviroment> */}
        <Project></Project>
        <MainScene></MainScene>
      </Canvas>
    </div>
  );
}
