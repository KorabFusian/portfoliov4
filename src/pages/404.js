import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <p>Sorry, couldn't find what you were looking for 😅</p>
      <Link to="/" class="text-blue-700">
        Go home
      </Link>
      .
    </Layout>
  )
}

export default NotFoundPage
