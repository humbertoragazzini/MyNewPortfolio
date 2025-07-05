import { useAspect, useTexture, useVideoTexture } from "@react-three/drei";
import { Suspense } from "react";

export default function Video3D({ scale, source }) {
  return (
    <mesh scale={scale}>
      <planeGeometry args={[16, 9]} />
      {/* <Suspense fallback={<FallbackMaterial url="10.jpg" />}> */}
      <Suspense >
        <VideoMaterial url={source} />
      </Suspense>
    </mesh>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} opacity={1.0} />;
}
