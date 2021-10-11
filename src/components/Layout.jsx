import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 min-h-screen relative pb-28 pt-24">
        <Navbar />
        <div className="p-5 shadow-md bg-white rounded-lg container mx-auto">
          <h1>{pageTitle}</h1>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
