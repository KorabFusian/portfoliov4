import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg">
      <Navbar />
      <div className="content">
        <h1>{pageTitle}</h1>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
