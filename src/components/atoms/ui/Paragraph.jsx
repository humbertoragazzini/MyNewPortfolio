import { useEffect } from "react"

export default function Paragraph({ text, className }) {
    const [content, setContent] = useState(null);
    const { language } =
        useContext(AppContext);

    useEffect(() => {
        if (language == "en") {
            setContent(text[en])
        }
    }, [language])

    return (
        <p className={`${className}`}>
            {content && content}
        </p>
    )
}