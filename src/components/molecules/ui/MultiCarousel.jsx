import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Paragraph from "../../atoms/ui/Paragraph";

export default function MultiCarousel({ language }) {
  const { controlsType, toggleControls } = useContext(AppContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  function CustomDot({ onClick, ...rest }) {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <button onClick={() => onClick()}>
        {/* {React.Children.toArray(carouselItems)[index]} */}
        <div
          className={`w-4 h-4 m-1 border-2 border-white rounded-full ${
            active ? "bg-[rgba(255,255,255,0.25)]" : "bg-black"
          }`}
        ></div>
      </button>
    );
  }

  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={false}
        slidesToSlide={1}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        customDot={<CustomDot onClick={() => {}} />}
      >
        <div className="px-3 pt-4 mx-auto text-white w-fit pb-9">
          <div className="flex flex-col items-center justify-center">
            <Paragraph
              language={language}
              className={
                "text-lg md:text-xl lg:text-2xl text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center mb-6"
              }
              text={{
                en: "Touch controls",
                es: "Controles tactiles",
              }}
            ></Paragraph>
            <button
              className="w-32 mx-auto mb-3"
              onClick={() => {
                toggleControls("touch");
              }}
            >
              <img className="w-32 mb-4" src="img/touch.svg"></img>
              {controlsType == "touch" && (
                <Paragraph
                  language={language}
                  className={`border-2 transition-all rounded-xl px-2 py-1 border-white bg-green-600 !text-black`}
                  text={{
                    en: "Enabled",
                    es: "Activado",
                  }}
                ></Paragraph>
              )}
              {controlsType !== "touch" && (
                <Paragraph
                  language={language}
                  className={`border-2 transition-all rounded-xl px-2 py-1 border-white bg-red-600`}
                  text={{
                    en: "Disabled",
                    es: "Desabilitado",
                  }}
                ></Paragraph>
              )}
            </button>
          </div>
        </div>
        <div className="px-3 pt-4 mx-auto text-white w-fit pb-9">
          <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-6 xl:col-span-4">
            <Paragraph
              language={language}
              className={
                "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center mb-6"
              }
              text={{
                en: "On screen joysticks",
                es: "Controles en pantalla",
              }}
            ></Paragraph>
            <button
              className="w-32 mx-auto mb-3"
              onClick={() => {
                toggleControls("joystick");
              }}
            >
              <img className="w-32 mb-4" src="img/joystick.svg"></img>
              {controlsType == "joystick" && (
                <Paragraph
                  language={language}
                  className={`border-2 transition-all rounded-xl px-2 py-1 border-white bg-green-600 !text-black`}
                  text={{
                    en: "Enabled",
                    es: "Activado",
                  }}
                ></Paragraph>
              )}
              {controlsType !== "joystick" && (
                <Paragraph
                  language={language}
                  className={`border-2 transition-all rounded-xl px-2 py-1 border-white bg-red-600`}
                  text={{
                    en: "Disabled",
                    es: "Desabilitado",
                  }}
                ></Paragraph>
              )}
            </button>
          </div>
        </div>
        <div className="px-3 pt-4 mx-auto text-white w-fit pb-9">
          <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-6 xl:col-span-4">
            <Paragraph
              language={language}
              className={
                "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center mb-6"
              }
              text={{
                en: "Regular mouse web browsing",
                es: "Regular mouse web browsing",
              }}
            ></Paragraph>
            <button
              className="w-32 mx-auto mb-3"
              onClick={() => {
                toggleControls("mouse");
              }}
            >
              <img className="w-32 mb-4" src="img/mouse.svg"></img>
              {controlsType == "mouse" && (
                <Paragraph
                  language={language}
                  className={`border-2 transition-all rounded-xl px-2 py-1 border-white bg-green-600 !text-black`}
                  text={{
                    en: "Enabled",
                    es: "Activado",
                  }}
                ></Paragraph>
              )}
              {controlsType !== "mouse" && (
                <Paragraph
                  language={language}
                  className={`border-2 transition-all rounded-xl px-2 py-1 border-white bg-red-600`}
                  text={{
                    en: "Disabled",
                    es: "Desabilitado",
                  }}
                ></Paragraph>
              )}
            </button>
          </div>
        </div>
      </Carousel>
    </>
  );
}
