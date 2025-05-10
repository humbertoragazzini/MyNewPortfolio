import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import MainScene from "../MainScene";
import Enviroment from "../atoms/Enviroment";

export default function Experience() {
  return (
    <div className="w-full h-full bg-black">
      <Canvas className="z-[0]" shadows>
        <ambientLight intensity={7}></ambientLight>
        <OrbitControls></OrbitControls>
        {/* <Environment preset="sunset" /> */}
        {/* <Enviroment></Enviroment> */}
        <Html>
          <div>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img src="https://placehold.co/600x600"></img>
              </div>
              <div className="col-span-2">
                <h2>Title of the project</h2>
                <p>Small explanations of the project</p>
                <p>
                  <strong>Technologies used:</strong>
                </p>
                <ul>
                  <li>
                    <strong>NextJS:</strong>Explanation what this technologie is
                    doing
                  </li>
                  <li>
                    <strong>Tailwind:</strong>Explanation what this technologie
                    is doing
                  </li>
                  <li>
                    <strong>Vite:</strong>Explanation what this technologie is
                    doing
                  </li>
                  <li>
                    <strong>Threejs:</strong>Explanation what this technologie
                    is doing
                  </li>
                  <li>
                    <strong>Blender:</strong>Explanation what this technologie
                    is doing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Html>
        <MainScene></MainScene>
      </Canvas>
    </div>
  );
}
