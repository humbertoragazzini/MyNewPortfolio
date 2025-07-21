import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";

export default function ProjectLeft({
  positionZ,
  projectId,
  children,
  images,
}) {
  const htmlRef = useRef();
  const meshRef = useRef();
  const geoRef = useRef();
  const ratio = useRef({
    x: 1,
    y: 1,
  });
  const mainContainerRef = useRef();
  const [geometry, setGeometry] = useState();
  const [show, setShow] = useState(false);
  const {
    isMenuOpen,
    language,
    selectedProject,
    changeSelectedProject,
    currentResolution,
  } = useContext(AppContext);
  useFrame(() => {
    if (
      geoRef.current &&
      mainContainerRef.current &&
      htmlRef.current &&
      currentResolution
    ) {
      const all = 100 / (currentResolution.width + currentResolution.height);
      const ratioHeight = all * currentResolution.height;
      const ratioWidht = all * currentResolution.width;

      const size = new THREE.Vector3();
      geoRef.current.geometry.dispose(); // cleanup
      if (ratioWidht > ratioHeight) {
        geoRef.current.geometry = new THREE.PlaneGeometry(
          ratioWidht / 1.75,
          ratioHeight / 1.25
        );
      } else {
        geoRef.current.geometry = new THREE.PlaneGeometry(
          ratioWidht / 1.75,
          ratioWidht / 1
        );
      }
      const geometry = geoRef.current.geometry;
      geometry.computeBoundingBox();
      geometry.boundingBox.getSize(size);
      mainContainerRef.current.style.width = `${size.x * 35}px`;
      mainContainerRef.current.style.height = `${size.y * 35}px`;
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
              className={`relative bg-gradient-to-br from-purple-600 to-red-900 ${
                selectedProject
                  ? selectedProject == projectId
                    ? ""
                    : "blur-md"
                  : ""
              }`}
              ref={mainContainerRef}
            >
              <div
                onClick={() => {
                  selectedProject ? null : changeSelectedProject(projectId);
                }}
                className="relative z-0 h-full"
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
