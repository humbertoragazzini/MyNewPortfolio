import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function FloorTile({ position, envMap, geometry }) {
  const tile = useRef();

  useEffect(() => {
    if (tile.current) {
      gsap.fromTo(
        tile.current.position,
        {
          x: position[0] - 0.5,
        },
        {
          x: position[0] + 0.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        tile.current.position,
        {
          y: position[1] - 0.5,
        },
        {
          y: position[1] + 0.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        tile.current.position,
        {
          z: position[2] - 0.5,
        },
        {
          z: position[2] + 0.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        tile.current.rotation,
        {
          x: -0.005,
        },
        {
          x: 0.005,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        tile.current.rotation,
        {
          y: -0.005,
        },
        {
          y: 0.005,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        tile.current.rotation,
        {
          z: -0.005,
        },
        {
          z: 0.005,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        }
      );
    }
  }, []);
  return (
    <mesh
      scale={[1, 0.05, 1]}
      ref={tile}
      geometry={geometry.current}
      position={position}
    >
      <meshStandardMaterial
        roughness={0}
        metalness={1.0}
        color="#000022"
        envMap={envMap}
      />
    </mesh>
  );
}
