import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { text } from "framer-motion/m";

export function BackgroundRTF(props) {
  const { nodes, materials } = useGLTF(
    "./blender/scene-background-no-envmap-v3.glb"
  );
  const texture = useTexture("./blender/Baked-texture.jpg");
  texture.flipY = false;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.1} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube4410.geometry}
        material={textureMaterial}
        position={[227.495, 0.655, -150.677]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.006"]}
        position={[206.166, -140.529, -151.655]}
        rotation={[0, 0, 0.799]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.006"]}
        position={[-210.641, 148.076, -151.655]}
        rotation={[0, 0, 0.799]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.006"]}
        position={[-210.641, -145.998, -151.655]}
        rotation={[0, 0, 2.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.006"]}
        position={[208.597, 146.253, -151.655]}
        rotation={[0, 0, 2.42]}
      />
    </group>
  );
}

useGLTF.preload("./blender/scene-background-no-envmap-v2.glb");
