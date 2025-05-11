import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

export default function Camera({ scroll }) {
  const { camera } = useThree();
  const targetZ = 80 - 1 * 350 * scroll;
  const lerpSpeed = 0.05;
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  useEffect(() => {
    const moveHorizontal = (e) => {
      setHorizontal(
        (-(e.clientX - window.outerWidth / 2) / window.outerWidth) * 2
      );
      setVertical(
        (-(e.clientY - window.outerHeight / 2) / window.outerHeight) * 0.5
      );
    };

    window.addEventListener("mousemove", moveHorizontal); // 👈 add the type!

    return () => {
      window.removeEventListener("mousemove", moveHorizontal); // 👈 clean up!
    };
  }, []);

  useFrame(() => {
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZ,
      lerpSpeed
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      horizontal,
      lerpSpeed
    );
    camera.rotation.x = THREE.MathUtils.lerp(
      camera.rotation.x,
      vertical,
      lerpSpeed
    );
    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      horizontal * 0.01 + vertical * 0.01,
      lerpSpeed
    );
    camera.updateProjectionMatrix();
  });
  return <PerspectiveCamera makeDefault />;
}
