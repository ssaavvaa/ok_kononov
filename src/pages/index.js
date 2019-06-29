import React from "react";
import HeadSection from '../components/main-page-sections/head-section';
import SecondSection from '../components/main-page-sections/second-section';
import ThirdSection from '../components/main-page-sections/third-section';
import CoursesSection from '../components/main-page-sections/courses-section';
import PhotoSection from '../components/main-page-sections/photo-section';
import CalendarSection from '../components/main-page-sections/calendar-section';

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeadSection />
    <SecondSection />
    <ThirdSection />
    <CoursesSection />
    <PhotoSection />
    <CalendarSection />
  </Layout>
)

export default IndexPage;
