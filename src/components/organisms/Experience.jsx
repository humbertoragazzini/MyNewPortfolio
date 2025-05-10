import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import MainScene from "../MainScene";
import Project from "../atoms/Project";
import Camera from "../atoms/Camera";

export default function Experience() {
  const scrollContainerRef = useRef();
  const [Scroll, setScroll] = useState(0);

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

          console.log("Scroll progress:", scrollProgress); // value from 0 to 1
          setScroll(scrollProgress);
        }}
      >
        <div style={{ height: "300vh" }}>
          <motion.div className="sticky top-0" style={{ height: "100vh" }}>
            <Canvas shadows>
              <ambientLight intensity={7} />
              {/* <OrbitControls /> */}
              <Camera></Camera>
              <Project />
              <MainScene />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
