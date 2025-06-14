import { CubeCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useContext } from "react";
import * as THREE from "three";
import { AppContext } from "../../../context/AppContext";
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette, SSAO } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export default function Effects({
    scroll,
    resolution,
    frames,
    children,
}) {
    const cameraRef = useRef();
    const lerpSpeed = 0.05;
    const envMap = useRef(null);
    const [envMapTexture, setEnvMapTexture] = useState(null);
    const bloomRef = useRef(null);
    const {
        isMenuOpen,
        reflections,
        reflectionQuality,
        postProcessing,
    } = useContext(AppContext);
    useFrame((state) => {

        if (cameraRef.current) {
            const cubeIndex = cameraRef.current.children.findIndex(
                (obj) => obj?.type === 'CubeCamera' || obj?.constructor?.name === "HR"
            )
            const cube = cameraRef.current.children[cubeIndex];
            if (cube !== undefined && cubeIndex !== undefined && scroll.current !== undefined) {
                cube.position.z = THREE.MathUtils.lerp(
                    cube.position.z,
                    75 - 1 * 1492 * scroll.current,
                    lerpSpeed
                );

                // save current renderer state
                const currentRenderTarget = state.gl.getRenderTarget();
                const currentAutoClear = state.gl.autoClear;

                state.gl.setRenderTarget(null); // render to screen (not composer target)
                state.gl.autoClear = true;      // make sure framebuffer is cleared

                // this is the critical fix: render only the scene to update the cubemap
                cube.update(state.gl, state.scene);

                // restore
                state.gl.setRenderTarget(currentRenderTarget);
                state.gl.autoClear = currentAutoClear;
            }
        }
    }, 0);



    return (
        <group>
            {(reflections && reflectionQuality !== undefined) && (
                <group>
                    <CubeCamera
                        ref={cameraRef}
                        position={[0, 0, 0]}
                        far={25000}
                        resolution={reflectionQuality}
                        frames={1}
                    >
                        {(texture) => {
                            return children(texture)
                        }}
                    </CubeCamera>
                </group>
            )}

            {!reflections && children()}
            {
                postProcessing && <EffectComposer normalPass>
                    <Bloom
                        intensity={1}
                        luminanceThreshold={0.4}
                        luminanceSmoothing={0.9}
                        blendFunction={BlendFunction.SCREEN}
                    />

                    <DepthOfField focusDistance={0.02} focalLength={0.02} bokehScale={2} height={480} />
                </EffectComposer>
            }

        </group>
    );
}
