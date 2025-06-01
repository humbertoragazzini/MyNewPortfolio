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
  } = useContext(AppContext);
  const [menu, setMenu] = useState("main");
  const [reflectionSize, setReflectionSize] = useState(256);

  useEffect(() => {
    changeReflectionQuality(reflectionSize);
  }, [reflectionSize]);

  return (
    <>
      <button
        onClick={() => {
          toggleMenu();
          console.log("click menu");
        }}
        className={`fixed w-[50px] h-[50px] z-[9999] bg-white text-black rounded-xl m-3 right-[0px] duration-500 ease-initial cursor-pointer ${
          isMenuOpen ? "-translate-y-[calc(100%+50px)]" : "translate-y-0"
        }`}
      >
        Menu
      </button>
      <div
        className={`fixed ${
          isMenuOpen
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
            <MenuButton
              onClick={() => {
                toggleMenu();
                console.log("click menu");
              }}
              text={{
                en: "START",
                es: "COMENZAR",
              }}
            ></MenuButton>
            <MenuButton
              onClick={() => {
                setMenu("settings");
              }}
              text={{
                en: "SETTINGS",
                es: "CONFIGURACION",
              }}
            ></MenuButton>
            <MenuButton
              onClick={() => {
                console.log("working");
                toggleLanguage();
              }}
              text={{
                en: "LANGUAGE",
                es: "IDIOMA",
              }}
            ></MenuButton>
            <a
              className="flex justify-center mx-auto w-fit"
              href="https://github.com/humbertoragazzini"
              target="_blank"
            >
              <MenuButton
                onClick={() => {
                  console.log("click menu");
                }}
                text={{
                  en: "GITHUB",
                  es: "GITHUB",
                }}
              ></MenuButton>
            </a>
          </motion.div>
          <motion.div
            animate={{
              x: menu == "settings" ? 0 : "110vw",
            }}
            className={"absolute flex flex-col"}
          >
            <MenuButton
              onClick={() => {
                toggleReflections();
              }}
              text={{
                en: `REFLECTION:`,
                es: `REFLEJOS:`,
              }}
            ></MenuButton>
            <div className="flex justify-center p-3 lg:p-5 lg:m-3 text-3xl md:text-4xl xl:text-6xl orbitron font-[600] hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
              {""}
              <motion.div
                className="mx-3"
                animate={{
                  opacity: reflections ? 1 : 0.25,
                }}
              >
                ON
              </motion.div>
              <motion.div
                className="mx-3"
                animate={{
                  opacity: !reflections ? 1 : 0.25,
                }}
              >
                OFF
              </motion.div>
            </div>
            <MenuButton
              onClick={() => {
                setMenu("settings");
              }}
              text={{
                en: "REFLECTION QUALITY",
                es: "CALIDAD DE LOS REFLEJOS",
              }}
            ></MenuButton>
            <div className="flex justify-center p-3 lg:p-5 lg:m-3 text-3xl md:text-4xl xl:text-6xl orbitron font-[600] hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
              {""}
              <motion.div
                className="mx-3"
                onClick={() => {
                  setReflectionSize(256);
                }}
                animate={{
                  opacity: reflectionSize == 256 ? 1 : 0.25,
                }}
              >
                LOW
              </motion.div>
              <motion.div
                className="mx-3"
                onClick={() => {
                  setReflectionSize(512);
                }}
                animate={{
                  opacity: reflectionSize == 512 ? 1 : 0.25,
                }}
              >
                MEDIUM
              </motion.div>
              <motion.div
                className="mx-3"
                onClick={() => {
                  setReflectionSize(1024);
                }}
                animate={{
                  opacity: reflectionSize == 1024 ? 1 : 0.25,
                }}
              >
                HIGH
              </motion.div>
              <motion.div
                className="mx-3"
                onClick={() => {
                  setReflectionSize(2048);
                }}
                animate={{
                  opacity: reflectionSize == 2048 ? 1 : 0.25,
                }}
              >
                ULTRA
              </motion.div>
            </div>
            <MenuButton
              onClick={() => {
                console.log("working");
                toggleLanguage();
              }}
              text={{
                en: "RESOLUTION",
                es: "RESOLUCION",
              }}
            ></MenuButton>

            <div className="flex justify-center p-3 lg:p-5 lg:m-3 text-3xl md:text-4xl xl:text-6xl orbitron font-[600] hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
              {""}
              <motion.div
                className="mx-3"
                onClick={() => {
                  changeDpr("low");
                }}
                animate={{
                  opacity: dpr[0] == 0.25 ? 1 : 0.25,
                }}
              >
                LOW
              </motion.div>
              <motion.div
                className="mx-3"
                onClick={() => {
                  changeDpr("medium");
                }}
                animate={{
                  opacity: dpr[0] == 0.5 ? 1 : 0.25,
                }}
              >
                MEDIUM
              </motion.div>
              <motion.div
                className="mx-3"
                onClick={() => {
                  changeDpr("high");
                }}
                animate={{
                  opacity: dpr[0] == 1 ? 1 : 0.25,
                }}
              >
                HIGH
              </motion.div>
            </div>
            <MenuButton
              onClick={() => {
                setMenu("main");
              }}
              text={{
                en: "BACK",
                es: "ATRAS",
              }}
            ></MenuButton>
          </motion.div>
        </div>
      </div>
    </>
  );
}
