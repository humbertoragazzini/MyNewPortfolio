// Model.jsx
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Background(props) {
  const gltf = useGLTF("./blender/background-3d.glb"); // Relative to the public/ folder
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: child.material.color,
          roughness: 0.5,
          metalness: 0.5,
        });
        // Enable shadows on the mesh
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} {...props} />;
}

// Preload for faster loading (optional)
useGLTF.preload("./blender/background-3d.glb");
