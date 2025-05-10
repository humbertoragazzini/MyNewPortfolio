import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import MainScene from "../MainScene";
import ProjectRight from "../atoms/ProjectRight";
import Camera from "../atoms/Camera";
import ProjectLeft from "../atoms/ProjectLeft";
import IframedLeft from "../atoms/IframedLeft";
import IframedRight from "../atoms/IframedRight";
import * as THREE from "three";

export default function Experience() {
  const scrollContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const lightRef = useRef();
  const targetRef = useRef();

  useEffect(() => {
    if (lightRef.current && targetRef.current) {
      lightRef.current.target = targetRef.current;
    }
  }, []);

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
              <ambientLight intensity={7} />
              <Camera scroll={scroll}></Camera>
              <IframedLeft
                positionZ={10}
                url={"https://www.primalports.com/"}
              ></IframedLeft>
              <ProjectRight positionZ={10} />
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
              <directionalLight
                ref={lightRef}
                position={[0, 25, 0]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-left={-25}
                shadow-camera-right={25}
                shadow-camera-top={25}
                shadow-camera-bottom={-25}
                shadow-camera-near={1}
                shadow-camera-far={50}
              />
              <mesh
                ref={targetRef}
                position={[0, 0, 50]}
                castShadow
                receiveShadow
              >
                <boxGeometry args={[5, 5, 5]}></boxGeometry>
                <meshStandardMaterial color={"white"}></meshStandardMaterial>
                {/* <meshBasicMaterial></meshBasicMaterial> */}
              </mesh>
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -6, 50]}
                castShadow
                receiveShadow
              >
                <planeGeometry args={[15, 15]}></planeGeometry>
                <meshStandardMaterial
                  color={"white"}
                  side={THREE.DoubleSide}
                ></meshStandardMaterial>
                {/* <meshBasicMaterial></meshBasicMaterial> */}
              </mesh>
              <MainScene />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
