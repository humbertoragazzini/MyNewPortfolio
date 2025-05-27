export default function OverlayMenu(){
	return(
		<div className="fixed z-[999999] h-screen w-screen bg-[rgba(200,50,180,0.65)] flex justify-center items-center">
	
			<div>
				<button className="p-5 m-3 text-2xl font-bold">Start</button>
				<button className="p-5 m-3 text-2xl font-bold">Settings</button>
				<button className="p-5 m-3 text-2xl font-bold">Visit my github</button>
				<button className="p-5 m-3 text-2xl font-bold">Language</button>
			</div>
		</div>
	)
}
