import { motion } from "framer-motion";
export default function SystemItem({ item }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: item.delay,
      }}
      className="flex items-center justify-start my-1"
    >
      <span className="inline-block mr-2 min-w-4 min-h-4 border-[1px] bg-amber-800 border-amber-400 opacity-40"></span>
      <p>{item.text}</p>
    </motion.div>
  );
}
