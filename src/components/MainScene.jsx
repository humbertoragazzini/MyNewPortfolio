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
  const { nodes, materials } = useGLTF("./blender/main-scene.glb");
  // const envMap = useEnvMap();

  return (
    <group {...props} dispose={null}>
      <group
        position={[-256.293, 210.655, -150.677]}
        rotation={[-Math.PI, 1.571, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5671.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5671_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5671_2.geometry}
          material={materials.Rings}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5671_3.geometry}
          material={nodes.Cube5671_3.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./blender/scene.glb");
