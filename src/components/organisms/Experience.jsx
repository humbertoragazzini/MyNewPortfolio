import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MainScene from "./MainScene.jsx";
import ProjectRight from "../atoms/scene/ProjectRight.jsx";
import Camera from "../atoms/scene/Camera.jsx";
import ProjectLeft from "../atoms/scene/ProjectLeft.jsx";
import VideoLeft from "../atoms/scene/VideoLeft.jsx";
import VideoRight from "../atoms/scene/VideoRight.jsx";
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
import Project from "../atoms/project/Project.jsx";
import { TestingFloor } from "../atoms/scene/testingFloor.jsx";
import { Joystick } from "react-joystick-component";
import LoadingSystems from "../atoms/ui/LoadingSystems.jsx";
import { Html } from "@react-three/drei";

export default function Experience() {
  const scrollContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(0);
  const targetRef = useRef();
  const joystickSpeed = useRef();
  const joystickHorizontalSpeed = useRef(null);
  const joystickVerticalSpeed = useRef(null);
  const inputMethod = useInputMethod();
  const {
    toggleReflections,
    language,
    changeReflectionQuality,
    reflections,
    dpr,
    reflectionQuality,
    selectedProject,
  } = useContext(AppContext);
  const materialFloor = useRef(
    new THREE.MeshStandardMaterial({ color: "black" })
  );
  const geometryFloor = useRef(new THREE.BoxGeometry(20, 1, 30));

  useEffect(() => {
    const joystickSpeedInterval = setInterval(() => {
      if (scrollRef.current >= 0 && scrollRef.current < 1) {
        if (joystickVerticalSpeed.current !== null) {
          scrollRef.current += joystickVerticalSpeed.current.y;
        }
      }
      if (scrollRef.current < 0) {
        scrollRef.current = 0;
      }
    }, 150);
  }, []);

  function handleMoveLeftStick(e) {
    const newValues = {
      y: e.y * 0.01,
      x: e.x * 10,
    };
    joystickVerticalSpeed.current = newValues;
  }
  function handleStopLeftStick(e) {
    const newValues = {
      y: 0,
      x: joystickVerticalSpeed.current.x ?? 0,
    };
    joystickVerticalSpeed.current = newValues;
  }

  function handleMoveRightStick(e) {
    const newValues = {
      y: e.y,
      x: e.x,
    };
    joystickHorizontalSpeed.current = newValues;
  }
  function handleStopRightStick(e) {
    const newValues = {
      y:
        joystickHorizontalSpeed.current !== null
          ? joystickHorizontalSpeed.current.y
          : 0,
      x:
        joystickHorizontalSpeed.current !== null
          ? joystickHorizontalSpeed.current.x
          : 0,
    };
    joystickHorizontalSpeed.current = newValues;
  }

  return (
    <div className="w-full h-[100dvh] overflow-hidden bg-black">
      <div className="fixed bottom-0 z-50 flex justify-center w-screen p-5 [&>[data-testid]]:!bg-[rgba(0,0,0,0.5)] [&>[data-testid]]:!backdrop-blur [&>[data-testid]]:!border-2 [&>[data-testid]]:m-4 [&>[data-testid]]:!border-[rgba(125,125,125,0.5)] [&_button]:!bg-[rgba(255,255,255,0.5)]">
        <Joystick
          size={100}
          sticky={false}
          baseColor="red"
          stickColor="blue"
          move={handleMoveLeftStick}
          stop={handleStopLeftStick}
        ></Joystick>
        <Joystick
          size={100}
          sticky={false}
          baseColor="red"
          stickColor="blue"
          move={handleMoveRightStick}
          stop={handleStopRightStick}
        ></Joystick>
      </div>
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className={`scroller elative z-[9900] w-screen h-[100dvh] ${
          selectedProject ? "overflow-y-hidden" : "overflow-y-scroll"
        }`}
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
            <Canvas
              shadows
              dpr={dpr}
              gl={{ preserveDrawingBuffer: false, antialias: true }}
            >
              {/* <OrbitControls></OrbitControls> */}
              {/* <PerspectiveCamera></PerspectiveCamera> */}
              <Camera
                scroll={scrollRef}
                joystickLeft={joystickVerticalSpeed}
                joystickRight={joystickHorizontalSpeed}
              ></Camera>
              {/* <TestingFloor></TestingFloor> */}
              <Effects scroll={scrollRef}>
                {(texture) => {
                  return (
                    <mesh>
                      <group>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, 45]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={1.0}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, 5]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={1.0}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -35]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={1.0}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -75]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={1.0}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -115]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={1.0}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -155]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={1.0}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -195]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -235]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -275]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -315]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -355]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -395]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -435]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -475]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -515]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -555]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -595]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -635]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -675]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -715]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -755]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -795]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -835]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -875]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -915]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -955]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -995]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1035]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1075]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1115]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1155]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1195]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1235]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1275]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1315]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1355]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1395]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1435]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1475]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1515]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1555]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1595]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1635]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1675]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1715]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1755]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1795]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1835]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1875]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1915]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1955]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -1995]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -2035]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -2075]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -2115]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -2155]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -2195]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                        <mesh
                          geometry={geometryFloor.current}
                          position={[0, -20, -2235]}
                        >
                          <meshStandardMaterial
                            roughness={0}
                            metalness={0.5}
                            color="#000022"
                            envMap={texture ?? undefined}
                          />
                        </mesh>
                      </group>
                    </mesh>
                  );
                }}
              </Effects>
              <Suspense
                fallback={
                  <mesh position={[0, 0, -50]}>
                    <boxGeometry args={[10, 10, 10]}></boxGeometry>
                    <meshBasicMaterial color={"white"}></meshBasicMaterial>
                  </mesh>
                }
              >
                <MainScene scale={1} />
                {/* <VideoLeft
                  positionZ={-40}
                  source={"videos/Testing_Video_h_264.mp4"}
                  url={"https://www.primalports.com/"}
                ></VideoLeft>
                <VideoRight
                  positionZ={-145}
                  source={"videos/Testing_Video_h_264.mp4"}
                  url={"https://humbertoragazzini.github.io/TheSuperGame/"}
                ></VideoRight>
                <VideoLeft
                  positionZ={-245}
                  source={"videos/Testing_Video_h_264.mp4"}
                  url={"https://humbertoragazzini.github.io/thewebglglobe/dist/"}
                /> */}
                <ProjectLeft
                  positionZ={-40}
                  language={language}
                  projectId={"firstLeft"}
                >
                  <Project
                    language={language}
                    content={{
                      projectName: {
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web",
                      },
                      description: {
                        en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                        es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS).",
                      },
                      technologies: [
                        "Tailwind",
                        "React Three Fiber",
                        "Framer",
                        "GSAP",
                        "Blender",
                        "React",
                        "Vite",
                      ],
                      link: {
                        label: {
                          en: "Link to the project",
                          es: "Link al projecto",
                        },
                        url: "https://www.google.com",
                      },
                    }}
                  ></Project>
                </ProjectLeft>
                <ProjectRight
                  positionZ={-40}
                  language={language}
                  projectId={"firstRight"}
                >
                  <Project
                    language={language}
                    content={{
                      projectName: {
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web",
                      },
                      description: {
                        en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                        es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS).",
                      },
                      technologies: [
                        "Tailwind",
                        "React Three Fiber",
                        "Framer",
                        "GSAP",
                        "Blender",
                        "React",
                        "Vite",
                      ],
                      link: {
                        label: {
                          en: "Link to the project",
                          es: "Link al projecto",
                        },
                        url: "https://www.google.com",
                      },
                    }}
                  ></Project>
                </ProjectRight>
                <ProjectLeft
                  positionZ={-145}
                  language={language}
                  projectId={"secondLeft"}
                >
                  <Project
                    language={language}
                    content={{
                      projectName: {
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web",
                      },
                      description: {
                        en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                        es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS).",
                      },
                      technologies: [
                        "Tailwind",
                        "React Three Fiber",
                        "Framer",
                        "GSAP",
                        "Blender",
                        "React",
                        "Vite",
                      ],
                      link: {
                        label: {
                          en: "Link to the project",
                          es: "Link al projecto",
                        },
                        url: "https://www.google.com",
                      },
                    }}
                  ></Project>
                </ProjectLeft>
                <ProjectRight
                  positionZ={-145}
                  language={language}
                  projectId={"secondRight"}
                >
                  <Project
                    language={language}
                    content={{
                      projectName: {
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web",
                      },
                      description: {
                        en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                        es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS).",
                      },
                      technologies: [
                        "Tailwind",
                        "React Three Fiber",
                        "Framer",
                        "GSAP",
                        "Blender",
                        "React",
                        "Vite",
                      ],
                      link: {
                        label: {
                          en: "Link to the project",
                          es: "Link al projecto",
                        },
                        url: "https://www.google.com",
                      },
                    }}
                  ></Project>
                </ProjectRight>
                <ProjectLeft
                  positionZ={-245}
                  language={language}
                  projectId={"thirdLeft"}
                >
                  <Project
                    language={language}
                    content={{
                      projectName: {
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web",
                      },
                      description: {
                        en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                        es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS).",
                      },
                      technologies: [
                        "Tailwind",
                        "React Three Fiber",
                        "Framer",
                        "GSAP",
                        "Blender",
                        "React",
                        "Vite",
                      ],
                      link: {
                        label: {
                          en: "Link to the project",
                          es: "Link al projecto",
                        },
                        url: "https://www.google.com",
                      },
                    }}
                  ></Project>
                </ProjectLeft>
                <ProjectRight
                  positionZ={-245}
                  language={language}
                  projectId={"thirdRight"}
                >
                  <Project
                    language={language}
                    content={{
                      projectName: {
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web",
                      },
                      description: {
                        en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                        es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS).",
                      },
                      technologies: [
                        "Tailwind",
                        "React Three Fiber",
                        "Framer",
                        "GSAP",
                        "Blender",
                        "React",
                        "Vite",
                      ],
                      link: {
                        label: {
                          en: "Link to the project",
                          es: "Link al projecto",
                        },
                        url: "https://www.google.com",
                      },
                    }}
                  ></Project>
                </ProjectRight>
                <Final></Final>
                <Lights targetRef={targetRef}></Lights>
              </Suspense>
              <CheckSize></CheckSize>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
