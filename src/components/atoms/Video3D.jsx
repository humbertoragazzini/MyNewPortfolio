import { useAspect, useTexture, useVideoTexture } from "@react-three/drei";
import { Suspense } from "react";

export default function Video3D({ scale }) {
  return (
    <mesh scale={scale}>
      <planeGeometry args={[16, 9]} />
      {/* <Suspense fallback={<FallbackMaterial url="10.jpg" />}> */}
      <Suspense >
        <VideoMaterial url="videos/Testing_Video_h_264.mp4" />
      </Suspense>
    </mesh>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

// function FallbackMaterial({ url }) {
//   const texture = useTexture(url);
//   return <meshBasicMaterial map={texture} toneMapped={false} />;
// }
