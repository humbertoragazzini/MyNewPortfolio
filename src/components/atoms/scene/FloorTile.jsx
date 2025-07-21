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
          x: position[0] - 5.5,
        },
        {
          x: position[0] + 5.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        tile.current.position,
        {
          y: position[1] - 5.5,
        },
        {
          y: position[1] + 5.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        tile.current.position,
        {
          z: position[2] - 5.5,
        },
        {
          z: position[2] + 5.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        tile.current.rotation,
        {
          x: 0,
        },
        {
          x: position[0] + 5.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        tile.current.rotation,
        {
          y: 0,
        },
        {
          y: position[1] + 5.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        tile.current.rotation,
        {
          z: 0,
        },
        {
          z: position[2] + 5.5,
          delay: Math.random() * 1.5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "none",
        }
      );
    }
  }, []);
  return (
    <mesh ref={tile} geometry={geometry.current} position={position}>
      <meshStandardMaterial
        roughness={0}
        metalness={1.0}
        color="#000022"
        envMap={envMap}
      />
    </mesh>
  );
}
