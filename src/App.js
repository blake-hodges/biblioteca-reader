import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.js'


const App = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/api/books")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBooks(data)
        })
    }, [])
    return (
        <div className="p-2">
            <Navbar />
            <div className="h-screen max-w-4xl mx-auto">
                <div className="w-full grid grid-cols-4 gap-4">
                    {books.map((book) => (
                        <div key={book.id} className="shadow-md rounded-md bg-white">
                            <img className="rounded-t-md" src={`http://localhost:3000/books/${book.author}/${book.title}/cover.jpg`} alt="book cover" />
                            <div className="p-2 flex flex-col">
                                <h4 className="text-xl">{book.title}</h4>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
