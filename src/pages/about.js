import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div class="flex flex-row mt-6">
        <StaticImage alt="a picture of me!" src="../images/postureov2.jpg" />
        <div class="ml-6">
          <h2>Hi there! I'm Jeremi Friggit.</h2>
          <h3>...but you probably got that by now.</h3>
          <p>
            I'm a new software engineer who studied at the digital engineering
            school Efrei Paris, majoring in Image, 3D and Virtual Reality.
          </p>
          <br />
          <h2>Some fun facts about me:</h2>
          <ul>
            <li>
              <h3>- I like music. A lot. </h3>I like listening to (almost) all
              types of music, but mostly creating it. I play the piano, the sax
              and the bass, and I'm learning guitar and drums. I also produce on
              several DAWs (mostly Ableton and MASCHINE), and I have released
              some tracks on Spotify.
            </li>
            <li>
              <h3>- I speak 3 languages.</h3>I am fluent in French, English and
              Spanish. That's because I was born in London (where I lived until
              I was 6) and raised in Madrid, where I lived for 11 years. I am
              also currently learning Japanese.
            </li>
            <li>
              <h3>- I've been in love with VFX for over 10 years.</h3>I started
              making videos on iMovie when I was 8. When I was 11, I started
              actually making VFX in Adobe After Effects, and that's what got me
              into 3D, which is now what I'm majoring in.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
