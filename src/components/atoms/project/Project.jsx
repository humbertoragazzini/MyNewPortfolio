import { useContext } from "react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { AppContext } from "../../../context/AppContext";

export default function Project({ language }) {

    return (
        <>
            <div
                className={`absolute top-0 left-0 z-0 w-[125%] -translate-x-[12.5%] -translate-y-[5%] h-auto aspect-video animated-gradient`}
            ></div>
            <div className={`relative z-10 grid w-full h-full grid-cols-3 text-white`}>
                <div className="col-span-3 p-13">
                    <Heading className="text-6xl mb-9 orbitron font-[600]" level={1} language={language} text={{
                        en: "Primalport - Website",
                        es: "Primalport - Sitio web"
                    }}>
                    </Heading>
                    <Paragraph
                        language={language}
                        text={{
                            en: "This is the main page of a collaborative project. The company is dedicated to the import and export of goods. On this website, I applied all my knowledge of Three.js, React Three Fiber, and Next.js. The site is currently hosted on GitHub Pages, but it will be migrated to Vercel in the future, using Prismic as its content management system (CMS).",
                            es: "Esta es la página principal de un proyecto colaborativo. La empresa se dedica a la importación y exportación de bienes. En este sitio web, puse en práctica todo mi conocimiento en Three.js, React Three Fiber y Next.js. Actualmente, la página está alojada en GitHub Pages, pero en el futuro se migrará a Vercel y utilizará Prismic como sistema de gestión de contenidos (CMS)."
                        }}
                        className="text-3xl mb-9 orbitron font-[400]"
                    ></Paragraph>
                    <div className="flex">
                        <div className="">
                            <Paragraph
                                language={language}
                                text={{
                                    en: "Technologies:",
                                    es: "Tecnologias usadas:"
                                }}
                                className="mb-4 text-2xl orbitron font-[600]"
                            ></Paragraph>
                        </div>
                        <div className="pl-6 flex">
                            <ul className="text-2xl orbitron font-[400] mr-12">
                                <li className="mb-3">
                                    <p>NextJS</p>
                                </li>
                                <li className="mb-3">
                                    <p>Tailwind</p>
                                </li>
                                <li className="mb-3">
                                    <p>React Three Fiber</p>
                                </li>
                                <li className="mb-3">
                                    <p>Framer</p>
                                </li>
                            </ul>
                            <ul className="text-2xl orbitron font-[400]">
                                <li className="mb-3">
                                    <p>GSAP</p>
                                </li>
                                <li className="mb-3">
                                    <p>Blender</p>
                                </li>
                                <li className="mb-3">
                                    <p>React</p>
                                </li>
                                <li className="mb-3">
                                    <p>Vite</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}