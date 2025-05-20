import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
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

  useFrame(({ camera }) => {
    console.log(camera.position)
  })

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
      <group position={[-2.887, 2.765, 2.643]}>
        <pointLight
          position={[0, 15.708, -1250]}
          intensity={500}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
        <pointLight
          position={[0, 15.708, -1050]}
          intensity={500}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
        <pointLight
          position={[0, 15.708, -750]}
          intensity={500}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
        <pointLight
          position={[0, 15.708, -500]}
          intensity={500}
          distance={100} // Increase to cover a wider area
          decay={1} // Keep default or adjust lower to make it fall off slower
        />
      </group>
    </group>
  );
}
