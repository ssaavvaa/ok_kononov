
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from './NavBar';
import Header from "./header";
import Footer from './Footer';
import "./layout.scss";
import '../Styles/media_rules-font-size.scss';

import "../Styles/header.scss";
import "../Styles/main-page-second-section.scss";
import '../Styles/nav-bar.scss';
import '../Styles/courses.scss';
import '../Styles/main-page-photo-section.scss';
import '../Styles/calendar.scss';
import '../Styles/course-item.scss';
import '../Styles/blog-section.scss';
import '../Styles/blog-item.scss';
import '../Styles/subscribe-form.scss';
import '../Styles/product-promotion.scss';
import '../Styles/instructors-section.scss';
import '../Styles/contacts-section.scss';
import '../Styles/trainings_page.scss';
import '../Styles/Footer.scss';
import '../Styles/training_landing.scss';
import '../Styles/instructor_page.scss';
import '../Styles/feedbacks_page.scss';

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
      <NavBar />
        <main>
        {children}
        <Footer />
        </main>
       
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
