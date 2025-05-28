import { useEffect, useState } from "react";

export function useInputMethod() {
  const [inputMethod, setInputMethod] = useState("unknown");

  useEffect(() => {
    const handleTouch = () => {
      setInputMethod("touch");
      cleanup();
    };
    const handleMouse = () => {
      setInputMethod("mouse");
      cleanup();
    };
    const cleanup = () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("mousemove", handleMouse);
    };

    window.addEventListener("touchstart", handleTouch, { once: true });
    window.addEventListener("mousemove", handleMouse, { once: true });

    // Initial check
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setInputMethod("touch");
    }

    return cleanup;
  }, []);

  return inputMethod;
}
