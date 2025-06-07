import Button from "../../atoms/ui/Button";

export default function MenuButton({ text, onClick, className = "", animated = true }) {
  return (
    <Button
      className={`orbitron font-[600] ${animated ? "hover:scale-125" : ""} transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff] ${className}`}
      onClick={onClick}
      text={text}
    ></Button>
  );
}
