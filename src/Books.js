import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import BookCard from './BookCard'

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("/api/books")
        .then(res => res.json())
        .then(data => {
            setBooks(data)
        })
    }, [])
    return (
        <main className="flex flex-col min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {books.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))}
                </div>
            </div>
        </main>
    )
}




export default Books