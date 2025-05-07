import { useGLTF } from "@react-three/drei";

export default function MainScene() {
  const { scene } = useGLTF("./models/scene.glb");
  console.log(scene);
  return <primitive object={scene} />;
}
