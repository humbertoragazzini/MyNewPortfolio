import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
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
import OverlayMenu from "../molecules/menu/OverlayMenu.jsx"

export default function Experience() {
  const scrollContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const targetRef = useRef();
  const texture = useLoader(RGBELoader, "./environ/env-2k-v1.hdr");
  texture.mapping = THREE.EquirectangularReflectionMapping;
  const inputMethod = useInputMethod();

  useEffect(() => {
    console.log(inputMethod);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="relative z-[9900] w-screen h-screen overflow-y-scroll"
        onScroll={(e) => {
          const target = e.currentTarget;
          const scrollTop = target.scrollTop;
          const scrollHeight = target.scrollHeight;
          const clientHeight = target.clientHeight;
          const scrollProgress = scrollTop / (scrollHeight - clientHeight);
          setScroll(scrollProgress);
        }}
      >
        <div style={{ height: "1500vh" }}>
          <motion.div className="sticky top-0" style={{ height: "100vh" }}>
            <Canvas shadows gl={{ physicallyCorrectLights: true }}>
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
              <Camera scroll={scroll}></Camera>
              <MainScene scale={1} />
              <Lights targetRef={targetRef}></Lights>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
