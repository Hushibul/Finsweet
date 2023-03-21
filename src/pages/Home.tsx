import React from "react";
import Aboutus from "../components/about-us/Aboutus";
import Authors from "../components/authors/Authors";
import Categories from "../components/categories/Categories";
import FeaturedPost from "../components/featured-posts/FeaturedPost";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import JoinTeam from "../components/join-team/JoinTeam";
import OurPassion from "../components/our-passion/OurPassion";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedPost />
      <Aboutus />
      <Categories />
      <OurPassion />
      <Authors />
      <Testimonials />
      <JoinTeam />
      <Footer />
    </div>
  );
};

export default Home;
