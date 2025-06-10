import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";

export default function OverlayMenu() {
  const {
    toggleLanguage,
    isMenuOpen,
    toggleMenu,
    toggleReflections,
    reflections,
    changeReflectionQuality,
    dpr,
    changeDpr,
    postProcessing,
    togglePostProcessing,
  } = useContext(AppContext);
  const [menu, setMenu] = useState("main");


  return (
    <>
      <div
        className={`fixed ${isMenuOpen
          ? "translate-y-0 bg-[rgba(120,0,110,0.40)] "
          : "translate-y-[120vh] bg-[rgba(200,50,180,0.45)] "
          } z-[9999] backdrop-blur-md transition-all duration-500 ease-initial trans h-screen w-screen flex justify-center items-center overflow-hidden`}
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div
            animate={{
              x: menu == "main" ? 0 : "110vw",
            }}
            className={"absolute flex flex-col"}
          >

          </motion.div>
        </div>
      </div>
    </>
  );
}
