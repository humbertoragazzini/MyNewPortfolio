import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";
import { MeshReflectorMaterial, useGLTF, useTexture } from "@react-three/drei";

export default function ProjectLeft({
  positionZ,
  projectId,
  children,
  images,
}) {
  const imagePosition = [
    { x: 11, y: -7, z: 1 },
    { x: 4, y: -4, z: 4 },
    { x: 9, y: -1.5, z: 6 },
  ];
  const htmlRef = useRef();
  const meshRef = useRef();
  const geoRef = useRef();
  const imageRef = useRef();
  const mainContainerRef = useRef();
  const [geometry, setGeometry] = useState();
  const [show, setShow] = useState(false);
  const { isMenuOpen, language, selectedProject, changeSelectedProject } =
    useContext(AppContext);
  const { camera } = useThree();
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
              className={`relative bg-gradient-to-br from-purple-600 to-red-900 ${selectedProject
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

// {
//   images.length > 0 &&
//     images.map((url, i) => {
//       return (
//         <mesh
//           ref={imageRef}
//           position={[
//             imagePosition[i].x,
//             imagePosition[i].y,
//             imagePosition[i].z,
//           ]}
//           material={textureMaterial[i]}
//         >
//           <boxGeometry args={[9, 5, 2]}></boxGeometry>
//           {/* <meshStandardMaterial color={"white"}></meshStandardMaterial> */}
//         </mesh>
//       );
//     });
// }
