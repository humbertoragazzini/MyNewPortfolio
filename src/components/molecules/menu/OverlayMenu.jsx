import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";
import { LuMenu } from "react-icons/lu";

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
    ilumination,
    changeIlumination,
  } = useContext(AppContext);
  const [menu, setMenu] = useState("main");
  const [reflectionSize, setReflectionSize] = useState(256);

  useEffect(() => {
    changeReflectionQuality(reflectionSize);
  }, [reflectionSize]);

  return (
    <>
      <div className="h-[calc(100%-15px)] m-2 bg-[rgba(0,0,0,0.55)] rounded-2xl orbitron fixed w-[280px] top-0 left-0 z-[9999] p-4 text-[rgba(255,255,255,1)] overflow-hidden">
        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Initializing core systems...</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Power plant online.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Main reactor stabilized.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Life support systems nominal.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Navigation systems calibrated.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Starboard thrusters responsive.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Portside stabilizers aligned.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Communication array activated.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Sensor grid fully operational.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Artificial gravity engaged.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Thermal regulators optimal.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Flight control interface ready.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Shields at 100% capacity.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Weapon systems on standby.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Cargo bay secured.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Cryo-pods status: green.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Environmental seal confirmed.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Data uplink to command center successful.</p>
        </div>

        <div className="flex items-center justify-start my-1">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
          <p>Captain’s interface online.</p>
        </div>

        <div className="flex items-center justify-start my-1 font-semibold text-green-500">
          <span className="inline-block mr-2 w-4 h-4 border-[1px] bg-green-700 border-green-400 opacity-80 animate-pulse"></span>
          <p>All systems green. Ready for departure.</p>
        </div>
      </div>
      <div className="fixed w-[280px] bottom-0 right-0 z-[9999] p-4 bg-[rgba(66.6,0.179,58.318,0.4)] flex justify-end items-end">
        <div className="w-[280px] flex items-end justify-end flex-col">
          <div className="life h-[25px] bg-amber-500 w-4/5 mb-1"></div>
          <div className="shield h-[15px] bg-blue-800 w-3/4 mb-1"></div>
          <div className="mb-1 bullet"></div>
        </div>
        <button
          onClick={() => {
            toggleMenu();
            console.log("click menu");
          }}
          className={`m-2 rounded-2xl right-[0px] duration-500 ease-initial cursor-pointer ${
            isMenuOpen ? "-translate-y-[calc(100%+50px)]" : "translate-y-0"
          }`}
        >
          <LuMenu className="relative z-[1000] w-[35px] h-[35px] stroke-white pointer-events-none"></LuMenu>
        </button>
      </div>
      <div
        className={`fixed ${
          isMenuOpen
            ? "translate-y-0 bg-[rgba(120,0,110,0.40)] "
            : "translate-y-[120vh] bg-[rgba(200,50,180,0.45)] "
        } z-[9999] backdrop-blur-md transition-all duration-500 ease-initial trans h-[100dvh] w-screen flex justify-center items-center overflow-hidden`}
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
              className="m-3 text-3xl md:m-4 xl:m-5 md:text-4xl xl:text-6xl"
            ></MenuButton>
            <MenuButton
              onClick={() => {
                setMenu("settings");
              }}
              text={{
                en: "SETTINGS",
                es: "CONFIGURACION",
              }}
              className="m-3 text-3xl md:m-4 xl:m-5 md:text-4xl xl:text-6xl"
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
              className="m-3 text-3xl md:m-4 xl:m-5 md:text-4xl xl:text-6xl"
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
                className="m-3 text-3xl md:m-4 xl:m-5 md:text-4xl xl:text-6xl"
              ></MenuButton>
            </a>
          </motion.div>
          <motion.div
            animate={{
              x: menu == "settings" ? 0 : "110vw",
            }}
            className={"absolute flex flex-col flex-wrap"}
          >
            <MenuButton
              onClick={() => {
                toggleReflections();
              }}
              text={{
                en: `REFLECTION:`,
                es: `REFLEJOS:`,
              }}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            ></MenuButton>
            <div className="flex justify-center mb-5 text-xl md:text-2xl xl:text-3xl orbitron font-[600] transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
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
                togglePostProcessing();
              }}
              text={{
                en: `Postprocessing:`,
                es: `Postprocesado:`,
              }}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            ></MenuButton>
            <div className="flex justify-center mb-5 text-xl md:text-2xl xl:text-3xl orbitron font-[600] transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
              <motion.div
                className="mx-3"
                animate={{
                  opacity: postProcessing ? 1 : 0.25,
                }}
              >
                ON
              </motion.div>
              <motion.div
                className="mx-3"
                animate={{
                  opacity: !postProcessing ? 1 : 0.25,
                }}
              >
                OFF
              </motion.div>
            </div>
            <MenuButton
              text={{
                en: "REFLECTION QUALITY",
                es: "CALIDAD DE LOS REFLEJOS",
              }}
              animated={false}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            ></MenuButton>
            <div className="flex justify-center flex-wrap mb-5 mx-6 text-xl md:text-2xl xl:text-3xl orbitron font-[600] hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
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
              text={{
                en: "ILUMINATION",
                es: "ILUMINACION",
              }}
              animated={false}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            ></MenuButton>
            <div className="flex justify-center flex-wrap mb-5 mx-6 text-xl md:text-2xl xl:text-3xl orbitron font-[600] hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
              <motion.div
                className="mx-3"
                onClick={() => {
                  changeIlumination(true);
                }}
                animate={{
                  opacity: ilumination ? 1 : 0.25,
                }}
              >
                ON
              </motion.div>
              <motion.div
                className="mx-3"
                onClick={() => {
                  changeIlumination(false);
                }}
                animate={{
                  opacity: !ilumination ? 1 : 0.25,
                }}
              >
                OFF
              </motion.div>
            </div>
            <MenuButton
              text={{
                en: "RESOLUTION",
                es: "RESOLUCION",
              }}
              animated={false}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            ></MenuButton>
            <div className="flex justify-center mb-5 text-xl md:text-2xl xl:text-3xl orbitron font-[600] hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]">
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
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            ></MenuButton>
          </motion.div>
        </div>
      </div>
    </>
  );
}
