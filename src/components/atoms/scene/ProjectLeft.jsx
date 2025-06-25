import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";

export default function ProjectLeft({ positionZ, projectId, children }) {
  const htmlRef = useRef();
  const meshRef = useRef();
  const geoRef = useRef();
  const mainContainerRef = useRef();
  const [geometry, setGeometry] = useState();
  const [show, setShow] = useState(false);
  const { isMenuOpen, language, selectedProject, changeSelectedProject } =
    useContext(AppContext);

  useFrame(() => {
    if (geoRef.current && mainContainerRef.current && htmlRef.current) {
      const geometry = geoRef.current.geometry;
      geometry.computeBoundingBox();
      const size = new THREE.Vector3();
      geometry.boundingBox.getSize(size);
      mainContainerRef.current.style.width = `${size.x * 37}px`;
      mainContainerRef.current.style.height = `${size.y * 36}px`;
    }
  });

  useEffect(() => {
    if (geoRef.current) {
      setGeometry(geoRef.current.geometry);
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(meshRef.current.position, { y: -140, duration: 2 });
    } else {
      gsap.to(meshRef.current.position, {
        y: 0,
        duration: 2,
        delay: Math.random() * 2,
      });
    }
  }, [isMenuOpen]);

  return (
    <mesh
      ref={meshRef}
      position={[-30, 0, positionZ]}
      rotation={[0, Math.PI / 4, 0]}
    >
      <mesh ref={geoRef} position={[0, 0, 0]}>
        <planeGeometry args={[35, 25, 2]}></planeGeometry>
        <meshBasicMaterial
          color={[1.5, 1.5, 1.5]}
          opacity={1}
        ></meshBasicMaterial>
        {show && (
          <Html
            ref={htmlRef}
            portal={geoRef.current}
            position={[0, 0, 1]}
            occlude="blending"
            transform
          >
            <div
              className={`relative bg-black ${selectedProject
                  ? selectedProject == projectId
                    ? ""
                    : "blur-md"
                  : ""
                }`}
              ref={mainContainerRef}
            >
              <button
                onClick={() => {
                  console.log("change to free view");
                  changeSelectedProject(null);
                }}
                className="absolute top-0 right-0 z-10 p-5 text-xl text-black cursor-pointer bg-amber-400"
              >
                Back to free view
              </button>
              <div
                onClick={() => {
                  selectedProject ? null : changeSelectedProject(projectId);
                }}
                className="relative z-0"
              >
                {children}
              </div>
            </div>
          </Html>
        )}
      </mesh>
    </mesh>
  );
}
