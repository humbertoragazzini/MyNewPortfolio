import { useThree } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function CheckSize() {
  const { gl, size } = useThree();
  const { currentResolutionSet, dpr } = useContext(AppContext);

  useEffect(() => {
    const dpr = gl.getPixelRatio();
    const actualWidth = size.width * dpr;
    const actualHeight = size.height * dpr;
    const resolutionObj = { width: actualWidth, height: actualHeight };
    currentResolutionSet(resolutionObj);
  }, [dpr]);

  return null;
}
