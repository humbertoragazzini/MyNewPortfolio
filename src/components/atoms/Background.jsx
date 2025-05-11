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

  return (
    <mesh>
      <mesh position={[150, 250, 0]}>
        <mesh position={[0, 0, 20]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
        <mesh position={[0, 0, -300]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
      </mesh>
      <mesh position={[150, -40, 0]}>
        <mesh position={[0, 0, 20]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
        <mesh position={[0, 0, -300]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
      </mesh>
      <mesh position={[-150, 250, 0]}>
        <mesh position={[0, 0, 20]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
        <mesh position={[0, 0, -300]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
      </mesh>
      <mesh position={[-150, -40, 0]}>
        <mesh position={[0, 0, 20]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
        <mesh position={[0, 0, -300]}>
          <pointLight color="white" intensity={5000} castShadow />
          <sphereGeometry args={[10, 10, 10]}></sphereGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
      </mesh>
      <primitive object={gltf.scene} {...props} />
    </mesh>
  );
}

// Preload for faster loading (optional)
useGLTF.preload("./blender/background-3d.glb");
