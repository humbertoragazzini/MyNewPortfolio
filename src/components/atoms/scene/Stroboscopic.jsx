import gsap from "gsap";
import { useEffect, useRef, useState } from "react"

export default function Stroboscopic({ position, isOn, index }) {
    const ligthStrRef1 = useRef();
    const ligthStrRef2 = useRef();
    const ligthStrRef3 = useRef();
    const ligthStrRef4 = useRef();
    const intensity = useRef({
        value: 0,
    })

    useEffect(() => {
        if (isOn && ligthStrRef1.current !== undefined && ligthStrRef2.current !== undefined && ligthStrRef3.current !== undefined && ligthStrRef4.current !== undefined) {
            // gsap.to(intensity.current, { value: 1, duration: 4, onUpdate: () => { console.log(intensity.current) } })
            console.log(ligthStrRef1.current)
            console.log(ligthStrRef2.current)
            console.log(ligthStrRef3.current)
            console.log(ligthStrRef4.current)
        } else {
            // gsap.to(intensity.current, { value: 0, duration: 4, onUpdate: () => { console.log(intensity.current) } })
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
                        position={[0, -2.5, 0]}
                        intensity={1000 * intensity.current.value}
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
                        position={[0, 2.5, 0]}
                        intensity={1000 * intensity.current.value}
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
                        position={[-2.5, 0, 0]}
                        intensity={1000 * intensity.current.value}
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
                        position={[2.5, 0, 0]}
                        intensity={1000 * intensity.current.value}
                        color={"blue"}
                        distance={50} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
            </group>
        </group>
    )
}