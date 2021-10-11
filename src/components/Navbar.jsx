import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white uppercase font-thin p-5 fixed top-0 w-screen z-50">
      <ul className="flex flex-row items-start gap-4 ">
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="pl-4">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
