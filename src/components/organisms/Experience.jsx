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
import CubeMap from "../atoms/scene/CubeMap.jsx";
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
              {
                reflections && (<Environment frames={Infinity} resolution={reflectionQuality}>
                  <MovingMap scroll={scrollRef}>
                    <EnviromentScene scale={1.0} />
                  </MovingMap>
                </Environment>)
              }

              {/* <EffectComposer>
                <Bloom
                  intensity={1.5} // how strong the glow is
                  luminanceThreshold={0.3} // minimum brightness to bloom
                  luminanceSmoothing={0.9} // smooth edges
                  blendFunction={BlendFunction.ADD} // blending mode
                />
              </EffectComposer> */}
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

              <CubeMap scroll={scrollRef}>
                {(texture) => <mesh>
                  <>{
                      texture !== undefined && (
                        <group>
                    <mesh position={[0, -20, 45]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, 5]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -35]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -75]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -115]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -155]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -195]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -235]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -275]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>

                    <mesh position={[0, -20, -315]}>
                      <boxGeometry args={[30, 2, 30]} />
                      <meshStandardMaterial roughness={0} metalness={0.5} color="#000022" envMap={texture} />
                    </mesh>



                        </group>
                      )
                    }
                  </>
                </mesh>}
              </CubeMap>*/}
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
