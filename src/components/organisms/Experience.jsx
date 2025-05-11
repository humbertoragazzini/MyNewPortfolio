import { Canvas } from "@react-three/fiber";
import {
  Environment,
  EnvironmentMap,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import MainScene from "../MainScene";
import ProjectRight from "../atoms/ProjectRight";
import Camera from "../atoms/Camera";
import ProjectLeft from "../atoms/ProjectLeft";
import IframedLeft from "../atoms/IframedLeft";
import IframedRight from "../atoms/IframedRight";
import * as THREE from "three";
import Lights from "../atoms/Lights";
import { Background } from "../atoms/Background";

export default function Experience() {
  const scrollContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const targetRef = useRef();

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="relative z-[9999] w-screen h-screen overflow-y-scroll"
        onScroll={(e) => {
          // const target = e.currentTarget;
          // const scrollTop = target.scrollTop;
          // const scrollHeight = target.scrollHeight;
          // const clientHeight = target.clientHeight;
          // const scrollProgress = scrollTop / (scrollHeight - clientHeight);
          // setScroll(scrollProgress);
        }}
      >
        <div style={{ height: "600vh" }}>
          <motion.div className="sticky top-0" style={{ height: "100vh" }}>
            <Canvas shadows>
              <IframedLeft
                positionZ={10}
                url={"https://www.primalports.com/"}
              ></IframedLeft>
              <ProjectRight positionZ={10} />
              <Environment background resolution={256}>
                {/* This object will be rendered into the environment map */}
                <mesh position={[0, 0, 0]}>
                  <sphereGeometry args={[1, 32, 32]} />
                  <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={0.4}
                    mixStrength={80}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#050505"
                    metalness={0.5}
                  />
                </mesh>
              </Environment>
              <IframedRight
                positionZ={-25}
                url={"https://humbertoragazzini.github.io/thewebglglobe/dist/"}
              />
              <ProjectLeft positionZ={-25} />
              <ProjectRight positionZ={-60} />
              <IframedLeft
                positionZ={-60}
                url={"https://humbertoragazzini.github.io/TheSuperGame/"}
              ></IframedLeft>
              <mesh
                ref={targetRef}
                position={[0, 0, 50]}
                castShadow
                receiveShadow
              >
                <boxGeometry args={[5, 5, 5]}></boxGeometry>
                <meshStandardMaterial color={"white"}></meshStandardMaterial>
              </mesh>
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -6, 50]}
                receiveShadow
              >
                <planeGeometry args={[15, 15]}></planeGeometry>
                <meshStandardMaterial
                  color={"white"}
                  side={THREE.DoubleSide}
                ></meshStandardMaterial>
              </mesh>
              <MainScene />
              <OrbitControls></OrbitControls>
              <Background></Background>
              <ambientLight targetRef={targetRef} intensity={0.1} />
              {/* <Camera scroll={scroll}></Camera> */}
              <Lights targetRef={targetRef}></Lights>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
