import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

export default function ProjectRight({ positionZ, children }) {
  const htmlRef = useRef();
  const meshRef = useRef();
  const geoRef = useRef();
  const mainContainerRef = useRef();
  const [geometry, setGeometry] = useState();
  const [show, setShow] = useState(false);
  const { isMenuOpen, language, changeSelectedProject } = useContext(AppContext);

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
      gsap.to(meshRef.current.position, { y: -140, duration: 2 })
    } else {
      gsap.to(meshRef.current.position, { y: 0, duration: 2, delay: Math.random() * 2 })
    }
  }, [isMenuOpen]);

  return (
    <mesh
      ref={meshRef}
      position={[30, 0, positionZ]}
      rotation={[0, -Math.PI / 4, 0]}
    ><mesh ref={geoRef} position={[0, 0, 0]}>
        <planeGeometry args={[30, 20, 2]}></planeGeometry>
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
            <div className="relative" ref={mainContainerRef}>
              <button onClick={() => { changeSelectedProject("first") }} className="bg-amber-500 text-black p-5 text-xl">CHECK PROJECT</button>
              <div>

              </div>
              <button onClick={() => { changeSelectedProject(null) }} className="bg-amber-500 text-black p-5 text-xl">BACK TO FREE VIEW</button>
            </div>
          </Html>
        )}
      </mesh>
    </mesh>
  );
}
