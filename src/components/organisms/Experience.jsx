import { Canvas, useLoader } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import { AppContext } from "../../context/AppContext.jsx";
import CheckSize from "../atoms/scene/CheckSize.jsx";
import Effects from "../atoms/scene/Effects.jsx";
import Paragraph from "../atoms/ui/Paragraph.jsx";
import Heading from "../atoms/ui/Heading";

export default function Experience() {
  const scrollContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(0);
  const targetRef = useRef();
  const texture = useLoader(RGBELoader, "./environ/env-2k-v1.hdr");
  texture.mapping = THREE.EquirectangularReflectionMapping;
  const inputMethod = useInputMethod();
  const { toggleReflections, language, changeReflectionQuality, reflections, dpr,
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
              <ProjectRight positionZ={-40} language={language}>
                <>
                  <div
                    className={`absolute top-0 left-0 z-0 w-[125%] -translate-x-[12.5%] -translate-y-[5%] h-auto aspect-video animated-gradient`}
                  ></div>
                  <div className={`relative z-10 grid w-full h-full grid-cols-3 text-white`}>
                    <div className="col-span-3 p-13">
                      <Heading className="text-6xl mb-9 orbitron font-[600]" level={1} language={language} text={{
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web"
                      }}>
                      </Heading>
                      <Paragraph
                        language={language}
                        text={{
                          en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                          es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS)."
                        }}
                        className="text-3xl mb-9 orbitron font-[400]"
                      ></Paragraph>
                      <div className="flex">
                        <div className="">
                          <Paragraph
                            language={language}
                            text={{
                              en: "Technologies:",
                              es: "Tecnologias usadas:"
                            }}
                            className="mb-4 text-2xl orbitron font-[600]"
                          ></Paragraph>
                        </div>
                        <div className="pl-6 flex">
                          <ul className="text-2xl orbitron font-[400] mr-12">
                            <li className="mb-3">
                              <p>NextJS</p>
                            </li>
                            <li className="mb-3">
                              <p>Tailwind</p>
                            </li>
                            <li className="mb-3">
                              <p>React Three Fiber</p>
                            </li>
                            <li className="mb-3">
                              <p>Framer</p>
                            </li>
                          </ul>
                          <ul className="text-2xl orbitron font-[400]">
                            <li className="mb-3">
                              <p>GSAP</p>
                            </li>
                            <li className="mb-3">
                              <p>Blender</p>
                            </li>
                            <li className="mb-3">
                              <p>React</p>
                            </li>
                            <li className="mb-3">
                              <p>Vite</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </ProjectRight>
              <ProjectLeft positionZ={-145} />
              <ProjectRight positionZ={-245}>
              </ProjectRight>
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
