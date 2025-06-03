import { useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
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
        </EffectComposer>
    );
}
