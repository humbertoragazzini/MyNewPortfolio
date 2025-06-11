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
  const strRef1 = useRef(0);
  const strRef2 = useRef(0);
  const strRef3 = useRef(0);
  const strRef4 = useRef(0);
  const strRef5 = useRef(0);
  const strRef6 = useRef(0);
  const strRef7 = useRef(0);
  const strRef8 = useRef(0);
  const strRef9 = useRef(0);

  useEffect(() => {

  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(ambientRef.current, {
        intensity: 0.0,
        duration: 1.5,
        delay: 0.5,
      });
      gsap.to(strRef1, {
        current: 0,
        duration: 5,
        delay: 0.5,
      });
    } else {
      gsap.to(ambientRef.current, {
        intensity: 1.0,
        duration: 1.5,
        delay: 0.5,
      });
      gsap.to(strRef1, {
        current: 1,
        duration: 1,
        delay: 0.5,
      });
    }
  }, [isMenuOpen]);

  return (
    <group>
      <ambientLight ref={ambientRef} intensity={0.25}></ambientLight>
      <Stroboscopic isOn={strRef1} position={[0, 0, 0]}></Stroboscopic>
      <Stroboscopic isOn={strRef2} position={[0, 0, 100]}></Stroboscopic>
      <Stroboscopic isOn={strRef3} position={[0, 0, 200]}></Stroboscopic>
      <Stroboscopic isOn={strRef4} position={[0, 0, 300]}></Stroboscopic>
      <Stroboscopic isOn={strRef5} position={[0, 0, 400]}></Stroboscopic>
      <Stroboscopic isOn={strRef6} position={[0, 0, 500]}></Stroboscopic>
      <Stroboscopic isOn={strRef7} position={[0, 0, 600]}></Stroboscopic>
      <Stroboscopic isOn={strRef8} position={[0, 0, 700]}></Stroboscopic>
      <Stroboscopic isOn={strRef9} position={[0, 0, 800]}></Stroboscopic>
    </group>
  );
}
