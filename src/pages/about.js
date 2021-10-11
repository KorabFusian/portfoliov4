import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <StaticImage alt="me" src="../images/postureo.jpg" />
      <p>Hi there! I'm Jeremi Friggit.</p>
    </Layout>
  )
}

export default AboutPage
