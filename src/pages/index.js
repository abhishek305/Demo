import React from "react"
import { Link,useStaticQuery,graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
const data=useStaticQuery(graphql`query{
  allContentstackDemo{
    edges{
      node{
        title,
        description,
        heading
        }
      }
    }
  }
`)



return(
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>{data.allContentstackDemo.edges.map((i)=>
    i.node.heading) }</p>
    <p>{data.allContentstackDemo.edges.map((i)=>
    i.node.description) }</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
}

export default IndexPage
