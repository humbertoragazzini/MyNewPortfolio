import { Html } from "@react-three/drei";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import Paragraph from "../../../atoms/ui/Paragraph";

export default function Final() {
  const { language } = useContext(AppContext);
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
                <Paragraph
                  text={{
                    en: "Thanks for visiting my portfolio",
                    es: "Gracias por haber visitado mi portfolio",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-3xl">
                <Paragraph
                  text={{
                    en: "hi",
                    es: "Estoy abierto a nuevos desafios y a seguir creciendo, si tenes algun projecto en mente, nos pongamos en contacto y hagamos de ese proejcto una realidad.",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-3xl">
                <Paragraph
                  text={{
                    en: "hi",
                    es: "Soy una persona apasionada de lon que hace, me gusta la technologias, soy un usuario diario de linux, creo en el opensource y su filosofia, disfruto de crear nuevos projectos y darle vida.",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-3xl font-bold">
                <Paragraph
                  text={{
                    en: "Skills: JS, GLSL, React, NextJS, RTF, Tailwindcss, Bootstrap, Shell, Strapi, Prismic, C++, Linux, Blender",
                    es: "Skills: JS, GLSL, React, NextJS, RTF, Tailwindcss, Bootstrap, Shell, Strapi, Prismic, C++, Linux, Blender",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-3xl font-bold">
                <Paragraph
                  text={{
                    en: "Hobbies: ",
                    es: "Hobbies: ",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-3xl font-bold">
                <Paragraph
                  text={{
                    en: "Email:",
                    es: "Email:",
                  }}
                  language={language}
                  className={"inline-block"}
                ></Paragraph>
                <a
                  className="ml-2 underline hover:no-underline"
                  href="mailto:hmragazzini@hotmail.com"
                  target="_blank"
                >
                  hmragazzini@hotmail.com
                </a>
              </li>
              <li className="mb-6 text-3xl font-bold">
                <Paragraph
                  text={{
                    en: "Github:",
                    es: "Github:",
                  }}
                  language={language}
                  className={"inline-block"}
                ></Paragraph>
                <a
                  className="ml-2 underline hover:no-underline"
                  href="https://github.com/humbertoragazzini"
                  target="_blank"
                >
                  https://github.com/humbertoragazzini
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Html>
  );
}
