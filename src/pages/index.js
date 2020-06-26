import React from "react"

import Home from "../components/home.js"
import About from "../components/about.js"
import Contact from "../components/contact.js"
import Skills from "../components/skills.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
      <About />
      <Skills />
      <Contact />
    </Layout>
  )
}

export default IndexPage
