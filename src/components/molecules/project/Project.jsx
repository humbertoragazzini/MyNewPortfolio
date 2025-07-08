import Heading from "../../atoms/ui/Heading";
import Paragraph from "../../atoms/ui/Paragraph";

export default function Project({ language, content, changeSelectedProject }) {
  return (
    <>
      <div
        className={`relative z-10 grid w-full h-full grid-cols-3 text-white`}
      >
        <div className="col-span-3 p-13">
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
            <div className="col-span-6">
              <Paragraph
                language={language}
                text={{
                  en: "Technologies:",
                  es: "Tecnologias usadas:",
                }}
                className="mb-4 text-2xl orbitron font-[600]"
              ></Paragraph>
              <div className="text-2xl orbitron font-[400] mr-12 flex flex-wrap">
                {content.technologies.length > 0 &&
                  content.technologies.map((tech) => {
                    return (
                      <div className="px-4 py-3 m-2 text-black bg-amber-400 rounded-xl">
                        <p className="font-semibold">{tech}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="relative col-span-6">
              {content.video !== null && content.video !== "" && (
                <video
                  className="absolute w-full -translate-x-5 translate-y-16 shadow-2xl rounded-3xl"
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
                <div className="absolute w-full overflow-hidden -translate-x-5 translate-y-16 shadow-2xl rounded-3xl">
                  <iframe
                    className="hidden w-full lg:block"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${content.embeded}?&mute=1&loop=1&playlist=${content.embeded}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen
                  ></iframe>
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
          {content.links.map((link) => {
            return (
              <div className="grid grid-cols-6 mt-5 text-2xl">
                <div className="col-span-12">
                  <a
                    href={link.url}
                    target="_blank"
                    className="block px-4 py-3 m-2 text-black cursor-pointer bg-amber-400 rounded-xl w-fit"
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
          <div className="grid grid-cols-6 mt-5 text-2xl">
            <div className="col-span-6">
              <button
                onClick={() => {
                  console.log("change to free view");
                  changeSelectedProject(null);
                }}
                className="block px-4 py-3 m-2 text-black cursor-pointer bg-amber-400 rounded-xl w-fit"
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
      </div>
    </>
  );
}
