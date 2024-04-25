import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("/api/books")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBooks(data)
        })
    }, [])
    return (
        <main className="flex flex-col min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="w-full grid grid-cols-4 gap-4">
                    {books.map((book) => (
                        <div key={book.id} className="shadow-md rounded-md bg-white">
                            {/* <img className="rounded-t-md" src={`http://localhost:3000/books/${book.author}/${book.title}/cover.jpg`} alt="book cover" loading="lazy" /> */}
                            <div className="p-2 flex flex-col">
                                <h4 className="text-xl">{book.title}</h4>
                                <p>{book.author}</p>
                            </div>
                            <Link to={`/reader/${book.id}`}><button>Read the Book</button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}




export default Books