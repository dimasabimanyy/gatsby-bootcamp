import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const indexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm dimas, a full stack developer.</h2>
      <p>
        Need a developer ? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>

    // return (
    //   <div>
    //     <Header />
    //     <h1>Hello.</h1>
    //     <h2>I'm dimas, a full stack developer.</h2>
    //     <p>
    //       Need a developer ? <Link to="/contact">Contact me.</Link>
    //     </p>
    //     <Footer />
    //   </div>
  )
}

export default indexPage
