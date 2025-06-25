import { useContext } from "react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { AppContext } from "../../../context/AppContext";


export default function Project({ language, content }) {

    return (
        <>
            <div className={`relative z-10 grid w-full h-full grid-cols-3 text-white`}>
                <div className="col-span-3 p-13">
                    {
                        content.projectName && <Heading className="text-6xl mb-9 orbitron font-[600]" level={1} language={language} text={content.projectName}>
                        </Heading>
                    }
                    {
                        content.description && <Paragraph
                            language={language}
                            text={content.description}
                            className="text-3xl mb-9 orbitron font-[400]"
                        ></Paragraph>
                    }
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 py-4">
                            <Paragraph
                                language={language}
                                text={{
                                    en: "Technologies:",
                                    es: "Tecnologias usadas:"
                                }}
                                className="mb-4 text-2xl orbitron font-[600]"
                            ></Paragraph>
                        </div>
                        <div className="col-span-9">
                            <div className="text-2xl orbitron font-[400] mr-12 flex flex-wrap">
                                {
                                    content.technologies.length > 0 && content.technologies.map((tech) => {
                                        return (
                                            <div className="py-3 px-4 bg-amber-400 text-black rounded-xl m-2">
                                                <p className="font-semibold">{tech}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {
                        content.links.map((link) => {
                            return (
                                <div className="grid grid-cols-12 mt-5 text-2xl">
                                    <div className="col-span-3 py-4">
                                        <Paragraph
                                            language={language}
                                            text={link.title}
                                            className="mb-4 text-2xl orbitron font-[600]"
                                        ></Paragraph>
                                    </div>
                                    <div className="col-span-9">
                                        <a href={link.url} target="_blank" className="py-3 px-4 bg-amber-400 text-black rounded-xl m-2 block w-fit cursor-pointer">
                                            <p className="font-semibold">{link.label}</p>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}