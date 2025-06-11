import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";
import Stroboscopic from "./Stroboscopic";

export default function Lights({ targetRef }) {
  const lightRef = useRef();
  const lightRef4 = useRef();
  const lightRef3 = useRef();
  const lightRef2 = useRef();
  const lightRef1 = useRef();
  const ambientRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, "red");
  const { isMenuOpen } = useContext(AppContext);
  // const targetRef = useRef();

  useEffect(() => {
    // if (lightRef.current && targetRef.current) {
    //   lightRef.current.target = targetRef.current;
    // }
  }, []);

  useFrame(({ camera }) => {
    // if (camera.position.z < -200) {
    //   lightRef1.current.intensity = 500.0;
    // }
    // if (camera.position.z < -350) {
    //   lightRef2.current.intensity = 500.0;
    // }
    // if (camera.position.z < -500) {
    //   lightRef3.current.intensity = 500.0;
    // }
    // if (camera.position.z < -650) {
    //   lightRef4.current.intensity = 500.0;
    // }
  });

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(ambientRef.current, {
        intensity: 0.0,
        duration: 1.5,
        delay: 0.5,
      });
    } else {
      gsap.to(ambientRef.current, {
        intensity: 1.0,
        duration: 1.5,
        delay: 0.5,
      });
    }
  }, [isMenuOpen]);

  return (
    <group>
      <ambientLight ref={ambientRef} intensity={0.25}></ambientLight>
      <Stroboscopic position={[0, 0, 0]}></Stroboscopic>
    </group>
  );
}
