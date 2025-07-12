import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../../atoms/ui/Heading";

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
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      slidesToSlide={1}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    >
      <div className="w-full px-3 text-white py-9">
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
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
          <img className="w-32 mx-auto mb-3" src="img/touch.svg"></img>
        </div>
      </div>
      <div className="w-full px-3 text-white py-9">
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
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
          <img className="w-32 mx-auto mb-3" src="img/touch.svg"></img>
        </div>
      </div>
      <div className="w-full px-3 text-white py-9">
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <Heading
            language={language}
            className={
              "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center mb-6"
            }
            level={1}
            text={{
              en: "Regular web browsing",
              es: "Regular web browsing",
            }}
          ></Heading>
          <img className="w-32 mx-auto mb-3" src="img/touch.svg"></img>
        </div>
      </div>
    </Carousel>
  );
}

// <div className="grid w-full grid-cols-12">
//   <div className="col-span-12 pb-3">
//     <Heading
//       language={language}
//       className={
//         "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center"
//       }
//       level={1}
//       text={{
//         en: "You can use three different controllers",
//         es: "Puedes usar tres controles differentes",
//       }}
//     ></Heading>
//   </div>
//   <div className="col-span-12 lg:col-span-6 xl:col-span-4">
//     <Heading
//       language={language}
//       className={
//         "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center"
//       }
//       level={1}
//       text={{
//         en: "Touch controls",
//         es: "Controles tactiles",
//       }}
//     ></Heading>
//     <img className="w-32 mx-auto" src="img/touch.svg"></img>
//   </div>
//   <div className="col-span-12 lg:col-span-6 xl:col-span-4">
//     <Heading
//       language={language}
//       className={
//         "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center"
//       }
//       level={1}
//       text={{
//         en: "On screen joysticks",
//         es: "Controles en pantalla",
//       }}
//     ></Heading>
//   </div>
//   <div className="col-span-12 lg:col-start-4 lg:col-span-6 xl:col-span-4">
//     <Heading
//       language={language}
//       className={
//         "text-white font-semibold drop-shadow-[0_0_5px_#fff] text-center"
//       }
//       level={1}
//       text={{
//         en: "Regular web browsing",
//         es: "Regular web browsing",
//       }}
//     ></Heading>
//   </div>
// </div>;
