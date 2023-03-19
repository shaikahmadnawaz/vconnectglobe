import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Home />
      {/* <MainContent /> */}
      <CardsSection />
      <Testimonials />
      <Footer />
      {/* <Card/> */}
    </div>
  );
}

export default App;
