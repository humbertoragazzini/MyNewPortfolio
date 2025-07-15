import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function CheckSize() {
  const { gl, size } = useThree();

  useEffect(() => {
    const dpr = gl.getPixelRatio();
    const actualWidth = size.width * dpr;
    const actualHeight = size.height * dpr;
    return { width: actualWidth, height: actualHeight };
  }, [gl, size]);

  return null;
}
