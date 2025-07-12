import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../../atoms/ui/Heading";
import React from "react";

export default function MultiCarousel({ language }) {
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
  const carouselItems = [
    <div className="w-full px-3 text-white py-9">
      <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-6 xl:col-span-4">
        <Heading
          language={language}
          className={
            "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center mb-6"
          }
          level={1}
          text={{
            en: "Touch controls",
            es: "Controles tactiles",
          }}
        ></Heading>
        <button
          className="w-32 mx-auto mb-3"
          onClick={() => {
            alert("Changing control");
          }}
        >
          <img className="w-32" src="img/touch.svg"></img>
        </button>
      </div>
    </div>,
    <div className="w-full px-3 text-white py-9">
      <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-6 xl:col-span-4">
        <Heading
          language={language}
          className={
            "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center mb-6"
          }
          level={1}
          text={{
            en: "On screen joysticks",
            es: "Controles en pantalla",
          }}
        ></Heading>
        <button
          className="w-32 mx-auto mb-3"
          onClick={() => {
            alert("Changing control");
          }}
        >
          <img className="w-32" src="img/joystick.svg"></img>
        </button>
      </div>
    </div>,
    <div className="w-full px-3 text-white py-9">
      <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-6 xl:col-span-4">
        <Heading
          language={language}
          className={
            "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center mb-6"
          }
          level={1}
          text={{
            en: "Regular mouse web browsing",
            es: "Regular mouse web browsing",
          }}
        ></Heading>
        <button
          className="w-32 mx-auto mb-3"
          onClick={() => {
            alert("Changing control");
          }}
        >
          <img className="w-32" src="img/mouse.svg"></img>
        </button>
      </div>
    </div>,
  ];

  function CustomDot({ onClick, ...rest }) {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
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
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      slidesToSlide={1}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      customDot={<CustomDot />}
    >
      {carouselItems}
    </Carousel>
  );
}
