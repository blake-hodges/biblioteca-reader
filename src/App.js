import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Navbar from './Navbar'
import Books from './Books'
import Reader from './Reader'
import Authors from './Authors'
import Author from './Author'




const App = () => {
    return (
        <div className="p-2">
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/authors" element={ <Authors /> } />
                <Route path="/books" element={ <Books /> } />
                <Route path="/reader" element={ <Reader /> } />
                <Route path="/author/:id" element={ <Author /> } />
            </Routes>
        </div>
    )
}

export default App
