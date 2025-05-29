import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";

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
    if (lightRef.current && targetRef.current) {
      console.log(targetRef);
      lightRef.current.target = targetRef.current;
    }
  }, []);

  useFrame(({ camera }) => {
    if (camera.position.z < -200) {
      lightRef1.current.intensity = 500.0;
    }
    if (camera.position.z < -350) {
      lightRef2.current.intensity = 500.0;
    }
    if (camera.position.z < -500) {
      lightRef3.current.intensity = 500.0;
    }
    if (camera.position.z < -650) {
      lightRef4.current.intensity = 500.0;
    }
  });

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(ambientRef.current, {
        intensity: 0.15,
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
      <group position={[-2.887, 2.765, 2.643]}>
        <pointLight
          position={[0, 15.708, -1250]}
          intensity={0}
          ref={lightRef4}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
        <pointLight
          position={[0, 15.708, -1050]}
          intensity={0}
          ref={lightRef3}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
        <pointLight
          position={[0, 15.708, -750]}
          intensity={0}
          ref={lightRef2}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
        <pointLight
          position={[0, 15.708, -500]}
          intensity={0}
          ref={lightRef1}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
      </group>
    </group>
  );
}
