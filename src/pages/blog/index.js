import React from "react";
import { graphql } from "gatsby";
import {  Link } from '@reach/router';
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { prefix } from '../../components/helpers';
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



export default function Blogs({data }) {

  const {allMarkdownRemark} = data;

  return (
      <Layout>
          <SEO title="blogs"/>
          <ScrollUpButton style={scroll_button} />
          <div className ="container blogs-container">
            <h1>Oleksiy Kononov Blog</h1>
        <ul className="blogs_ul_container">
            {allMarkdownRemark.edges.map(x => (
            <li key = {x.node.id} className = "blog_wrapper">
            <h3>{x.node.frontmatter.title}</h3>
            <p>{x.node.frontmatter.date}</p>
            <div className="blog-content"
           dangerouslySetInnerHTML={{ __html: x.node.html }}
        />
    <Link to ={`${prefix}${x.node.frontmatter.path}`} style={{}} >view article</Link>
    </li>
    ))}
</ul>

</div>

</Layout>
  )
}




export const blogQuery = graphql`
  query{
    allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
  }
`

