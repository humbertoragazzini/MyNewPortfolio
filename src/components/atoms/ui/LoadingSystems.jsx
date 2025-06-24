import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SystemItem from "./SystemItem";
import LiquidGlassDisplay from "./LiquidGlassDisplay";

const messages = [
  { text: "Initializing core systems...", delay: 0 },
  { text: "Power plant online.", delay: 1 },
  { text: "Main reactor stabilized.", delay: 2 },
  { text: "Life support systems nominal.", delay: 3 },
  { text: "Navigation systems calibrated.", delay: 4 },
  { text: "Starboard thrusters responsive.", delay: 5 },
  { text: "Portside stabilizers aligned.", delay: 6 },
  { text: "Communication array activated.", delay: 7 },
  { text: "Sensor grid fully operational.", delay: 8 },
  { text: "Artificial gravity engaged.", delay: 9 },
  { text: "Thermal regulators optimal.", delay: 10 },
  { text: "Flight control interface ready.", delay: 11 },
  { text: "Shields at 100% capacity.", delay: 12 },
  { text: "Weapon systems on standby.", delay: 13 },
  { text: "Cargo bay secured.", delay: 14 },
  { text: "Cryo-pods status: green.", delay: 15 },
  { text: "Environmental seal confirmed.", delay: 16 },
  { text: "Data uplink to command center successful.", delay: 17 },
  { text: "Captain’s interface online.", delay: 18 },
  { text: "All systems green. Ready for departure.", delay: 19 },
];

export default function LoadingSystems() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useLayoutEffect(() => {
    const checkSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        console.log(rect.width)
        console.log(rect.height)
        setWidth(rect.width);
        setHeight(rect.height);
      }
    };

    window.addEventListener('resize', checkSize);
    checkSize(); // Call initially

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full mt-2 pl-[86px] pr-[86px] pt-[15px] pb-[15px]">
      <LiquidGlassDisplay width={width} height={height} className={""}></LiquidGlassDisplay>
      <div className="rounded-4xl orbitron w-full h-full z-[9999] text-[rgba(255,255,255,1)] overflow-hidden">
        <motion.div
          initial={{
            y: "20%",
          }}
          animate={{
            y: "-50%",
          }}
          transition={{
            duration: 25,
          }}
        >
          {messages.map((item, index) => {
            return (
              <SystemItem key={index + "-systemitem"} item={item}></SystemItem>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
