import { Html } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../../../context/AppContext";
import Paragraph from "../../../atoms/ui/Paragraph";
import gsap from "gsap";

export default function Final({ turnOn }) {
  const { language } = useContext(AppContext);
  const htmlRef = useRef(null);
  useEffect(() => {
    if (turnOn && htmlRef.current) {
      gsap.to(htmlRef.current, { opacity: 1, duration: 1, delay: 5 });
    }
  }, [turnOn]);
  return (
    <Html occlude={""} transform position={[0, 0, -1210]}>
      <div
        ref={htmlRef}
        className="w-screen h-[100dvh] text-white bg-transparent opacity-0"
      >
        <div className="grid grid-cols-12">
          <div className="hidden px-2 md:block md:col-span-3 md:px-4 lg:px-10">
            <div className="rounded-full w-full max-w-[600px] aspect-square overflow-hidden">
              <img className="w-[105%]" src="./img/profile-photo.png"></img>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <ul>
              <li className="mb-5 text-2xl font-semibold md:text-5xl">
                <Paragraph
                  text={{
                    en: "Thanks for visiting my portfolio",
                    es: "Gracias por haber visitado mi portfolio",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-md lg:text-3xl">
                <Paragraph
                  text={{
                    en: "I'm open to new challenges and to continuing to grow. If you have a project in mind, let’s get in touch and make it a reality.",
                    es: "Estoy abierto a nuevos desafios y a seguir creciendo, si tenes algun projecto en mente, nos pongamos en contacto y hagamos de ese proejcto una realidad.",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-md lg:text-3xl">
                <Paragraph
                  text={{
                    en: "I'm passionate about what I do. I love technology, I'm a daily Linux user, I believe in open source and its philosophy, and I enjoy creating new projects and bringing them to life.",
                    es: "Soy una persona apasionada de lon que hace, me gusta la technologias, soy un usuario diario de linux, creo en el opensource y su filosofia, disfruto de crear nuevos projectos y darle vida.",
                  }}
                  language={language}
                ></Paragraph>
              </li>
              <li className="mb-6 text-md lg:text-3xl">
                <Paragraph
                  text={{
                    en: "Skills:",
                    es: "Skills:",
                  }}
                  language={language}
                  className={"inline font-bold mr-2"}
                ></Paragraph>
                <Paragraph
                  text={{
                    en: "JS, GLSL, React, NextJS, RTF, Tailwindcss, Bootstrap, Shell, Strapi, Prismic, C++, Linux, Blender",
                    es: "JS, GLSL, React, NextJS, RTF, Tailwindcss, Bootstrap, Shell, Strapi, Prismic, C++, Linux, Blender",
                  }}
                  language={language}
                  className={"inline"}
                ></Paragraph>
              </li>
              <li className="mb-6 text-md lg:text-3xl">
                <Paragraph
                  text={{
                    en: "Hobbies:",
                    es: "Hobbies:",
                  }}
                  language={language}
                  className={"inline font-bold mr-2"}
                ></Paragraph>
                <Paragraph
                  text={{
                    en: "I really enjoy playing video games, I’m very into cinema, and above all, I love studying Blender and programming—where everything I learn in Blender blends perfectly with web development.",
                    es: "Disfruto mucho jugar videojuegos, me encanta el cine, y sobre todo, me apasiona estudiar Blender y programación. Me motiva especialmente cuando puedo combinar lo que aprendo en Blender con el desarrollo web, uniendo creatividad y tecnología en un mismo espacio.",
                  }}
                  language={language}
                  className={"inline"}
                ></Paragraph>
              </li>
              <li className="mb-6 text-md lg:text-3xl">
                <Paragraph
                  text={{
                    en: "Email:",
                    es: "Email:",
                  }}
                  language={language}
                  className={"inline-block font-bold"}
                ></Paragraph>
                <a
                  className="ml-2 underline hover:no-underline"
                  href="mailto:hmragazzini@hotmail.com"
                  target="_blank"
                >
                  hmragazzini@hotmail.com
                </a>
              </li>
              <li className="mb-6 text-md lg:text-3xl">
                <Paragraph
                  text={{
                    en: "Github:",
                    es: "Github:",
                  }}
                  language={language}
                  className={"inline-block font-bold"}
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
