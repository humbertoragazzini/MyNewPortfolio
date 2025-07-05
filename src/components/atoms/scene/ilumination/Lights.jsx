import { useHelper } from "@react-three/drei";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../../context/AppContext";
import gsap from "gsap";
import MovingLight from "../../../molecules/scene/ilumination/MovingLight";

export default function Lights({ targetRef }) {
  const lightRef = useRef();
  const ambientRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, "red");
  const { isMenuOpen, ilumination } = useContext(AppContext);
  const [isOn, setIsOn] = useState(false);
  const isOnRef = useRef(false);
  const [lightValues, setLightValues] = useState();

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(ambientRef.current, {
        intensity: 0.0,
        duration: 1.5,
        delay: 0.5,
      });
      setIsOn(false);
    } else {
      gsap.to(ambientRef.current, {
        intensity: 1.0,
        duration: 1.5,
        delay: 0.5,
      });
      setIsOn(true);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const values = Array.from({ length: 9 }, () => ({ intensity: 0 }));

    const tl = gsap.timeline({ repeat: -1 });

    values.forEach((val, i) => {
      const delay = i * 0.3;
      tl.to(
        val,
        { intensity: 1500, duration: 0.35, ease: "power2.inOut" },
        delay
      );
      tl.to(
        val,
        { intensity: 0, duration: 0.35, ease: "power2.inOut" },
        delay + 1
      );
    });

    const update = () => {
      setLightValues(values.map((v) => Math.round(v.intensity)));
    };

    gsap.ticker.add(update);

    return () => {
      // Cleanup on unmount
      gsap.ticker.remove(update);
      tl.kill(); // Stop and remove the timeline
    };
  }, []);

  return (
    <group>
      <ambientLight ref={ambientRef} intensity={1}></ambientLight>
      {/* Moving */}
      {ilumination && <MovingLight position={[0, 0, -20]}></MovingLight>}
    </group>
  );
}
