import { Canvas, useLoader } from "@react-three/fiber";
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
import { RGBELoader } from "three/examples/jsm/Addons.js";

export default function Experience() {
  const scrollContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const targetRef = useRef();
  const texture = useLoader(RGBELoader, "./environ/env-2k-v1.hdr");
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="relative z-[9999] w-screen h-screen overflow-y-scroll"
        onScroll={(e) => {
          const target = e.currentTarget;
          const scrollTop = target.scrollTop;
          const scrollHeight = target.scrollHeight;
          const clientHeight = target.clientHeight;
          const scrollProgress = scrollTop / (scrollHeight - clientHeight);
          setScroll(scrollProgress);
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
              {/* <Environment resolution={2048} background frames={Infinity}>
                <color args={["black"]} attach="background"></color>
                <group>
                  <mesh position={[0, 0, -2]}>
                    <torusGeometry args={[30, 0.5, 50]}></torusGeometry>
                    <meshBasicMaterial color={"white"}></meshBasicMaterial>
                  </mesh>
                </group>
                <Background></Background>
              </Environment> */}
              {/* <Environment
                map={texture}
                background
                rotation={[0, Math.PI / 2, 0]}
              /> */}
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
              {/* <mesh
                ref={targetRef}
                position={[0, 0, 50]}
                castShadow
                receiveShadow
              >
                <boxGeometry args={[5, 5, 5]}></boxGeometry>
                <meshStandardMaterial color={"white"}></meshStandardMaterial>
              </mesh> */}
              {/* <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -6, 50]}
                receiveShadow
              >
                <planeGeometry args={[15, 15]}></planeGeometry>
                <meshStandardMaterial
                  color={"white"}
                  side={THREE.DoubleSide}
                ></meshStandardMaterial>
              </mesh> */}
              <MainScene />
              {/* <OrbitControls></OrbitControls> */}
              <Background></Background>
              <ambientLight intensity={0.1} />
              <Camera scroll={scroll}></Camera>
              {/* <Lights targetRef={targetRef}></Lights> */}
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
