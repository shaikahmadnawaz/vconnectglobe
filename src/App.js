import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      {/* <MainContent /> */}
      <CardsSection />
      <Footer />
      {/* <Card/> */}
    </div>
  );
}

export default App;
