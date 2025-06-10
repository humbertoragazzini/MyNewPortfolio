import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Video3D from "./Video3D";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";

export default function VideoLeft({ positionZ, source }) {
  const htmlRef = useRef();
  const meshRef = useRef();
  const geoRef = useRef();
  const mainContainerRef = useRef();
  const [geometry, setGeometry] = useState();
  const [show, setShow] = useState(false);
  const { isMenuOpen } = useContext(AppContext);

  useFrame(() => {
    if (geoRef.current && mainContainerRef.current && htmlRef.current) {
      const geometry = geoRef.current.geometry;
      geometry.computeBoundingBox();
      const size = new THREE.Vector3();
      geometry.boundingBox.getSize(size);
      mainContainerRef.current.style.width = `${size.x * 38}px`;
      mainContainerRef.current.style.height = `${size.y * 38}px`;
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
      gsap.to(meshRef.current.position, { y: -120, duration: 2 })
    } else {
      gsap.to(meshRef.current.position, { y: 0, duration: 2, delay: Math.random() * 2 })
    }
  }, [isMenuOpen]);

  return (
    <mesh
      ref={meshRef}
      position={[-30, 0, positionZ]}
      rotation={[0, Math.PI / 4, 0]}
    >
      <mesh ref={geoRef} position={[0, 0, 0]}>
        <planeGeometry args={[30, 20, 2]}></planeGeometry>
        <meshStandardMaterial
          color={"white"}
          opacity={0}
          transparent
        ></meshStandardMaterial>
        <Video3D scale={2} source={source}></Video3D>
      </mesh>
    </mesh>
  );
}
