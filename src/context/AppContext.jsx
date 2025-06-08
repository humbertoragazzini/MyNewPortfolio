import React, { createContext, useState } from "react";
import { RGBA_ASTC_4x4_Format } from "three";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [reflections, setReflections] = useState(false);
  const [postProcessing, setPostProcessing] = useState(false);
  const [reflectionQuality, setReflectionQuality] = useState(256);
  const [dpr, setDpr] = useState([1, 2])
  // Example of toggling values
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  const toggleReflections = () => setReflections((prev) => !prev)
  const togglePostProcessing = () => setPostProcessing((prev) => !prev)
  const changeReflectionQuality = (quality) => { setReflectionQuality(quality) }
  const changeDpr = (value) => {
    switch (value) {
      case "low": {
        const newDpr = [0.25, 0.35]
        setDpr(newDpr);
        break;
      }
      case "medium": {
        const newDpr = [0.5, 0.75]
        setDpr(newDpr);
        break;
      }
      case "high": {
        const newDpr = [1, 2]
        setDpr(newDpr);
        break;
      }

      default:
        break;
    }
  }
  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        language,
        setLanguage,
        toggleLanguage,
        reflections,
        toggleReflections,
        reflectionQuality,
        changeReflectionQuality,
        dpr,
        changeDpr,
        postProcessing,
        togglePostProcessing
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
