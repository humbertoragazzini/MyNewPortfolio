import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function TestingFloor(props) {
  const { nodes, materials } = useGLTF("./blender/TESTING_FLOOR.glb");
  // const floor = useTexture("./blender/FLOOR.jpg");
  floor.flipY = false;
  const textureMaterial = new THREE.MeshStandardMaterial({
    // map: floor,
    color: "black",
    metalness: 0.2,
    roughness: 0,
  });
  return (
    <group {...props} dispose={null} rotation={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={textureMaterial}
        position={[0, -15.057, -177.974]}
        scale={[30.164, 1.341, 4.007]}
      />
    </group>
  );
}

useGLTF.preload("./blender/TESTING_FLOOR.glb");
