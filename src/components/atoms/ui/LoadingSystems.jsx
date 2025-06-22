import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import SystemItem from "./SystemItem";

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
  useLayoutEffect(() => {}, []);

  return (
    <div className="h-[200px] m-2 bg-[rgba(0,0,0,0.55)] rounded-2xl orbitron fixed w-[280px] top-0 left-0 z-[9999] p-3 text-[rgba(255,255,255,1)] overflow-hidden">
      <div>
        {messages.map((item, index) => {
          return (
            <SystemItem key={index + "-systemitem"} item={item}></SystemItem>
          );
        })}
      </div>
    </div>
  );
}
