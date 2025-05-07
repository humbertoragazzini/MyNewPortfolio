import { useFrame, useThree } from "@react-three/fiber";
import {
    Environment,
    EnvironmentMap,
    Lightformer,
    OrbitControls,
    SoftShadows,
    useHelper,
} from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

export default function Enviroment() {
    const cube = useRef();
    const ringRef = useRef();
    const scene = useThree((state) => state.scene);


    useFrame((delta, state) => {
        if (ringRef.current !== null) {
            ringRef.current.rotation.y += 0.001;
            ringRef.current.rotation.z += 0.001;
        }
    });
    return (
        <Environment resolution={2048} background frames={Infinity}>
            <color args={["black"]} attach="background"></color>
            <group ref={ringRef}>
                <mesh position={[0, 0, -2]}>
                    <torusGeometry args={[30, 0.5, 50]}></torusGeometry>
                    <meshBasicMaterial color={"white"}></meshBasicMaterial>
                </mesh>
            </group>
        </Environment>
    )
}