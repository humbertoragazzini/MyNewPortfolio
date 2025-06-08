import { Canvas, useLoader } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import MainScene from "./MainScene.jsx";
import ProjectRight from "../atoms/scene/ProjectRight.jsx";
import Camera from "../atoms/scene/Camera.jsx";
import ProjectLeft from "../atoms/scene/ProjectLeft.jsx";
import IframedLeft from "../atoms/scene/IframedLeft";
import IframedRight from "../atoms/scene/IframedRight";
import * as THREE from "three";
import Lights from "../atoms/scene/Lights.jsx";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { useInputMethod } from "../../hooks/CheckInput.jsx";
import Final from "../atoms/scene/Final.jsx";
import OverlayMenu from "../molecules/menu/OverlayMenu.jsx";
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import EnviromentScene from "./EnviromentScene.jsx";
import MovingMap from "../atoms/scene/MovingMap.jsx";
import { AppContext } from "../../context/AppContext.jsx";
import CheckSize from "../atoms/scene/CheckSize.jsx";
import Effects from "../atoms/scene/Effects.jsx";
import { BloomEffect } from "../atoms/scene/BloomEffect.jsx";

export default function Experience() {
  const scrollContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(0);
  const targetRef = useRef();
  const texture = useLoader(RGBELoader, "./environ/env-2k-v1.hdr");
  texture.mapping = THREE.EquirectangularReflectionMapping;
  const inputMethod = useInputMethod();
  const { toggleReflections, changeReflectionQuality, reflections, dpr,
    reflectionQuality } = useContext(AppContext);
  const materialFloor = useRef(new THREE.MeshStandardMaterial({ color: "black" }))
  const geometryFloor = useRef(new THREE.BoxGeometry(20, 1, 30));

  useEffect(() => {
    console.log(inputMethod);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="scroller elative z-[9900] w-screen h-screen overflow-y-scroll"
        onScroll={(e) => {
          const target = e.currentTarget;
          const scrollTop = target.scrollTop;
          const scrollHeight = target.scrollHeight;
          const clientHeight = target.clientHeight;
          const scrollProgress = scrollTop / (scrollHeight - clientHeight);
          scrollRef.current = scrollProgress;
        }}
      >
        <div style={{ height: "1500vh" }}>
          <motion.div className="sticky top-0" style={{ height: "100vh" }}>
            <Canvas shadows dpr={dpr} gl={{ preserveDrawingBuffer: false, antialias: true }}>
              <IframedLeft
                positionZ={-40}
                url={"https://www.primalports.com/"}
              ></IframedLeft>
              <IframedRight
                positionZ={-145}
                url={"https://humbertoragazzini.github.io/TheSuperGame/"}
              ></IframedRight>
              <IframedLeft
                positionZ={-245}
                url={"https://humbertoragazzini.github.io/thewebglglobe/dist/"}
              />
              <ProjectRight positionZ={-40} />
              <ProjectLeft positionZ={-145} />
              <ProjectRight positionZ={-245} />
              <Final></Final>
              {/* <OrbitControls></OrbitControls> */}
              {/* <PerspectiveCamera></PerspectiveCamera> */}
              <Camera scroll={scrollRef}></Camera>
              <Effects scroll={scrollRef}>
                {(texture) => {
                  return (<mesh>
                    <group>
                      <mesh geometry={geometryFloor.current} position={[0, -20, 45]}>
                        <meshStandardMaterial roughness={0} metalness={1.0} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, 5]}>
                        <meshStandardMaterial roughness={0} metalness={1.0} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -35]}>
                        <meshStandardMaterial roughness={0} metalness={1.0} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -75]}>
                        <meshStandardMaterial roughness={0} metalness={1.0} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -115]}>
                        <meshStandardMaterial roughness={0} metalness={1.0} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -155]}>
                        <meshStandardMaterial roughness={0} metalness={1.0} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -195]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -235]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -275]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -315]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -355]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -395]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -435]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -475]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -515]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -555]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -595]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -635]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -675]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -715]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -755]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -795]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -835]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -875]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -915]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -955]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -995]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1035]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1075]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1115]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1155]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1195]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1235]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1275]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1315]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1355]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1395]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1435]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1475]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1515]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1555]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1595]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1635]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1675]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1715]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1755]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1795]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1835]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1875]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1915]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1955]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -1995]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -2035]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -2075]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -2115]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -2155]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -2195]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>
                      <mesh geometry={geometryFloor.current} position={[0, -20, -2235]}>
                        <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture ?? undefined} />
                      </mesh>

                    </group>
                  </mesh>)
                }}
              </Effects>
              <MainScene scale={1} />
              <Lights targetRef={targetRef}></Lights>
              <CheckSize></CheckSize>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
