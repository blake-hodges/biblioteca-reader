import React from 'react';
import { Link } from 'react-router-dom';

const AuthorCard = (props) => {
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 py-4 overflow-hidden shadow-lg flex flex-col justify-between grow">
            <div className="flex flex-column justify-center">
                <img
                    alt={`${props.authorName} portrait`}
                    src={props.imgUrl}
                    className="w-full h-48 object-cover object-top rounded-3xl"
                    style={{ maxWidth: "200px" }}
                />
            </div>
            <div className="text-center flex flex-col">
                <h5 className="text-xl font-bold text-gray-500 py-2">
                    {props.authorName}
                </h5>
                <p className="text-xs text-gray-500 py-1 max-w-[200px] mx-auto">
                    <strong>Popular Works:</strong> {props.works}
                </p>
                <div className="mt-4 mb-2">
                    <Link to={`/author/${props.authorId}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard;