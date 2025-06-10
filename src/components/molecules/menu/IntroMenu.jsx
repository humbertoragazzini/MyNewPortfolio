import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";
import Heading from "../../atoms/ui/Heading";

export default function IntroMenu() {
  const {
    language,
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
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    setIntro(true)
  }, [])

  return (
    <section
      className={`${intro ? "translate-y-0" : "translate-y-[120vh]"} orbitron fixed top-0 left-0 bg-[rgba(0,0,65,0.75)] z-[10000] backdrop-blur-md transition-all duration-500 ease-initial trans h-screen w-screen flex justify-center items-center overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          animate={{
            opacity: intro ? 1 : 0,
          }}
          className={"flex justify-center"}
        >
          <div className="p-3 md:p-10 lg:p-14 w-full lg:w-3/4 h-fit bg-[rgba(0,0,65,0.75)] rounded-4xl border-4 border-white neon-box">
            <Heading language={language} className={"text-white text-5xl drop-shadow-[0_0_5px_#fff] leading-16 text-center"} level={1} text={{
              en: "To ensure smooth performance on all devices, the portfolio loads with low graphics settings by default. You can change this anytime in the settings menu.",
              es: "El portoflio fue cargado con las configuraciones de calidad minimas para evitar problemas en la velocidad de ejecucion del programa, puede aumentar la calidad por medio del menu de configuracion"
            }}></Heading>
            <div>
              <motion.div><img></img></motion.div>
              <motion.div><img></img></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
