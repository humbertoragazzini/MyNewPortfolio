import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { text } from "framer-motion/m";

export function BackgroundRTF(props) {
  const { nodes, materials } = useGLTF("./blender/multibaking1.glb");
  const texture = useTexture(
    "./blender/baked_textures/Cube_001_Material_001.png"
  );
  const texture1 = useTexture(
    "./blender/baked_textures/Cube_002_Material_002.png"
  );
  // const texture2 = useTexture(
  //   "./blender/baked_textures/Cube_002_Material_002.png"
  // );
  // const texture3 = useTexture(
  //   "./blender/baked_textures/Cube_003_Material_003.png"
  // );
  // const texture4 = useTexture("./blender/baked_textures/Cube_004_Material.png");
  // const texture5 = useTexture("./blender/baked_textures/Cube_005_Material.png");
  // const texture6 = useTexture("./blender/baked_textures/Cube_006_Material.png");
  // const texture7 = useTexture("./blender/baked_textures/Cube_007_Material.png");
  // const texture8 = useTexture(
  //   "./blender/baked_textures/Cube_008_Material_001.png"
  // );
  texture.flipY = false;
  texture1.flipY = false;
  // texture2.flipY = false;
  // texture3.flipY = false;
  // texture4.flipY = false;
  // texture5.flipY = false;
  // texture6.flipY = false;
  // texture7.flipY = false;
  // texture8.flipY = false;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  const textureMaterial1 = new THREE.MeshStandardMaterial({
    map: texture1,
  });
  // const textureMaterial2 = new THREE.MeshStandardMaterial({
  //   map: texture2,
  // });
  // const textureMaterial3 = new THREE.MeshStandardMaterial({
  //   map: texture3,
  // });
  // const textureMaterial4 = new THREE.MeshStandardMaterial({
  //   map: texture4,
  // });
  // const textureMaterial5 = new THREE.MeshStandardMaterial({
  //   map: texture5,
  // });
  // const textureMaterial6 = new THREE.MeshStandardMaterial({
  //   map: texture6,
  // });
  // const textureMaterial7 = new THREE.MeshStandardMaterial({
  //   map: texture7,
  // });
  // const textureMaterial8 = new THREE.MeshStandardMaterial({
  //   map: texture8,
  // });

  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={1}></ambientLight>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={textureMaterial}
          position={[-2.887, 2.765, 2.643]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={textureMaterial1}
          position={[-5.548, 4.291, 3.777]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./blender/scene-background-no-envmap-v2.glb");
