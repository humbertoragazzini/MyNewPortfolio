import React, { useEffect, useMemo, useRef } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  LinearMipmapLinearFilter,
  RGBFormat,
  WebGLCubeRenderTarget,
} from "three";
// import { useEnvMap } from "./atoms/Camera";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./models/scene.glb");
  // const envMap = useEnvMap();

  return (
    <group {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials["Material.002"]}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials["Material.002"]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus003.geometry}
        material={materials["Material.002"]}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus004.geometry}
        material={materials["Material.002"]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus005.geometry}
        material={materials["Material.002"]}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus006.geometry}
        material={materials["Material.002"]}
        position={[0, 0, -140]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus007.geometry}
        material={materials["Material.002"]}
      /> */}
      {/* <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -20, -120]}
        castShadow
        receiveShadow
      >
        <planeGeometry args={[50, 450]}></planeGeometry>
        <meshStandardMaterial
          metalness={1}
          roughness={0}
          color="black"
          envMap={envMap}
        />
         <meshPhysicalMaterial
          transmission={1}
          transparent={true}
          roughness={0}
          thickness={0.5}
          ior={1.5}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMap={envMap}
          envMapIntensity={2}
          color="#ffffff"
        /> 
      </mesh> */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -9, -120]}>
        <boxGeometry args={[16, 420, 0.5]}></boxGeometry>
        <meshPhysicalMaterial
          transmission={1}
          transparent={true}
          roughness={0}
          thickness={0.5}
          ior={1.5}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
          color="#ffffff"
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, -120]}>
        <planeGeometry args={[15, 420]}></planeGeometry>
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={0.4}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus008.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("./models/scene.glb");
