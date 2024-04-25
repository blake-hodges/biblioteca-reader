import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BookCard from './BookCard'


const Author = () => {
    const routeParams = useParams();
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(`/api/books/${routeParams.id}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (

        <div className="max-w-4xl mx-auto min-h-screen pb-4 px-6">
            <h1 className="text-white font-semibold text-5xl my-6">{books.length !== 0 && books[0].author}</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {books.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </div>
    )
}

export default Author