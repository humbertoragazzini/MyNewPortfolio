import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { text } from "framer-motion/m";

export function BackgroundRTF(props) {
  const { nodes, materials } = useGLTF(
    "./blender/scene-background-no-envmap.glb"
  );
  const texture = useTexture("./blender/Baked-texture.jpg");
  texture.flipY = false;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.5}></ambientLight>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube246.geometry}
        material={textureMaterial}
        position={[168.002, 210, 105.573]}
      />
      <group
        position={[167.984, -178.017, -318.675]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5544.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5544_1.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./blender/scene-background-no-envmap-v2.glb");
