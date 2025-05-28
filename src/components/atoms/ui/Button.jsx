import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../../context/AppContext";

export default function Button({ text, onClick, className }) {
    const [content, setContent] = useState(null);
    const { language } =
        useContext(AppContext);

    useEffect(() => {
        setContent(text[language])
    }, [language])

    return (
        <button className={`${className}`} onClick={(e) => { onClick() }}>
            {content && content}
        </button>
    )
}