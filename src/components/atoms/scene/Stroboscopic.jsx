import gsap from "gsap";
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
export default function Stroboscopic({ position, lightValues, delay, index }) {
    const ligthStrRef1 = useRef();
    const ligthStrRef2 = useRef();
    const ligthStrRef3 = useRef();
    const ligthStrRef4 = useRef();
    const intensity = useRef({
        value: 0,
    })
    const material1 = useRef(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 10) }))
    const material2 = useRef(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 10) }))
    const material3 = useRef(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 10) }))
    const material4 = useRef(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 10) }))

    useEffect(() => {
        if (lightValues && ligthStrRef1.current !== undefined && ligthStrRef2.current !== undefined && ligthStrRef3.current !== undefined && ligthStrRef4.current !== undefined) {
            // gsap.to(ligthStrRef1.current, { intensity: 500, delay: delay, duration: 0.1 })
            // gsap.to(ligthStrRef2.current, { intensity: 500, delay: delay, duration: 0.05 })
            // gsap.to(ligthStrRef3.current, { intensity: 500, delay: delay, duration: 0.05 })
            // gsap.to(ligthStrRef4.current, { intensity: 500, delay: delay, duration: 0.1 })
            // gsap.to(material1.current.color, { b: 10, delay: delay, duration: 0.1 })
            // gsap.to(material2.current.color, { b: 10, delay: delay, duration: 0.05 })
            // gsap.to(material3.current.color, { b: 10, delay: delay, duration: 0.05 })
            // gsap.to(material4.current.color, { b: 10, delay: delay, duration: 0.1 })
            ligthStrRef1.current.intensity = lightValues[index];
            ligthStrRef2.current.intensity = lightValues[index];
            ligthStrRef3.current.intensity = lightValues[index];
            ligthStrRef4.current.intensity = lightValues[index];
            material1.current.color.b = lightValues[index] / 80;
            material2.current.color.b = lightValues[index] / 80;
            material3.current.color.b = lightValues[index] / 80;
            material4.current.color.b = lightValues[index] / 80;


        } else {
            // gsap.to(ligthStrRef1.current, { intensity: 0, delay: delay, duration: 0.05 })
            // gsap.to(ligthStrRef2.current, { intensity: 0, delay: delay, duration: 0.1 })
            // gsap.to(ligthStrRef3.current, { intensity: 0, delay: delay, duration: 0.1 })
            // gsap.to(ligthStrRef4.current, { intensity: 0, delay: delay, duration: 0.05 })
            // gsap.to(material1.current.color, { b: 0, delay: delay, duration: 0.05 })
            // gsap.to(material2.current.color, { b: 0, delay: delay, duration: 0.1 })
            // gsap.to(material3.current.color, { b: 0, delay: delay, duration: 0.1 })
            // gsap.to(material4.current.color, { b: 0, delay: delay, duration: 0.05 })
        }
    }, [lightValues])

    return (
        <group position={[0 + position[0], 0 + position[1], -420 - position[2]]}>
            <group>
                <group
                    position={[0, 65, 0]}>
                    <mesh material={material1.current}>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef1}
                        position={[0, -2.5, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={40} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[0, -40, 0]}>
                    <mesh material={material2.current}>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef2}
                        position={[0, 2.5, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={40} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[53, 10, 0]}>
                    <mesh material={material3.current}>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef3}
                        position={[-2.5, 0, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={40} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[-53, 10, 0]}>
                    <mesh material={material4.current}>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef4}
                        position={[2.5, 0, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={40} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
            </group>
        </group>
    )
}