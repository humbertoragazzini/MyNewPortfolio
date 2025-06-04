// import { CubeCamera } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef, useState, useContext } from "react";
// import * as THREE from "three";
// import { AppContext } from "../../../context/AppContext";

// export default function CubeMap({
//     scroll,
//     resolution,
//     frames,
//     children,
// }) {
//     const cameraRef = useRef();
//     const lerpSpeed = 0.05;
//     const envMap = useRef(null);
//     const [envMapTexture, setEnvMapTexture] = useState(null);

//     const {
//         reflections,
//         reflectionQuality,
//     } = useContext(AppContext);

//     useFrame((state) => {
//         if (cameraRef.current && scroll.current !== undefined) {
//             const targetZ = 75 - 1 * 1492 * scroll.current;
//             cameraRef.current.children[0].position.z = THREE.MathUtils.lerp(
//                 cameraRef.current.children[0].position.z,
//                 targetZ,
//                 lerpSpeed
//             );

//             // Temporarily disable EffectComposer render target
//             const currentRenderTarget = state.gl.getRenderTarget();
//             state.gl.setRenderTarget(null);

//             // ✅ Correctly update the cube render target
//             cameraRef.current.children[0].update(state.gl, state.scene);

//             state.gl.setRenderTarget(currentRenderTarget);
//         }
//     });

//     return (
//         <group>
//             {reflections && (
//                 <group>
//                     <CubeCamera
//                         ref={cameraRef}
//                         position={[0, 0, 0]}
//                         far={25000}
//                         resolution={reflectionQuality}
//                         frames={null}
//                     >
//                         {(texture) => {
//                             if (envMap.current !== texture) {
//                                 envMap.current = texture;
//                                 setEnvMapTexture(texture);
//                             }
//                             return null; // no immediate children
//                         }}
//                     </CubeCamera>

//                     {/* Only render children when envMap is ready */}
//                     {envMapTexture && children(envMapTexture)}
//                 </group>
//             )}
//             {!reflections && children()}
//         </group>
//     );
// }

import { CubeCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useContext } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";

export default function CubeMap({
    scroll,
    resolution,
    frames,
    children,
}) {
    const cameraRef = useRef();
    const lerpSpeed = 0.05;
    const envMap = useRef(null);
    const [envMapTexture, setEnvMapTexture] = useState(null);

    const {
        reflections,
        reflectionQuality,
    } = useContext(AppContext);

    useFrame((state) => {
        if (cameraRef.current && scroll.current !== undefined) {
            const targetZ = 75 - 1 * 1492 * scroll.current;
            cameraRef.current.children[0].position.z = THREE.MathUtils.lerp(
                cameraRef.current.children[0].position.z,
                targetZ,
                lerpSpeed
            );

            // Temporarily disable EffectComposer render target
            const currentRenderTarget = state.gl.getRenderTarget();
            state.gl.setRenderTarget(null);

            // ✅ Correctly update the cube render target
            cameraRef.current.children[0].update(state.gl, state.scene);

            state.gl.setRenderTarget(currentRenderTarget);
        }
    });

    return (
        <group>
            {reflections && (
                <group>
                    <CubeCamera
                        ref={cameraRef}
                        position={[0, 0, 0]}
                        far={25000}
                        resolution={reflectionQuality}
                        frames={null}
                    >
                        {(texture) => {
                            return children(texture)
                        }}
                    </CubeCamera>
                </group>
            )}
            {!reflections && children()}
        </group>
    );
}
