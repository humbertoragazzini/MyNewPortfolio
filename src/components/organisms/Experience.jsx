import { Suspense, useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import * as THREE from "three";
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
import FloorTile from "../atoms/scene/FloorTile";

export default function Experience() {
  const scrollContainerRef = useRef();
  const scrollRef = useRef(0);
  const targetRef = useRef();
  const joystickHorizontalSpeed = useRef(null);
  const joystickVerticalSpeed = useRef(null);
  const [turnOn, setTurnOn] = useState(false);
  const touchData = useRef(null);
  const { dpr, selectedProject, controlsType } = useContext(AppContext);
  // const geometryFloor = useRef(new THREE.BoxGeometry(20, 1, 30));
  const geometryFloor = useRef(new THREE.SphereGeometry(19, 50, 50));

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
      {controlsType == "joystick" && (
        <CustomJoysticks
          joystickHorizontalSpeed={joystickHorizontalSpeed}
          joystickVerticalSpeed={joystickVerticalSpeed}
          scrollRef={scrollRef}
        ></CustomJoysticks>
      )}

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
                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, 45]}
                            envMap={texture}
                            metalness={1.0}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, 5]}
                            envMap={texture}
                            metalness={1.0}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -35]}
                            envMap={texture}
                            metalness={1.0}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -75]}
                            envMap={texture}
                            metalness={1.0}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -115]}
                            envMap={texture}
                            metalness={1.0}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -155]}
                            envMap={texture}
                            metalness={1.0}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -195]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -235]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -275]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -315]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -355]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -395]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -435]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -475]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -515]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -555]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -595]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -635]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -675]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -715]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -755]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -795]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -835]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -875]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -915]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -955]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -995]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -1035]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -1075]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -1115]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -1155]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />

                          <FloorTile
                            geometry={geometryFloor}
                            position={[0, -20, -1195]}
                            envMap={texture}
                            metalness={0.5}
                            roughness={0}
                            color="#000022"
                          />
                        </group>
                      </mesh>
                    );
                  }}
                </Effects>
                <MainScene scale={1} turnOn={turnOn} />
                <BuildProjects projects={projects}></BuildProjects>
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
