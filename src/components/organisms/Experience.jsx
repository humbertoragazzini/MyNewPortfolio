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

const projects = [
  {
    positionZ: -40,
    projectId: "firstLeft",
    orientation: "left",
    projectName: {
      en: "My first project as a web developer",
      es: "Mi primer project como desarrollador web",
    },
    description: {
      en: "This was the first project I created in HTML, with CSS and a bit of JavaScript. This project was the beginning of what is now my career. It’s impressive to look at this project and know that everything started here. This project holds great sentimental value because I can come back to it and see how my knowledge has grown over time and with a lot of effort.",
      es: "Este fue el primer projecto que realize en HTML, con CSS y un poco the Javascript, este projecto fue el comienzo de lo que hoy es mi carrera, es impresionante ver este projecto y saber que todo empezo aqui, este projecto tiene ese gran valor sentimental de poder volver a el y ver como mi conocimiento crecio con tiempo y mucho esfuerzo.",
    },
    technologies: [
      "Bootstrap",
      "HTML5",
      "CSS",
      "Javascript",
    ],
    links: [
      {
        title: {
          en: "Link to the project",
          es: "Link al projecto",
        },
        label: {
          en: "Click to visit my first project",
          es: "Clieckea aqui para visitar mi primer projecto",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      },
      {
        title: {
          en: "Link to the Github repository",
          es: "Link al repositorio de Github",
        },
        label: {
          en: "Github Repository",
          es: "Repositorio de Github",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      }
    ],
  },
  {
    positionZ: -40,
    projectId: "firstRight",
    orientation: "right",
    projectName: {
      en: "My first project as a web developer",
      es: "Mi primer project como desarrollador web",
    },
    description: {
      en: "This was the first project I created in HTML, with CSS and a bit of JavaScript. This project was the beginning of what is now my career. It’s impressive to look at this project and know that everything started here. This project holds great sentimental value because I can come back to it and see how my knowledge has grown over time and with a lot of effort.",
      es: "Este fue el primer projecto que realize en HTML, con CSS y un poco the Javascript, este projecto fue el comienzo de lo que hoy es mi carrera, es impresionante ver este projecto y saber que todo empezo aqui, este projecto tiene ese gran valor sentimental de poder volver a el y ver como mi conocimiento crecio con tiempo y mucho esfuerzo.",
    },
    technologies: [
      "Bootstrap",
      "HTML5",
      "CSS",
      "Javascript",
    ],
    links: [
      {
        title: {
          en: "Link to the project",
          es: "Link al projecto",
        },
        label: {
          en: "Click to visit my first project",
          es: "Clieckea aqui para visitar mi primer projecto",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      },
      {
        title: {
          en: "Link to the Github repository",
          es: "Link al repositorio de Github",
        },
        label: {
          en: "Github Repository",
          es: "Repositorio de Github",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      }
    ],
  },
  {
    positionZ: -145,
    projectId: "secondLeft",
    orientation: "left",
    projectName: {
      en: "My first project as a web developer",
      es: "Mi primer project como desarrollador web",
    },
    description: {
      en: "This was the first project I created in HTML, with CSS and a bit of JavaScript. This project was the beginning of what is now my career. It’s impressive to look at this project and know that everything started here. This project holds great sentimental value because I can come back to it and see how my knowledge has grown over time and with a lot of effort.",
      es: "Este fue el primer projecto que realize en HTML, con CSS y un poco the Javascript, este projecto fue el comienzo de lo que hoy es mi carrera, es impresionante ver este projecto y saber que todo empezo aqui, este projecto tiene ese gran valor sentimental de poder volver a el y ver como mi conocimiento crecio con tiempo y mucho esfuerzo.",
    },
    technologies: [
      "Bootstrap",
      "HTML5",
      "CSS",
      "Javascript",
    ],
    links: [
      {
        title: {
          en: "Link to the project",
          es: "Link al projecto",
        },
        label: {
          en: "Click to visit my first project",
          es: "Clieckea aqui para visitar mi primer projecto",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      },
      {
        title: {
          en: "Link to the Github repository",
          es: "Link al repositorio de Github",
        },
        label: {
          en: "Github Repository",
          es: "Repositorio de Github",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      }
    ],
  },
  {
    positionZ: -145,
    projectId: "secondRight",
    orientation: "right",
    projectName: {
      en: "My first project as a web developer",
      es: "Mi primer project como desarrollador web",
    },
    description: {
      en: "This was the first project I created in HTML, with CSS and a bit of JavaScript. This project was the beginning of what is now my career. It’s impressive to look at this project and know that everything started here. This project holds great sentimental value because I can come back to it and see how my knowledge has grown over time and with a lot of effort.",
      es: "Este fue el primer projecto que realize en HTML, con CSS y un poco the Javascript, este projecto fue el comienzo de lo que hoy es mi carrera, es impresionante ver este projecto y saber que todo empezo aqui, este projecto tiene ese gran valor sentimental de poder volver a el y ver como mi conocimiento crecio con tiempo y mucho esfuerzo.",
    },
    technologies: [
      "Bootstrap",
      "HTML5",
      "CSS",
      "Javascript",
    ],
    links: [
      {
        title: {
          en: "Link to the project",
          es: "Link al projecto",
        },
        label: {
          en: "Click to visit my first project",
          es: "Clieckea aqui para visitar mi primer projecto",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      },
      {
        title: {
          en: "Link to the Github repository",
          es: "Link al repositorio de Github",
        },
        label: {
          en: "Github Repository",
          es: "Repositorio de Github",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      }
    ],
  },
  {
    positionZ: -245,
    projectId: "thirdLeft",
    orientation: "left",
    projectName: {
      en: "My first project as a web developer",
      es: "Mi primer project como desarrollador web",
    },
    description: {
      en: "This was the first project I created in HTML, with CSS and a bit of JavaScript. This project was the beginning of what is now my career. It’s impressive to look at this project and know that everything started here. This project holds great sentimental value because I can come back to it and see how my knowledge has grown over time and with a lot of effort.",
      es: "Este fue el primer projecto que realize en HTML, con CSS y un poco the Javascript, este projecto fue el comienzo de lo que hoy es mi carrera, es impresionante ver este projecto y saber que todo empezo aqui, este projecto tiene ese gran valor sentimental de poder volver a el y ver como mi conocimiento crecio con tiempo y mucho esfuerzo.",
    },
    technologies: [
      "Bootstrap",
      "HTML5",
      "CSS",
      "Javascript",
    ],
    links: [
      {
        title: {
          en: "Link to the project",
          es: "Link al projecto",
        },
        label: {
          en: "Click to visit my first project",
          es: "Clieckea aqui para visitar mi primer projecto",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      },
      {
        title: {
          en: "Link to the Github repository",
          es: "Link al repositorio de Github",
        },
        label: {
          en: "Github Repository",
          es: "Repositorio de Github",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      }
    ],
  },
  {
    positionZ: -245,
    projectId: "thirdRight",
    orientation: "right",
    projectName: {
      en: "My first project as a web developer",
      es: "Mi primer project como desarrollador web",
    },
    description: {
      en: "This was the first project I created in HTML, with CSS and a bit of JavaScript. This project was the beginning of what is now my career. It’s impressive to look at this project and know that everything started here. This project holds great sentimental value because I can come back to it and see how my knowledge has grown over time and with a lot of effort.",
      es: "Este fue el primer projecto que realize en HTML, con CSS y un poco the Javascript, este projecto fue el comienzo de lo que hoy es mi carrera, es impresionante ver este projecto y saber que todo empezo aqui, este projecto tiene ese gran valor sentimental de poder volver a el y ver como mi conocimiento crecio con tiempo y mucho esfuerzo.",
    },
    technologies: [
      "Bootstrap",
      "HTML5",
      "CSS",
      "Javascript",
    ],
    links: [
      {
        title: {
          en: "Link to the project",
          es: "Link al projecto",
        },
        label: {
          en: "Click to visit my first project",
          es: "Clieckea aqui para visitar mi primer projecto",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      },
      {
        title: {
          en: "Link to the Github repository",
          es: "Link al repositorio de Github",
        },
        label: {
          en: "Github Repository",
          es: "Repositorio de Github",
        },
        url: "https://humbertoragazzini.github.io/ms-1-front-end/",
      }
    ],
  },
]

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
    changeSelectedProject,
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
      <div className="fixed bottom-0 z-50 flex lg:hidden justify-center w-screen p-5 [&>[data-testid]]:!bg-[rgba(0,0,0,0.5)] [&>[data-testid]]:!backdrop-blur [&>[data-testid]]:!border-2 [&>[data-testid]]:m-4 [&>[data-testid]]:!border-[rgba(125,125,125,0.5)] [&_button]:!bg-[rgba(255,255,255,0.5)]">
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
        className={`scroller elative z-[9900] w-screen h-[100dvh] ${selectedProject ? "overflow-y-hidden" : "overflow-y-scroll"
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
              <Suspense
                fallback={
                  <mesh position={[0, 0, -50]}>
                    <boxGeometry args={[10, 10, 10]}></boxGeometry>
                    <meshBasicMaterial color={"white"}></meshBasicMaterial>
                  </mesh>
                }
              >
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
                <>
                  {
                    projects.map((project) => {

                      if (project.orientation == "left") {
                        return (
                          <ProjectLeft
                            positionZ={project.positionZ}
                            language={language}
                            projectId={project.projectId}
                          >
                            <Project
                              language={language}
                              content={{
                                projectName: project.projectName,
                                description: project.description,
                                technologies: project.technologies,
                                links: project.links
                              }}
                              changeSelectedProject={changeSelectedProject}
                            ></Project>
                          </ProjectLeft>)
                      }
                      if (project.orientation == "right") {
                        return (
                          <ProjectRight
                            positionZ={project.positionZ}
                            language={language}
                            projectId={project.projectId}
                          >
                            <Project
                              language={language}
                              content={{
                                projectName: project.projectName,
                                description: project.description,
                                technologies: project.technologies,
                                links: project.links
                              }}
                              changeSelectedProject={changeSelectedProject}
                            ></Project>
                          </ProjectRight>
                        )
                      }
                    })
                  }
                </>
                <Final></Final>
                <Lights targetRef={targetRef}></Lights>
                <CheckSize></CheckSize>
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
