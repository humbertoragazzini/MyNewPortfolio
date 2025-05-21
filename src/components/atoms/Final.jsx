import { Html } from "@react-three/drei";

export default function Final() {
    return (
        <Html occlude={"blending"} transform position={[0, 0, -1450]}>
            <div className="w-screen h-screen bg-white text-black">
                <div className="grid grid-cols-2 p-14">
                    <div className="col-span-1">
                        <img></img>
                    </div>
                    <div className="col-span-1">
                        <ul>
                            <li className="text-5xl font-semibold mb-5">
                                Gracias por haber visitado mi portfolio
                            </li>
                            <li className="text-3xl mb-6">
                                Estoy abierto a nuevos desafios y a seguir creciendo, si tenes algun projecto en mente, nos pongamos en contacto y hagamos de ese proejcto una realidad.
                            </li>
                            <li className="text-3xl mb-6">
                                Soy una persona apasionada de lon que hace, me gusta la technologias, soy un usuario diario de linux, creo en el opensource y su filosofia, disfruto de crear nuevos projectos y darle vida.
                            </li>
                            <li className="font-bold text-3xl mb-6">
                                Skills:
                            </li>
                            <li className="font-bold text-3xl mb-6">
                                Hobbies:
                            </li>
                            <li className="font-bold text-3xl mb-6">
                                Email:
                            </li>
                            <li className="font-bold text-3xl mb-6">
                                Github:
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Html>
    )
}