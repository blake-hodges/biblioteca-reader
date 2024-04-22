import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">Biblioteca Reader</h1>
            <ul className="hidden md:flex">
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/books">Books</Link></li>
                <li className="p-4"><Link to="/authors">Authors</Link></li>
                <li className="p-4"><Link to="/reader">Reader</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden pr-2">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
            </div>
            <ul className={nav ? "fixed left-0 top-0 w-[70%] h-full bg-[#000300] border-r border-r-gray-900" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">Biblioteca Reader</h1>
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/books">Books</Link></li>
                <li className="p-4"><Link to="/authors">Authors</Link></li>
                <li className="p-4"><Link to="/reader">Reader</Link></li>
            </ul>
        </div>
    )
}