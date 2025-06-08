import { useEffect, useState } from "react"

export default function Heading({ text, className, level, language }) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (language !== undefined) {
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
            {
                level == 2 &&
                <h2 className={`${className}`}>
                    {content && content}
                </h2>
            }
            {
                level == 3 &&
                <h3 className={`${className}`}>
                    {content && content}
                </h3>
            }
            {
                level == 4 &&
                <h4 className={`${className}`}>
                    {content && content}
                </h4>
            }
            {
                level == 5 &&
                <h5 className={`${className}`}>
                    {content && content}
                </h5>
            }
            {
                level == 6 &&
                <h6 className={`${className}`}>
                    {content && content}
                </h6>
            }
        </>
    )
}