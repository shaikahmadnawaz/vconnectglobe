import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mentors from "./components/Mentors";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <About />
      <Mentors />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
