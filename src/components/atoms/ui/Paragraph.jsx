import { useEffect, useState } from "react"

export default function Paragraph({ text, className, language }) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (language !== undefined) {
            setContent(text[language])
        }
    }, [language])

    return (
        <p className={`${className}`} dangerouslySetInnerHTML={{ __html: content }}>
        </p>
    )
}