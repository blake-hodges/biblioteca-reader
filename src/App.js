import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Navbar from './Navbar'
import Books from './Books'
import Reader from './Reader'
import Authors from './Authors'
import Author from './Author'
import Footer from './Footer'




const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/authors" element={ <Authors /> } />
                <Route path="/books" element={ <Books /> } />
                <Route path="/reader/:bookId" element={ <Reader /> } />
                <Route path="/author/:id" element={ <Author /> } />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
