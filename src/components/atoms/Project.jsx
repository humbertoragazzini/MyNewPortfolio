import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Project() {
  const meshRef = useRef();
  const mainContainerRef = useRef();

  useFrame(() => {
    if (meshRef.current && mainContainerRef.current) {
      const geometry = meshRef.current.geometry;
      geometry.computeBoundingBox();
      const size = new THREE.Vector3();
      geometry.boundingBox.getSize(size);
      console.log(size);
      mainContainerRef.current.style.width = `${size.x * 38}px`;
      mainContainerRef.current.style.height = `${size.y * 38}px`;
    }
  });

  return (
    <mesh ref={meshRef} position={[30, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
      <planeGeometry args={[30, 20]}></planeGeometry>
      <meshBasicMaterial color={"white"}></meshBasicMaterial>
      <Html position={[0, 0, 1]} occlude transform>
        <div ref={mainContainerRef}>
          <div className="grid w-full h-full grid-cols-3 bg-white">
            <div className="col-span-1">
              <img src="https://placehold.co/600x600"></img>
            </div>
            <div className="col-span-2">
              <h2>Title of the project</h2>
              <p>Small explanations of the project</p>
              <p>
                <strong>Technologies used:</strong>
              </p>
              <ul>
                <li>
                  <strong>NextJS:</strong>Explanation what this technologie is
                  doing
                </li>
                <li>
                  <strong>Tailwind:</strong>Explanation what this technologie is
                  doing
                </li>
                <li>
                  <strong>Vite:</strong>Explanation what this technologie is
                  doing
                </li>
                <li>
                  <strong>Threejs:</strong>Explanation what this technologie is
                  doing
                </li>
                <li>
                  <strong>Blender:</strong>Explanation what this technologie is
                  doing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Html>
    </mesh>
  );
}
