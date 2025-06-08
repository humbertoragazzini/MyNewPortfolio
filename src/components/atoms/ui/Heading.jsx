import { useEffect } from "react"

export default function Heading({ text, className, level }) {
    const [content, setContent] = useState(null);
    const { language } =
        useContext(AppContext);

    useEffect(() => {
        if (language == "en") {
            setContent(text[language])
        }
    }, [language])

    return (
        <>
            {
                level == 1 &&
                <h1 className={`${className}`}>
                    {content && content}
                </h1>
            }
        </>
    )
}