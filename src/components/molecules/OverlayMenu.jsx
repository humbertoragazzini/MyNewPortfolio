import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Button from "../atoms/ui/Button"

export default function OverlayMenu() {

	const { toggleLanguage } =
		useContext(AppContext);

	return (
		<div className="fixed z-[9999] h-screen w-screen bg-[rgba(200,50,180,0.65)] flex justify-center items-center">

			<div className="flex flex-col items-center justify-center">
				<Button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={() => { console.log("click menu") }} text={{
					en: "START",
					es: "COMENZAR"
				}}></Button>
				<Button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={() => { console.log("click menu") }} text={{
					en: "SETTINGS",
					es: "CONFIGURACION"
				}}></Button>
				<Button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={() => {
					console.log("working")
					toggleLanguage()
				}} text={{
					en: "LANGUAGE",
					es: "IDIOMA"
				}}></Button >
				<Button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={() => { console.log("click menu") }} text={{
					en: "GITHUB",
					es: "GITHUB"
				}}></Button>
			</div >
		</div >
	)
}
