import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


const Author = () => {
    const routeParams = useParams();
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/api/books/${routeParams.id}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (

        <div className="h-screen max-w-4xl mx-auto">
            <h1 className="text-white font-semibold text-5xl my-4">{books.length !== 0 && books[0].author}</h1>
            <div className="w-full grid grid-cols-4 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="shadow-md rounded-md bg-white">
                        <img className="rounded-t-md" src={`http://localhost:3000/books/${book.author}/${book.title}/cover.jpg`} alt="book cover" loading="lazy" />
                        <div className="p-2 flex flex-col">
                            <h4 className="text-xl">{book.title}</h4>
                        </div>
                        <Link to={`/reader/${book.id}`}><button>Read the Book</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Author