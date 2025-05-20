import { Html } from "@react-three/drei";

export default function Final() {
    return (
        <Html occlude={"blending"} transform position={[0, 0, -1450]}>
            <div className="w-screen h-screen bg-white">
                <h1>The final content</h1>
            </div>
        </Html>
    )
}