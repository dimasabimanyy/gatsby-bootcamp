import { Link } from "gatsby"
import React from "react"

import Footer from "../components/footer"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I'm a software engineer in indonesia.</p>
      <p>
        You can contact me here <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
