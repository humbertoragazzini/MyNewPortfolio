import React, { useEffect, useMemo, useRef } from "react";
import { MeshReflectorMaterial, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  LinearMipmapLinearFilter,
  RGBFormat,
  WebGLCubeRenderTarget,
} from "three";
// import { useEnvMap } from "./atoms/Camera";
import * as THREE from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./blender/main-scene.glb");
  // const envMap = useEnvMap();
  const texture = useTexture("./blender/WALL1.jpg");
  const texture2 = useTexture("./blender/WALL2.jpg");
  const texture3 = useTexture("./blender/WALL3.jpg");
  const texture4 = useTexture("./blender/WALL4.jpg");
  const texture5 = useTexture("./blender/WALL5.jpg");
  const texture6 = useTexture("./blender/WALL6.jpg");
  const floor = useTexture("./blender/FLOOR.jpg");
  texture.flipY = false;
  texture2.flipY = false;
  texture3.flipY = false;
  texture4.flipY = false;
  texture5.flipY = false;
  texture6.flipY = false;
  floor.flipY = false;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
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
  const textureMaterialFloor = new THREE.MeshStandardMaterial({
    map: floor,
  });

  return (
    <group {...props} dispose={null} position={[0, -10, 0]}>
      <pointLight
        position={[0, 15.708, 0]}
        intensity={50}
        distance={60}
        decay={2}
      ></pointLight>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.Rings}
        position={[0, 15.708, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={35.277}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials.Rings}
        position={[0, 15.708, -100.005]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={35.277}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials.Rings}
        position={[0, 15.708, -200]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={35.277}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus003.geometry}
        material={materials.Rings}
        position={[0, 15.708, -300]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={35.277}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.002"]}
        position={[212.414, -146.695, -131.685]}
        rotation={[0, 0, 0.823]}
        scale={[0.242, 0.691, 10.586]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.002"]}
        position={[-201.395, -146.695, -131.685]}
        rotation={[0, 0, -0.513]}
        scale={[0.242, 0.691, 10.586]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={textureMaterialFloor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALL1.geometry}
        material={textureMaterial}
        position={[-189.016, 184.43, -360.711]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALL3.geometry}
        material={textureMaterial3}
        position={[-189.016, -181.538, -360.735]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALL2.geometry}
        material={textureMaterial2}
        position={[-258.667, 210.655, -276.675]}
        rotation={[-Math.PI, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALL4.geometry}
        material={textureMaterial4}
        position={[248.121, 210.655, -360.735]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALL5.geometry}
        material={textureMaterial5}
        position={[252.941, 210, 107.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALL6.geometry}
        material={textureMaterial6}
        position={[252.941, 210, -398.664]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3363.geometry}
        material={materials.CubeLight}
        position={[209.984, 187.755, -360.711]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2649.geometry}
        material={materials.Material}
        position={[63, 0, -418.933]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2650.geometry}
        material={materials.Material}
        position={[-63.061, 0, -396.16]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2656.geometry}
        material={materials.Material}
        position={[63, 21, -401.633]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2657.geometry}
        material={materials.Material}
        position={[-63.061, 21, -408.171]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2660.geometry}
        material={materials.Material}
        position={[0, -42, -418.492]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2661.geometry}
        material={materials.Material}
        position={[21, -42, -400.634]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2666.geometry}
        material={materials.Material}
        position={[-21, -42, -422.56]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2669.geometry}
        material={materials.Material}
        position={[42, -21, -403.822]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2672.geometry}
        material={materials.Material}
        position={[-42.061, -21, -395.497]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2674.geometry}
        material={materials.Material}
        position={[0, 84, -400.586]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2675.geometry}
        material={materials.Material}
        position={[21, 84, -411.277]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2680.geometry}
        material={materials.Material}
        position={[-21, 84, -414.72]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2691.geometry}
        material={materials.Material}
        position={[63, 42, -395.69]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2692.geometry}
        material={materials.Material}
        position={[-63.061, 42, -415.9]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2697.geometry}
        material={materials.Material}
        position={[42, 63, -400.424]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2700.geometry}
        material={materials.Material}
        position={[-42.061, 63, -409.944]}
        rotation={[-Math.PI, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./blender/scene.glb");
