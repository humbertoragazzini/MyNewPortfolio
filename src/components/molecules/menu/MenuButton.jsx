import Button from "../../atoms/ui/Button";

export default function MenuButton({ text, onClick }) {
  return (
    <Button
      className="p-3 lg:p-5 lg:m-3 text-3xl md:text-4xl xl:text-6xl orbitron font-[600] hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]"
      onClick={onClick}
      text={text}
    ></Button>
  );
}
