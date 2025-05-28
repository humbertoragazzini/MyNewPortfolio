import { useEffect } from "react"

export default function Paragraph({ text, onClick, className }) {
    const [content, setContent] = useState(null);
    const { language } =
        useContext(AppContext);

    useEffect(() => {
        if (language == "en") {
            setContent(text[en])
        }
    }, [language])

    return (
        <button className={`${className}`} onClick={() => { onClick }}>
            {content && content}
        </button>
    )
}