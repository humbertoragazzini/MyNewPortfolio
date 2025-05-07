import { useFrame, useThree } from "@react-three/fiber";
import {
    Environment,
    EnvironmentMap,
    Lightformer,
    OrbitControls,
    SoftShadows,
    useGLTF,
    useHelper,
} from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

export default function Enviroment() {
    const cube = useRef();
    const ringRef = useRef();
    const scene = useThree((state) => state.scene);

    const { nodes, materials } = useGLTF('/models/scene.glb')


    return (
        <Environment resolution={2048} background frames={Infinity}>
            <color args={["black"]} attach="background"></color>
            <group ref={ringRef}>
                <mesh position={[0, 0, -2]}>
                    <torusGeometry args={[30, 0.5, 50]}></torusGeometry>
                    <meshBasicMaterial color={"white"}></meshBasicMaterial>
                </mesh>
            </group>
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus001.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus002.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus003.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus004.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus005.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus006.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus007.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus008.geometry}
                    material={materials['Material.002']}
                />
            </group>
        </Environment>
    )
}


useGLTF.preload('/models/scene.glb')
