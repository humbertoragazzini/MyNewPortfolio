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
      <meshBasicMaterial transparent opacity={0}></meshBasicMaterial>
      <Html position={[0, 0, 1]} occlude="blending" transform>
        <div ref={mainContainerRef}>
          <div className="grid w-full h-full grid-cols-3 text-white">
            <div className="col-span-1 p-4">
              <div className="overflow-hidden rounded-full">
                <img src="https://placehold.co/600x600"></img>
              </div>
            </div>
            <div className="col-span-2 p-4">
              <h2 className="mb-5 text-6xl">Title of the project</h2>
              <p className="mb-5 text-3xl">
                The phrase "Lorem ipsum" originates from a scrambled passage of
                Latin text from Cicero's philosophical work De finibus bonorum
                et malorum ("On the Ends of Good and Evil"), written in 45 BC.
                Specifically, it is derived from sections 1.10.32 and 1.10.33 of
                the text. The original line, "Neque porro quisquam est qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit..." translates to "There is no one who loves pain itself,
                who seeks after it and wants to have it, simply because it is
                pain" .
              </p>
              <p className="mb-4 text-3xl">
                <strong>Technologies used:</strong>
              </p>
              <ul className="text-3xl">
                <li className="mb-3">
                  <strong>NextJS:</strong>Explanation what this technologie is
                  doing
                </li>
                <li className="mb-3">
                  <strong>Tailwind:</strong>Explanation what this technologie is
                  doing
                </li>
                <li className="mb-3">
                  <strong>Vite:</strong>Explanation what this technologie is
                  doing
                </li>
                <li className="mb-3">
                  <strong>Threejs:</strong>Explanation what this technologie is
                  doing
                </li>
                <li className="mb-3">
                  <strong>Blender:</strong>Explanation what this technologie is
                  doing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Html>
      <mesh position={[0, -12, 0]}>
        <boxGeometry args={[30, 2, 2]}></boxGeometry>
        <meshBasicMaterial color={"white"}></meshBasicMaterial>
      </mesh>
    </mesh>
  );
}
