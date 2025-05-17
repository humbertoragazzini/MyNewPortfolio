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
  const { nodes, materials } = useGLTF("./models/main-scene.glb");
  // const envMap = useEnvMap();

  return (
    <group position={[0, 0, -350]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube4160.geometry}
        material={nodes.Cube4160.material}
        position={[-731.543, 122.28, 393.661]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={2.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3335.geometry}
        material={materials.Rings}
        position={[-608.81, 533.357, -764.053]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3363.geometry}
        material={materials.Rings}
        position={[609.727, 543.254, -764.053]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3483.geometry}
        material={materials.Rings}
        position={[-608.81, 561.556, 454.659]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3511.geometry}
        material={materials.Rings}
        position={[609.726, 556.085, 454.659]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.Rings}
        position={[0.503, 44.099, 282.468]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={102.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube441.geometry}
        material={materials.Material}
        position={[0.503, -14.431, -193.237]}
        scale={[72.801, 3.892, 11.625]}
      />
      <group
        position={[-121.526, 181.306, -906.895]}
        rotation={[-Math.PI, 0, 0]}
        scale={2.901}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube4276.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube4276_1.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/scene.glb");
