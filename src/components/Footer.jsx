import React from 'react'
import { IconContext } from 'react-icons'
import { FaSpotify, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 mt-4 p-8 w-full bg-black text-3xl flex gap-4 justify-center">
      <IconContext.Provider
        value={{ className: 'hover:text-gray-400 text-gray-600' }}>
        <a href="https://github.com">
          <FaGithubSquare />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://spotify.com">
          <FaSpotify />
        </a>
        <a href="mailto:jeremifk@gmail.com">
          <IoMdMail />
        </a>
      </IconContext.Provider>
    </div>
  )
}

export default Footer
