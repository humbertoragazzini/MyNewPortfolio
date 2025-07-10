import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import * as THREE from "three";
import { Joystick } from "react-joystick-component";
import { Canvas } from "@react-three/fiber";
import Camera from "../atoms/scene/image/Camera";
import Effects from "../molecules/scene/effects/Effects";
import TextShader from "../molecules/scene/text/TextShader";
import Lights from "../atoms/scene/ilumination/Lights";
import { motion } from "framer-motion";
import { LinearToneMapping } from "three";
import MainScene from "./MainScene";
import Final from "../molecules/scene/screens/Final";
import CheckSize from "../../helpers/CheckSize";
import BuildProjects from "./BuildProjects";
import CustomJoysticks from "../molecules/controls/Joysticks";
import LoadingScreen from "../atoms/scene/screens/LoadingScreen";
import projects from "../../data/projects";
import { useGesture } from "@use-gesture/react";

export default function Experience() {
  const scrollContainerRef = useRef();
  const scrollRef = useRef(0);
  const targetRef = useRef();
  const joystickHorizontalSpeed = useRef(null);
  const joystickVerticalSpeed = useRef(null);
  const [turnOn, setTurnOn] = useState(false);
  const touchData = useRef(null);
  const { dpr, selectedProject, changeSelectedProject } =
    useContext(AppContext);
  const geometryFloor = useRef(new THREE.BoxGeometry(20, 1, 30));
  // Set the drag hook and define component movement based on gesture data.
  const bind = useGesture({
    onPinch: ({ touches, offset: [scale, angle], origin, velocity }) => {
      const tData = {
        touches: touches,
        origin: origin,
        velocity: velocity,
      };
      touchData.current = origin;
    },
  });

  return (
    <div
      className="w-full h-[100dvh] overflow-hidden bg-black"
      {...bind()}
      style={{
        touchAction: "none",
      }}
    >
      <CustomJoysticks
        joystickHorizontalSpeed={joystickHorizontalSpeed}
        joystickVerticalSpeed={joystickVerticalSpeed}
        scrollRef={scrollRef}
      ></CustomJoysticks>
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
              gl={{
                preserveDrawingBuffer: false,
                antialias: true,
                toneMapping: LinearToneMapping,
              }}
            >
              <Camera
                scroll={scrollRef}
                joystickLeft={joystickVerticalSpeed}
                joystickRight={joystickHorizontalSpeed}
                setTurnOn={setTurnOn}
                touchData={touchData}
              ></Camera>
              <Suspense fallback={<LoadingScreen></LoadingScreen>}>
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

                          <TextShader
                            scale={8}
                            rotation={[0, 0, 0]}
                            position={[0, 0, -320]}
                            color={"#f900f9"}
                            size={1}
                            text={"SKILLS"}
                            turnOn={turnOn}
                            seconds={1}
                            isAppearing={false}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 50, -400]}
                            color={"#000000"}
                            size={1}
                            text={"JS & JQ"}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 50, -500]}
                            color={"#000000"}
                            size={1}
                            text={"Prismic"}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 50, -600]}
                            color={"#000000"}
                            size={1}
                            text={"ReactJS"}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 50, -700]}
                            color={"#000000"}
                            size={1}
                            text={"NextJS"}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 50, -800]}
                            color={"#000000"}
                            size={1}
                            text={"ThreeJS"}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 50, -900]}
                            color={"#000000"}
                            size={1}
                            text={"WebGL"}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 50, -1000]}
                            color={"#000000"}
                            size={1}
                            text={"and lot"}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
                          <TextShader
                            scale={8}
                            rotation={[0.75, 0, 0]}
                            position={[0, 35, -1000]}
                            color={"#000000"}
                            size={1}
                            text={"more...."}
                            turnOn={turnOn}
                            seconds={5}
                            isAppearing={true}
                          ></TextShader>
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
                <MainScene scale={1} turnOn={turnOn} />
                {/* <BuildProjects projects={projects}></BuildProjects> */}
                <Final turnOn={turnOn}></Final>
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
