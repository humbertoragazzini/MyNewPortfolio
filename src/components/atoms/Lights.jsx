import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Lights({ targetRef }) {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, "red");
  // const targetRef = useRef();

  useEffect(() => {
    if (lightRef.current && targetRef.current) {
      console.log(targetRef);
      lightRef.current.target = targetRef.current;
    }
  }, []);

  return (
    <group>
      {/* <directionalLight
        ref={lightRef}
        position={[0, 40, 50]}
        intensity={0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={1}
        shadow-camera-far={50}
      /> */}
      <ambientLight intensity={1}></ambientLight>
    </group>
  );
}
