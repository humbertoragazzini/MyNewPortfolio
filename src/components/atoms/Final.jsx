import { Html } from "@react-three/drei";

export default function Final() {
    return (
        <Html occlude={"blending"} transform position={[0, 0, -1450]}>
            <div className="w-screen h-screen bg-black">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <img></img>
                    </div>
                    <div className="col-span-1">

                    </div>
                </div>
            </div>
        </Html>
    )
}