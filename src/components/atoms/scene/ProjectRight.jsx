import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import gsap from "gsap";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

export default function ProjectRight({ positionZ }) {
  const htmlRef = useRef();
  const meshRef = useRef();
  const geoRef = useRef();
  const mainContainerRef = useRef();
  const [geometry, setGeometry] = useState();
  const [show, setShow] = useState(false);
  const { isMenuOpen, language } = useContext(AppContext);

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
                className={`absolute top-0 left-0 z-0 w-[125%] -translate-x-[12.5%] -translate-y-[5%] h-auto aspect-video blur-3xl`}
                style={{
                  backgroundImage: "url(./img/primalport_img.png)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className={`relative z-10 grid w-full h-full grid-cols-3 text-white`}>
                <div className="col-span-3 p-13">
                  <Heading className="text-6xl mb-9 orbitron font-[600]" level={1} language={language} text={{
                    en: "Primalport - Website",
                    es: "Primalport - Sitio web"
                  }}>
                  </Heading>
                  <Paragraph
                    language={language}
                    text={{
                      en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                      es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS)."
                    }}
                    className="text-3xl mb-9 orbitron font-[400]"
                  ></Paragraph>
                  <div className="flex">
                    <div className="">
                      <Paragraph
                        language={language}
                        text={{
                          en: "Technologies:",
                          es: "Tecnologias usadas:"
                        }}
                        className="mb-4 text-2xl orbitron font-[600]"
                      ></Paragraph>
                    </div>
                    <div className="pl-6 flex">
                      <ul className="text-2xl orbitron font-[400] mr-12">
                        <li className="mb-3">
                          <p>NextJS</p>
                        </li>
                        <li className="mb-3">
                          <p>Tailwind</p>
                        </li>
                        <li className="mb-3">
                          <p>React Three Fiber</p>
                        </li>
                        <li className="mb-3">
                          <p>Framer</p>
                        </li>
                      </ul>
                      <ul className="text-2xl orbitron font-[400]">
                        <li className="mb-3">
                          <p>GSAP</p>
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
        <meshStandardMaterial color={[2.5, 2.5, 2.5]}></meshStandardMaterial>
      </mesh>
    </mesh>
  );
}
