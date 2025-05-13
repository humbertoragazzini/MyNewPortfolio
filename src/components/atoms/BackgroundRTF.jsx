import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { text } from "framer-motion/m";

export function BackgroundRTF(props) {
  const { nodes, materials } = useGLTF("./blender/multibaking1.glb");
  const texture = useTexture("./blender/baked_textures/Cube_Material.png");
  const texture1 = useTexture("./blender/baked_textures/Cube_001_Material.png");
  const texture2 = useTexture(
    "./blender/baked_textures/Cube_002_Material_002.png"
  );
  const texture3 = useTexture(
    "./blender/baked_textures/Cube_003_Material_003.png"
  );
  const texture4 = useTexture("./blender/baked_textures/Cube_004_Material.png");
  const texture5 = useTexture("./blender/baked_textures/Cube_005_Material.png");
  const texture6 = useTexture("./blender/baked_textures/Cube_006_Material.png");
  const texture7 = useTexture("./blender/baked_textures/Cube_007_Material.png");
  const texture8 = useTexture(
    "./blender/baked_textures/Cube_008_Material_001.png"
  );
  texture.flipY = false;
  texture1.flipY = false;
  texture2.flipY = false;
  texture3.flipY = false;
  texture4.flipY = false;
  texture5.flipY = false;
  texture6.flipY = false;
  texture7.flipY = false;
  texture8.flipY = false;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  const textureMaterial1 = new THREE.MeshStandardMaterial({
    map: texture1,
  });
  const textureMaterial2 = new THREE.MeshStandardMaterial({
    map: texture2,
  });
  const textureMaterial3 = new THREE.MeshStandardMaterial({
    map: texture3,
  });
  const textureMaterial4 = new THREE.MeshStandardMaterial({
    map: texture4,
  });
  const textureMaterial5 = new THREE.MeshStandardMaterial({
    map: texture5,
  });
  const textureMaterial6 = new THREE.MeshStandardMaterial({
    map: texture6,
  });
  const textureMaterial7 = new THREE.MeshStandardMaterial({
    map: texture7,
  });
  const textureMaterial8 = new THREE.MeshStandardMaterial({
    map: texture8,
  });

  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.5}></ambientLight>
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
          material={textureMaterial1}
          position={[4.611, 1.956, 1.959]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={textureMaterial2}
          position={[-1.939, 4.169, -3.712]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={textureMaterial3}
          position={[2.542, 5.227, -1.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={textureMaterial4}
          position={[-4.766, 1.562, 2.036]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={textureMaterial5}
          position={[2.551, -1.81, 4.645]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={textureMaterial6}
          position={[0.924, 3.702, 5.572]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={textureMaterial7}
          position={[-2.848, 4.313, 0.053]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={textureMaterial8}
          position={[0.564, 2.888, 2.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.009"]}
          position={[-2.474, -0.872, -3.904]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./blender/scene-background-no-envmap-v2.glb");
