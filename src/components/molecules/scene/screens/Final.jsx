import { Html } from "@react-three/drei";

export default function Final() {
  return (
    <Html occlude={""} transform position={[0, 0, -1220]}>
      <div className="w-screen h-[100dvh] text-white bg-transparent">
        <div className="grid grid-cols-12 p-14">
          <div className="col-span-3 px-10">
            <div className="rounded-full w-full max-w-[600px] aspect-square overflow-hidden">
              <img className="w-[105%]" src="./img/profile-photo.png"></img>
            </div>
          </div>
          <div className="col-span-9">
            <ul>
              <li className="mb-5 text-5xl font-semibold">
                Gracias por haber visitado mi portfolio
              </li>
              <li className="mb-6 text-3xl">
                Estoy abierto a nuevos desafios y a seguir creciendo, si tenes
                algun projecto en mente, nos pongamos en contacto y hagamos de
                ese proejcto una realidad.
              </li>
              <li className="mb-6 text-3xl">
                Soy una persona apasionada de lon que hace, me gusta la
                technologias, soy un usuario diario de linux, creo en el
                opensource y su filosofia, disfruto de crear nuevos projectos y
                darle vida.
              </li>
              <li className="mb-6 text-3xl font-bold">Skills:</li>
              <li className="mb-6 text-3xl font-bold">Hobbies:</li>
              <li className="mb-6 text-3xl font-bold">Email:</li>
              <li className="mb-6 text-3xl font-bold">Github:</li>
            </ul>
          </div>
        </div>
      </div>
    </Html>
  );
}
