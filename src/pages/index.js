import React from "react";
import HeadSection from '../components/main-page-sections/header';
import SecondSection from '../components/main-page-sections/second-section';
import CoursesSection from '../components/main-page-sections/trainings-section';
import PhotoSection from '../components/main-page-sections/photo-section';
import BlogSection from '../components/main-page-sections/blog-section';
import Subscribe from '../components/main-page-sections/subscribe';
import ProductPromotion from '../components/main-page-sections/product-promotion';
import InstructorsSection from '../components/main-page-sections/instructors_section';
import Contacts from '../components/main-page-sections/contacts';
import Layout from "../components/layout";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

import SEO from "../components/seo";



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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ScrollUpButton style={scroll_button} />
    <HeadSection />
     <SecondSection />
    <CoursesSection />
    <ProductPromotion />
    <PhotoSection />
    <BlogSection />
    <Subscribe />
    <InstructorsSection />
    <Contacts />
 
  </Layout>
)



export default IndexPage;
