import { useEffect, useState } from "react"

export default function Stroboscopic({ position, isOn, index }) {
    const [turnOnOff, setTurnOnOff] = useState(0);


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
                        intensity={1000}
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
                        intensity={1000}
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
                        intensity={1000}
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
                        intensity={1000}
                        color={"blue"}
                        distance={50} // Increase to cover a wider area
                        decay={1} // Keep default or adjust lower to make it fall off slower
                    />
                </group>
            </group>
        </group>
    )
}