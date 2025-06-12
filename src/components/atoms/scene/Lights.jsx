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
  const isOnRef = useRef(false)

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

  useEffect(() => {
    // const interval = setInterval(() => {
    //   isOnRef.current = !isOnRef.current;
    //   setIsOn(isOnRef.current);
    // }, 925);

    // return () => clearInterval(interval); // Cleanup on unmount
    // Step 1: Create your array of objects with an `intensity` property
    const values = Array.from({ length: 9 }, () => ({ intensity: 0 }));

    // Step 2: Create the timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // remove repeat if you want one shot

    // Step 3: Animate each value with staggered start times to form a wave
    values.forEach((val, i) => {
      const delay = i * 0.2; // time offset between each peak

      tl.to(val, {
        intensity: 50,
        duration: 1,
        ease: "power2.inOut",
      }, delay);

      tl.to(val, {
        intensity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, delay + 1);
    });

    // Step 4: Watch the animation live (e.g., log or apply to UI)
    gsap.ticker.add(() => {
      console.log(values.map(v => Math.round(v.intensity)));
    });
  }, []);

  return (
    <group>
      <ambientLight ref={ambientRef} intensity={0.25}></ambientLight>
      <Stroboscopic isOn={isOn} delay={0.10} position={[0, 0, 0]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.20} position={[0, 0, 100]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.30} position={[0, 0, 200]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.4} position={[0, 0, 300]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.5} position={[0, 0, 400]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.6} position={[0, 0, 500]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.7} position={[0, 0, 600]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.8} position={[0, 0, 700]}></Stroboscopic>
      <Stroboscopic isOn={isOn} delay={0.9} position={[0, 0, 800]}></Stroboscopic>
    </group>
  );
}
