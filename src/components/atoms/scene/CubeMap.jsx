import { CubeCamera } from "@react-three/drei";

export default function CubeMap({ position, resolution, frames, children }) {
    return (
        <CubeCamera position={position} resolution={resolution} frames={frames}>
            {(texture) => children(texture)}
        </CubeCamera>
    );
}