import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ReactReader } from 'react-reader'



const Reader = () => {
    const [bookData, setBookData] = useState(null)
    const routeParams = useParams()
    const [location, setLocation] = useState(0)
    const [selection, setSelection] = useState("nothing selected")
    const [translation, setTranslation] = useState("no translation yet")
    const [loading, setLoading] = useState(false)
    const renditionRef = useRef(null)
    const fetchTranslation = () => {
        //`/translate/${selection}`
        setTranslation("loading...")
        const translateURL = `http://localhost:5000/translate`
        fetch(translateURL, {
            method: "POST",
            body: JSON.stringify({
                q: "",
                source: "es",
                target: "en",
                format: "text"
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTranslation(data[0].en)
            })
        return
    }
    useEffect(() => {
        fetch(`/api/book/${routeParams.bookId}`)
            .then(res => res.json())
            .then(data => {
                setBookData(data)
            })
    }, [])
    useEffect(() => {
        if (renditionRef.current) {
            function setRenderSelection(cfiRange) {
                setSelection(renditionRef.current.getRange(cfiRange).toString())
            }
            renditionRef.current.on('selected', setRenderSelection)
            return () => {
                renditionRef.current.off('selected', setRenderSelection)
            }
        }
    }, [selection])
    return (
        <main>
            <div className="h-[100vh] relative mb-2">
                {bookData != null && <ReactReader
                    url={`/books/${bookData.author}/${bookData.title}/${bookData.title} - ${bookData.author}.epub`}
                    location={location}
                    locationChanged={(epubcfi) => setLocation(epubcfi)}
                    getRendition={rendition => {
                        renditionRef.current = rendition
                        renditionRef.current.themes.default({
                            '::selection': {
                                background: 'orange'
                            }
                        })
                        setSelection("")
                    }}
                />}
            </div>
            <div className="h-200px">
                <p className="text-white">Selected Text: {selection}</p>
                <p className="text-white">Translation: {translation}</p>
                <button onClick={fetchTranslation}>Translate</button>
            </div>
        </main>
    )
}






export default Reader