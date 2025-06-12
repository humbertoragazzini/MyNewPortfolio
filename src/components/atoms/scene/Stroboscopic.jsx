import gsap from "gsap";
import { useEffect, useRef, useState } from "react"

export default function Stroboscopic({ position, isOn, delay }) {
    const ligthStrRef1 = useRef();
    const ligthStrRef2 = useRef();
    const ligthStrRef3 = useRef();
    const ligthStrRef4 = useRef();
    const intensity = useRef({
        value: 0,
    })

    useEffect(() => {
        if (isOn && ligthStrRef1.current !== undefined && ligthStrRef2.current !== undefined && ligthStrRef3.current !== undefined && ligthStrRef4.current !== undefined) {
            gsap.to(ligthStrRef1.current, { intensity: 1000, delay: delay, duration: 0.25, repeat: -1, yoyo: true })
        } else {
            gsap.to(ligthStrRef1.current, { intensity: 0, delay: delay, duration: 0.25 })
        }
    }, [isOn])

    return (
        <group position={[0 + position[0], 0 + position[1], -420 - position[2]]}>
            <group>
                <group
                    position={[0, 65, 0]}>
                    <mesh>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                        <meshBasicMaterial color={[0, 0, 10]}></meshBasicMaterial>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef1}
                        position={[0, -2.5, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={50} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[0, -40, 0]}>
                    <mesh>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                        <meshBasicMaterial color={[0, 0, 10]}></meshBasicMaterial>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef2}
                        position={[0, 2.5, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={50} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[53, 10, 0]}>
                    <mesh>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                        <meshBasicMaterial color={[0, 0, 10]}></meshBasicMaterial>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef3}
                        position={[-2.5, 0, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={50} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
                <group
                    position={[-53, 10, 0]}>
                    <mesh>
                        <sphereGeometry args={[3, 20, 20]}></sphereGeometry>
                        <meshBasicMaterial color={[0, 0, 10]}></meshBasicMaterial>
                    </mesh>
                    <pointLight
                        ref={ligthStrRef4}
                        position={[2.5, 0, 0]}
                        intensity={0}
                        color={"blue"}
                        distance={50} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
            </group>
        </group>
    )
}