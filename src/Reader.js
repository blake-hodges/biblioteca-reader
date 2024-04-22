import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ReactReader } from 'react-reader'


const Reader = () => {
    const [bookData, setBookData] = useState(null)
    const routeParams = useParams()
    const [location, setLocation] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:3000/api/book/${routeParams.bookId}`)
        .then(res => res.json())
        .then(data => {
            setBookData(data)
        })
    }, [])
    return (
      <div style={{ height: '100vh' }}>
        {bookData != null && <ReactReader
            url={`/books/${bookData.author}/${bookData.title}/${bookData.title} - ${bookData.author}.epub`}
            location={location}
            locationChanged={(epubcfi) => setLocation(epubcfi)}
        />}
      </div>
    )
  }






export default Reader