import { useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from '@react-three/postprocessing';
import { useEffect } from 'react';
import { BlendFunction } from 'postprocessing';

const BLOOM_LAYER = 1;

export function BloomEffect() {
    const { camera } = useThree();

    useEffect(() => {
        camera.layers.enable(BLOOM_LAYER);
    }, [camera]);

    return (
        <EffectComposer>
            <Bloom
                intensity={1}
                luminanceThreshold={0.4}
                luminanceSmoothing={0.9}
                blendFunction={BlendFunction.SCREEN}
            />
            {/* <DepthOfField focusDistance={150} focalLength={0.02} bokehScale={2} height={480} /> */}
            {/* <Noise opacity={0.02} /> */}
            {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        </EffectComposer>
    );
}
