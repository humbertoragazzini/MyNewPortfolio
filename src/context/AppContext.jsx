import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [language, setLanguage] = useState("en");

  // Example of toggling values
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "es" : "en"));

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
