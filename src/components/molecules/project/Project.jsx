import Heading from "../../atoms/ui/Heading";
import Paragraph from "../../atoms/ui/Paragraph";

export default function Project({ language, content, changeSelectedProject }) {
  return (
    <>
      <div
        className={`relative z-10 grid w-full h-full overflow-y-scroll lg:overflow-visible grid-cols-3 text-white`}
      >
        <div className="flex flex-col items-center justify-center col-span-3 p-13">
          {content.projectName && (
            <Heading
              className="text-6xl mb-9 orbitron font-[600]"
              level={1}
              language={language}
              text={content.projectName}
            ></Heading>
          )}
          {content.description && (
            <Paragraph
              language={language}
              text={content.description}
              className="text-3xl mb-9 orbitron font-[400]"
            ></Paragraph>
          )}
          <div className="grid grid-cols-12">
            <div className="col-span-12 mt-5 lg:col-span-6">
              <Paragraph
                language={language}
                text={{
                  en: "Technologies:",
                  es: "Tecnologias usadas:",
                }}
                className="my-7 text-4xl orbitron font-[600]"
              ></Paragraph>
              <div className="text-2xl orbitron font-[400] mr-12 flex flex-wrap">
                {content.technologies.length > 0 &&
                  content.technologies.map((tech) => {
                    return (
                      <div className="block px-5 py-3 mt-3 mr-2 text-xl orbitron font-[600] text-black transition-all duration-500 border-2 border-black cursor-pointer bg-amber-400 rounded-xl w-fit hover:text-amber-400 hover:bg-black hover:border-amber-400">
                        <p className="font-semibold">{tech}</p>
                      </div>
                    );
                  })}
              </div>

              <div className="grid grid-cols-6 text-2xl">
                <div className="col-span-6">
                  {content.links.map((link) => {
                    return (
                      <div className="grid grid-cols-6 mt-6 text-2xl">
                        <div className="col-span-12">
                          <a
                            href={link.url}
                            target="_blank"
                            className="block px-5 py-3 text-xl orbitron font-[600] text-black transition-all duration-500 border-2 border-black cursor-pointer bg-amber-400 rounded-xl w-fit hover:text-amber-400 hover:bg-black hover:border-amber-400"
                          >
                            <Paragraph
                              language={language}
                              text={link.label}
                              className="font-semibold"
                            ></Paragraph>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                  <button
                    onClick={() => {
                      changeSelectedProject(null);
                    }}
                    className="block px-5 py-3 mt-6 text-xl orbitron font-[600] text-black transition-all duration-500 border-2 border-black cursor-pointer bg-amber-400 rounded-xl w-fit hover:text-amber-400 hover:bg-black hover:border-amber-400"
                  >
                    <Paragraph
                      language={language}
                      text={{
                        en: "Click here to go back to free view",
                        es: "Clickea aqui para volver a vista libre",
                      }}
                      className="text-2xl orbitron font-[600]"
                    ></Paragraph>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:p-5 ">
              {content.video !== null && content.video !== "" && (
                <video
                  className="w-full -translate-x-5 translate-y-16 shadow-2xl rounded-3xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={content.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {content.embeded !== null && (
                <div className="w-full mt-10 mb-16 overflow-hidden shadow-2xl lg:translate-y-16 aspect-video md:block rounded-3xl">
                  <iframe
                    className="hidden w-full h-full lg:block "
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${content.embeded}?&mute=1&loop=1&playlist=${content.embeded}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen
                  ></iframe>
                  <img
                    className="block w-full lg:hidden"
                    src={content.images[0]}
                  ></img>
                </div>
              )}
              {content.gif !== "" && content.gif !== null && (
                <img
                  src={content.gif}
                  className="absolute w-full -translate-x-5 translate-y-16 shadow-2xl rounded-3xl"
                  alt="GIF"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
