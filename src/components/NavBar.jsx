import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="sticky w-full mx-auto rounded-b-xl top-0 z-10 bg-red-800 p-[10px]">
        <div className="flex justify-between items-center align-middle">
            <Link to='/' className="text-white text-xl font-bold">News Blog</Link>
            <ul className="flex">
                <li><Link className="text-black font-semibold bg-white px-2 py-1 rounded-lg hover:bg-yellow-600" to="/favourite">Favourite</Link></li>
            </ul>
        </div>
    </nav>
  );
}
