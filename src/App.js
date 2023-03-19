import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import Mentors from "./components/Mentors";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Home />
      <Testimonials />
      <Mentors />
      <Footer />
    </div>
  );
}

export default App;
