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
import HeroSection from "./HeroSection";
import CommunitySection from "./CommunitySection";
import { MockVisaInterview } from "./MockVisaInterview";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <FlipBook />
      <Mentors />
      <Testimonials />
      <MockVisaInterview />
      {/* <VisaInterviews/> */}
      <CommunitySection />
      <Footer />
    </>
  );
};

export default Home;
