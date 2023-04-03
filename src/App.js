import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mentors from "./components/Mentors";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import JoinTeam from "./components/JoinTeam";
import StudyAbroad from "./components/StudyAbroad";
function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <About /> 
      <StudyAbroad />
      <Mentors />
      <Testimonials />
      <JoinTeam/>
      <Footer />
    </main>
  );
}

export default App;
