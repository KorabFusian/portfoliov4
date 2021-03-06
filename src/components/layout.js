import { Link } from 'gatsby'
import React from 'react'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="p-10">
      <title>{pageTitle} </title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
