import gsap from "gsap";
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
export default function MovingLight({ position }) {
    const ligthStrRef1 = useRef();
    const ligthStrRef2 = useRef();
    const ligthStrRef3 = useRef();
    const theGroupRef = useRef();
    const material = useRef(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) }))

    useEffect(() => {
        const mytimeline = gsap.timeline({ duration: 1, repeat: -1 });
        if (ligthStrRef1.current !== undefined && ligthStrRef2.current !== undefined && ligthStrRef3.current !== undefined) {
            mytimeline.to(
                theGroupRef.current.position, { z: -1100, duration: 2 }, 0
            ).fromTo(
                ligthStrRef1.current, { intensity: 0 }, { intensity: 850, duration: 0.75 }, 0
            ).fromTo(
                ligthStrRef2.current, { intensity: 0 }, { intensity: 850, duration: 0.75 }, 0
            ).fromTo(
                ligthStrRef3.current, { intensity: 0 }, { intensity: 850, duration: 0.75 }, 0
            ).to(
                ligthStrRef1.current, { intensity: 0, duration: 0.25 }, 0.75
            ).to(
                ligthStrRef2.current, { intensity: 0, duration: 0.25 }, 0.75
            ).to(
                ligthStrRef3.current, { intensity: 0, duration: 0.25 }, 0.75
            ).fromTo(
                material.current.color, { b: 0 }, { b: 15, duration: 0.75 }, 0
            ).fromTo(
                material.current.color, { b: 0 }, { b: 15, duration: 0.75 }, 0
            ).fromTo(
                material.current.color, { b: 0 }, { b: 15, duration: 0.75 }, 0
            ).to(
                material.current.color, { b: 0, duration: 0.25 }, 0.75
            ).to(
                material.current.color, { b: 0, duration: 0.25 }, 0.75
            ).to(
                material.current.color, { b: 0, duration: 0.25 }, 0.75
            )
        }
    }, [])

    return (
        <group position={[0 + position[0], 0 + position[1], -420 - position[2]]}>
            <group ref={theGroupRef}>
                <group
                    position={[0, -40, 0]}>
                    <mesh material={material.current}>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef1}
                        castShadow
                        position={[0, 2.5, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={100} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[50, 38, 0]}>
                    <mesh material={material.current} rotation={[Math.PI / 2, -0.75, 0]} position={[4, 4, 0]}>
                        <planeGeometry args={[7, 30]}></planeGeometry>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef2}
                        castShadow
                        position={[0, 0, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={100} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[-50, 38, 0]}>
                    <mesh material={material.current} rotation={[Math.PI / 2, 0.75, 0]} position={[-4, 4, 0]}>
                        <planeGeometry args={[7, 30]}></planeGeometry>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef3}
                        castShadow
                        position={[0, 0, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={100} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
            </group>
        </group>
    )
}
