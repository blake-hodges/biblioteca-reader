import React, { useEffect, useState } from 'react'



const Authors = () => {
    const [authorsData, setAuthorsData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/api/authors")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAuthorsData(data)
        })
    }, [])
    return (
        <main>
            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4  py-2">
                            <h2 className="text-4xl font-semibold text-gray-600">
                                Authors
                            </h2>
                            <p className="text-lg leading-relaxed m-4 text-gray-600">
                                Explore all of our authors below.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        {authorsData.map(author => (
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4" key={author.id}>
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold  text-gray-500">
                                            {author["full name"]}
                                        </h5>
                                        <div className="mt-6">
                                            <button className="bg-[#00df9a] text-white p-2 rounded-md">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Authors