import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { text } from "framer-motion/m";

export function BackgroundRTF(props) {
  const { nodes, materials } = useGLTF(
    "./blender/scene-background-no-envmap-v2.glb"
  );
  const texture = useTexture("./blender/Baked-texture.jpg");
  texture.flipY = false;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube514.geometry}
        material={textureMaterial}
        position={[257.72, 308.574, -304.905]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.003"]}
        position={[225.09, -111.575, -147.642]}
        rotation={[0, 0, 0.911]}
        scale={[4.173, 4.408, 228.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.003"]}
        position={[-235.344, -111.575, -147.642]}
        rotation={[0, 0, -0.918]}
        scale={[4.173, 4.408, 228.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.003"]}
        position={[-235.344, 313.034, -147.642]}
        rotation={[0, 0, -2.413]}
        scale={[4.173, 4.408, 228.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.003"]}
        position={[236.753, 313.034, -147.642]}
        rotation={[0, 0, 2.134]}
        scale={[4.173, 4.408, 228.28]}
      />
    </group>
  );
}

useGLTF.preload("./blender/scene-background-no-envmap-v2.glb");
