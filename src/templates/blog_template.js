import React from "react"
import { graphql } from "gatsby"
import KononovBottomBlog from '../templates/kononov_bottom_blog';
import SEO from "../components/seo";
import Layout from "../components/layout";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";


const scroll_button = {
  width:'55px',
  height:'55px',
  padding:"4px",
  focus:'none',
  outline:'none',
  border:'0px',
  boxShadow:'0px 0px 2px 2px black',
  zIndex:100
}





export default function Template({data}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <SEO title={frontmatter.title}/>
    <ScrollUpButton style={scroll_button} />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.date}</h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <KononovBottomBlog />
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path:String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
      }
    }
  }
`