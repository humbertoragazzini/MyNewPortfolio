export default function OverlayMenu(){
	return(
		<div className="fixed z-[999999] h-screen w-screen bg-[rgba(200,50,180,0.65)] flex justify-center items-center">
	
			<div className="flex flex-col items-center justify-center">
				<button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={()=>{alert("work")}}>Start</button>
				<button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={()=>{alert("work")}}>Settings</button>
				<button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={()=>{alert("work")}}>Visit my github</button>
				<button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={()=>{alert("work")}}>Language</button>
			</div>     
		</div>   
	) 
}
