import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 min-h-screen relative">
        <Navbar />
        <div className="content">
          <h1>{pageTitle}</h1>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
