
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css";


import "../Styles/main-page-head-section.scss";
import "../Styles/main-page-second-section.scss";
import "../Styles/main-page-third-section.scss";
import '../Styles/main-page-courses-section.scss';
import '../Styles/main-page-photo-section.scss';
import '../Styles/main-page-calendar-section.scss';
import '../Styles/lesson-card.scss';
import '../Styles/media_rules-font-size.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
