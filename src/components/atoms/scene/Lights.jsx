import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";
import Stroboscopic from "./Stroboscopic";

export default function Lights({ targetRef }) {
  const lightRef = useRef();
  const ambientRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, "red");
  const { isMenuOpen } = useContext(AppContext);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(ambientRef.current, {
        intensity: 0.0,
        duration: 1.5,
        delay: 0.5,
      });
      setIsOn(false)
    } else {
      gsap.to(ambientRef.current, {
        intensity: 1.0,
        duration: 1.5,
        delay: 0.5,
      });
      setIsOn(true)
    }
  }, [isMenuOpen]);

  return (
    <group>
      <ambientLight ref={ambientRef} intensity={0.25}></ambientLight>
      <Stroboscopic isOn={isOn} dealay={0.5} position={[0, 0, 0]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={1.0} position={[0, 0, 100]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={1.5} position={[0, 0, 200]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={2.0} position={[0, 0, 300]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={2.5} position={[0, 0, 400]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={3.0} position={[0, 0, 500]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={3.5} position={[0, 0, 600]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={4.0} position={[0, 0, 700]}></Stroboscopic>
      <Stroboscopic isOn={isOn} dealay={4.5} position={[0, 0, 800]}></Stroboscopic>
    </group>
  );
}
