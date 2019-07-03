import React from "react";
import HeadSection from '../components/main-page-sections/header';
import SecondSection from '../components/main-page-sections/second-section';
import CoursesSection from '../components/main-page-sections/courses-section';
import PhotoSection from '../components/main-page-sections/photo-section';
import CalendarSection from '../components/main-page-sections/calendar-section';
import BlogSection from '../components/main-page-sections/blog-section';
import Subscribe from '../components/main-page-sections/subscribe';
import ProductPromotion from '../components/main-page-sections/product-promotion';
import InstructorsSection from '../components/main-page-sections/instructors_section';
import Contacts from '../components/main-page-sections/contacts';
import Layout from "../components/layout";


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeadSection />
     <SecondSection />
    <CoursesSection />
    <ProductPromotion />
    <PhotoSection />
    <CalendarSection />
    <BlogSection />
    <Subscribe />
    <InstructorsSection />
    <Contacts />
 
  </Layout>
)



export default IndexPage;
