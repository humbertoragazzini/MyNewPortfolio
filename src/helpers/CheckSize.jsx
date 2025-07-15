import { useThree } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function CheckSize() {
  const { gl, size } = useThree();
  const { currentResolutionSet } = useContext(AppContext);

  useEffect(() => {
    const dpr = gl.getPixelRatio();
    const actualWidth = size.width * dpr;
    const actualHeight = size.height * dpr;
    currentResolutionSet({ width: actualWidth, height: actualHeight });
  }, [gl, size]);

  return null;
}
