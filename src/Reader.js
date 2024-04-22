import React, { useState } from 'react'
import { ReactReader } from 'react-reader'


const Reader = () => {
    const [location, setLocation] = useState(0)
    return (
      <div style={{ height: '100vh' }}>
        <ReactReader
          url="https://react-reader.metabits.no/files/alice.epub"
          location={location}
          locationChanged={(epubcfi) => setLocation(epubcfi)}
        />
      </div>
    )
  }

  // var book = ePub("http://localhost:3000/books/Ernest Hemingway/El viejo y el mar/El viejo y el mar - Ernest Hemingway.epub");




export default Reader