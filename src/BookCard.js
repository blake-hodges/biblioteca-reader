import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = (props) => {
    return (
        <div className="shadow-md rounded-md bg-white flex flex-col justify-between">
            <img className="rounded-t-md" src={`/books/${props.book.author}/${props.book.title}/cover.jpg`} alt={`${props.book.title} cover`} loading="lazy" />
            <div className="p-2 flex flex-col">
                <h4 className="text-xl">{props.book.title}</h4>
                <p>{props.book.author}</p>
            </div>
            <Link to={`/reader/${props.book.id}`}><button className="m-2">Read the Book</button></Link>
        </div>
    )
}

export default BookCard