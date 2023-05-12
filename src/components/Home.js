import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Mentors from "./Mentors";
import Footer from "./Footer";
import About from "./About";
import JoinTeam from "./JoinTeam";
import FlipBook from "./FlipBook.js";
import Testimonials from "./Testimonials";
import VisaInterviews from "./VisaInterviews";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FlipBook />
      <Mentors />
      <Testimonials/>

      <JoinTeam />
      <Footer />
    </>
  );
};

export default Home;
