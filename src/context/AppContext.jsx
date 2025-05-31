import React, { createContext, useState } from "react";
import {RGBA_ASTC_4x4_Format} from "three";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [language, setLanguage] = useState("en");
  const [reflections,setReflections] = useState();
  const [reflectionQuality, setReflectionQuality] = useState(512);
  // Example of toggling values
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  const toggleReflections = ()=>setReflections((prev)=>!prev)
  const changeReflectionQuality = (quality)=>{setReflectionQuality(quality)}

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        language,
        setLanguage,
        toggleLanguage,
        toggleReflections,
        changeReflectionQuality
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
