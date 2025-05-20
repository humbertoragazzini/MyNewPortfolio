import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ProjectRight({ positionZ }) {
  const htmlRef = useRef();
  const meshRef = useRef();
  const geoRef = useRef();
  const mainContainerRef = useRef();
  const [geometry, setGeometry] = useState();
  const [show, setShow] = useState(false);

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
    console.log(geometry);
  }, [geometry]);

  return (
    <mesh
      ref={meshRef}
      position={[30, 0, positionZ]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <mesh ref={geoRef} position={[0, 0, 0]}>
        <planeGeometry args={[30, 20, 2]}></planeGeometry>
        <meshStandardMaterial
          color={"white"}
          opacity={0}
          transparent
        ></meshStandardMaterial>
        {show && (
          <Html
            ref={htmlRef}
            portal={geoRef.current}
            position={[0, 0, 1]}
            occlude="blending"
            transform
          >
            <div className="relative" ref={mainContainerRef}>
              <div
                className="absolute top-0 left-0 z-0 w-[125%] -translate-x-[12.5%] -translate-y-[5%] h-auto aspect-video blur-3xl"
                style={{
                  backgroundImage: "url(./img/primalport_img.png)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="relative z-10 grid w-full h-full grid-cols-3 text-white">
                <div className="col-span-3 p-13">
                  <h2 className="text-6xl mb-9">Primalport Website</h2>
                  <p className="text-3xl mb-9">
                    Esta es la pagina principal de un projecto en conjunto, la
                    empresa se dedica a la importacion y esportacion de bienes.
                  </p>
                  <p className="text-3xl mb-9">
                    En este project se combino Nextjs y React three fiber en
                    conjunto con framer para darle vida a las animaciones.
                  </p>
                  <div className="flex">
                    <div className="">
                      <p className="mb-4 text-2xl font-bold">
                        Tecnologias usadas:
                      </p>
                    </div>
                    <div className="pl-6">
                      <ul className="text-2xl">
                        <li className="mb-3">
                          <p>NextJS</p>
                        </li>
                        <li className="mb-3">
                          <p>Tailwind</p>
                        </li>
                        <li className="mb-3">
                          <p>React three fiber</p>
                        </li>
                        <li className="mb-3">
                          <p>Framer</p>
                        </li>
                      </ul>
                    </div>
                    <div className="pl-6">
                      <ul className="text-2xl">
                        <li className="mb-3">
                          <p>Threejs</p>
                        </li>
                        <li className="mb-3">
                          <p>Blender</p>
                        </li>
                        <li className="mb-3">
                          <p>React</p>
                        </li>
                        <li className="mb-3">
                          <p>Vite</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Html>
        )}
      </mesh>
      <mesh position={[0, -12, 0]}>
        <boxGeometry args={[30, 2, 2]}></boxGeometry>
        <meshBasicMaterial color={"white"}></meshBasicMaterial>
      </mesh>
    </mesh>
  );
}
