import Button from "../../atoms/ui/Button"

export default function MenuButton({ text, onClick }) {
    return (
        <Button className="p-5 m-3 text-6xl font-bold text-white hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white drop-shadow-[0_0_5px_#fff]" onClick={onClick} text={text} ></Button >
    )
}