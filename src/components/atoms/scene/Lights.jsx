import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";
import Stroboscopic from "./Stroboscopic";
import MovingLight from "./MovingLight";

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

// Stroboscopic light not good for performance
// {
//   /* Stroboscopic */
// }
// {
//   ilumination == "high" && (
//     <>
//       <Stroboscopic
//         lightValues={lightValues}
//         index={0}
//         delay={0.1}
//         position={[0, 0, 0]}
//       ></Stroboscopic>
//       {/* <Stroboscopic lightValues={lightValues} index={1} delay={0.20} position={[0, 0, 100]}></Stroboscopic> */}
//       <Stroboscopic
//         lightValues={lightValues}
//         index={2}
//         delay={0.3}
//         position={[0, 0, 200]}
//       ></Stroboscopic>
//       {/* <Stroboscopic lightValues={lightValues} index={3} delay={0.4} position={[0, 0, 300]}></Stroboscopic> */}
//       <Stroboscopic
//         lightValues={lightValues}
//         index={4}
//         delay={0.5}
//         position={[0, 0, 400]}
//       ></Stroboscopic>
//       {/* <Stroboscopic lightValues={lightValues} index={5} delay={0.6} position={[0, 0, 500]}></Stroboscopic> */}
//       <Stroboscopic
//         lightValues={lightValues}
//         index={6}
//         delay={0.7}
//         position={[0, 0, 600]}
//       ></Stroboscopic>
//       {/* <Stroboscopic lightValues={lightValues} index={7} delay={0.8} position={[0, 0, 700]}></Stroboscopic> */}
//       <Stroboscopic
//         lightValues={lightValues}
//         index={8}
//         delay={0.9}
//         position={[0, 0, 800]}
//       ></Stroboscopic>
//     </>
//   );
// }
