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
            <div className="" ref={mainContainerRef}>
              <div className="absolute"></div>
              <div className="grid w-full h-full grid-cols-3 text-white">
                <div className="col-span-3 p-13">
                  <h2 className="mb-5 text-6xl">Primalport Website</h2>
                  <p className="mb-5 text-3xl">
                    Esta es la pagina principal de un projecto en conjunto, la
                    empresa se dedica a la importacion y esportacion de bienes.
                  </p>
                  <p className="mb-4 text-3xl">
                    <strong>Tecnologias usadas:</strong>
                  </p>
                  <ul className="text-xl">
                    <li className="mb-3">
                      <strong>NextJS:</strong> Se utilizo NextJS para todo los
                      que es el Back-end y el Front-end, ahora la pagina esta
                      momentaniamente esta siendo alojada en gitpages como
                      pagina estatica, pero en un futuro va a funcionar en un
                      servidor de vercel con contenido SGR.
                    </li>
                    <li className="mb-3">
                      <strong>Tailwind:</strong> Todo el estilo fue echo con
                      TailwindCSS lo que permite un aprovechamiento de la hoja
                      de estilo sin repeticion de clases
                    </li>
                    <li className="mb-3">
                      <strong>Threejs:</strong> Todas las animations en 3d
                      (background) se realizaron con Threejs, mas precisamente
                      RTF, lo que permite animaciones fluidas y que son
                      ejecutadas a nivel GPU
                    </li>
                    <li className="mb-3">
                      <strong>Framer:</strong> Parte de las animationes
                      (manipulacion de contenido html) se realizaron con framer
                    </li>
                  </ul>
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
