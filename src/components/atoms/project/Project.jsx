import { useContext } from "react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { AppContext } from "../../../context/AppContext";


export default function Project({ language, content }) {

    return (
        <>
            <div
                className={`absolute top-0 left-0 z-0 w-[125%] -translate-x-[12.5%] -translate-y-[5%] h-auto aspect-video animated-gradient`}
            ></div>
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
                    <div className="flex">
                        <div className="py-4">
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
                            <div className="text-2xl orbitron font-[400] mr-12 flex flex-wrap">
                                {
                                    content.technologies.length > 0 && content.technologies.map((tech) => {
                                        return (
                                            <div className="px-2 py-3 bg-amber-400 text-black rounded-xl m-2">
                                                <p className="font-semibold">{tech}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}