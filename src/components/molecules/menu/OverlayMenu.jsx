import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import MenuButton from "./MenuButton";

export default function OverlayMenu() {
  const { toggleLanguage, isMenuOpen, toggleMenu } = useContext(AppContext);

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
              console.log("click menu");
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
          <MenuButton
            onClick={() => {
              console.log("click menu");
            }}
            text={{
              en: "GITHUB",
              es: "GITHUB",
            }}
          ></MenuButton>
        </div>
      </div>
    </>
  );
}
