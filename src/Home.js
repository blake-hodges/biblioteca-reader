import React from 'react';
import { FaFingerprint } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import AuthorCard from "./AuthorCard";
import ContactForm from "./ContactForm";


const Home = () => {
    return (
        <main  className="flex flex-col min-h-screen">
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                    minHeight: "75vh"
                }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    Learn Spanish by reading.
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>


            <section className="relative py-20">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: "80px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-white fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>

                <div className="container mx-auto px-4">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                            <img
                                alt="reading a book"
                                className="max-w-full rounded-lg shadow-lg"
                                src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-gray-600">
                                    Immersive content
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Reading is one of the best ways to learn a new language.
                                </p>
                                <ul className="list-none mt-6">
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <span className="text-xs font-semibold inline-block p-2 uppercase rounded-full text-white bg-[#00df9a] mr-3">
                                                    <IoBookSharp />
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-600">
                                                    Immerse yourself in  interesting books and stories
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <span className="text-xs font-semibold inline-block p-2 uppercase rounded-full text-white bg-[#00df9a] mr-3">
                                                    <FaBrain />
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-600">Build vocabulary in a fun and natural way</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <span className="text-xs font-semibold inline-block p-2 uppercase rounded-full text-white bg-[#00df9a] mr-3">
                                                    <BiHappy />
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-600">Learn grammar rules intuitively</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold text-gray-600">
                                Here are some of our most popular authors.
                            </h2>
                            <p className="text-lg leading-relaxed m-4 text-gray-600">
                                Click to see the books available for each author.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <AuthorCard
                            authorName="Ernest Hemingway"
                            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/800px-ErnestHemingway.jpg"
                            works="The Old Man and the Sea, A Farewell to Arms, For Whom the Bell Tolls"
                            authorId={8}
                        />
                        <AuthorCard
                            authorName="Alexandre Dumas"
                            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alexander_Dumas_p%C3%A8re_par_Nadar_-_Google_Art_Project.jpg/800px-Alexander_Dumas_p%C3%A8re_par_Nadar_-_Google_Art_Project.jpg"
                            works="The Count of Montecristo, The Three Muskeeteers, The Man in the Iron Mask"
                            authorId={1}
                        />
                        <AuthorCard
                            authorName="Jane Austen"
                            imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/1b/Jane_Austen.jpg"
                            works="Pride and Prejudice, Sense and Sensibility, Emma"
                            authorId={27}
                        />
                        <AuthorCard
                            authorName="Charles Dickens"
                            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/800px-Dickens_Gurney_head.jpg"
                            works="Great Expectations, A Tale of Two Cities, Oliver Twist"
                            authorId={6}
                        />
                    </div>
                </div>
            </section>

            <section className="pb-20 relative hidden md:block">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: "80px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-900 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                    
                    
                </div>
            </section>
            <section className="relative block py-24 lg:pt-0">
                <ContactForm />
            </section>
        </main>
    )
}

export default Home