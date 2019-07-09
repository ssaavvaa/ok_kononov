
import React, { useEffect }  from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import NavBar from './NavBar';
import Header from "./header";
import Footer from './Footer';
import $ from "jquery";
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
import '../Styles/blogs.scss';




const Layout = ({ children }) => {

  useEffect(() => {
    if($( document ).width() < 1024){
    window.addEventListener('scroll', function(){
      $("#blur_main").hide()
          $('.navbar').css({right:-195})
          $(".navToggler").css({right:"0px"})
          $(".aside_ul").hide()
    });
  }

    return () => {
      window.removeEventListener('scroll', function(){
      $("#blur_main").hide()
          $('.navbar').css({right:-195})
          $(".navToggler").css({right:"0px"})
    });
  };


  },[])

const slideNavBar = () => {
    const position = $('.navbar').css('right');

    $("body").click(function(e) {
        if(e.target.closest(".navbar") === null){
          $("#blur_main").hide()
          $('.navbar').css({right:-195})
          $(".navToggler").css({right:"0px"})
          $(".aside_ul").hide()
         }
      });
   if(position === "-195px"){
      $("#blur_main").show()
      $('.navbar').css({right:0})
      $(".navToggler").css({right:"196px"})
    }
    if(position === 0){
      
      $("#blur_main").hide()
      $('.navbar').css({right:-195})
}}


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
      <div id="blur_main"> </div>
      <button className ="navToggler" id="show_nav" onClick={slideNavBar} ><i className="fas fa-bars"></i></button>
        <main >
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
