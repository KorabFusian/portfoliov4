import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home">
        <p className="text-red-500">
          I'm making this by following the Gatsby Tutorial.
        </p>
        <StaticImage
          alt="Gangster Spongebob in a green suit holding money"
          src="https://i.redd.it/4732nuvn5hh61.jpg"
        />
      </Layout>
    </main>
  )
}
export default IndexPage
