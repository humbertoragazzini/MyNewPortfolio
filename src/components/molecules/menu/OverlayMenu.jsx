import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import MenuButton from "./MenuButton";

export default function OverlayMenu() {

	const { toggleLanguage } =
		useContext(AppContext);

	return (
		<div className="fixed z-[9999] h-screen w-screen bg-[rgba(200,50,180,0.65)] flex justify-center items-center">

			<div className="flex flex-col items-center justify-center">
				<MenuButton onClick={() => { console.log("click menu") }} text={{
					en: "START",
					es: "COMENZAR"
				}}></MenuButton>
				<MenuButton onClick={() => { console.log("click menu") }} text={{
					en: "SETTINGS",
					es: "CONFIGURACION"
				}}></MenuButton>
				<MenuButton onClick={() => {
					console.log("working")
					toggleLanguage()
				}} text={{
					en: "LANGUAGE",
					es: "IDIOMA"
				}}></MenuButton >
				<MenuButton onClick={() => { console.log("click menu") }} text={{
					en: "GITHUB",
					es: "GITHUB"
				}}></MenuButton>
			</div >
		</div >
	)
}
