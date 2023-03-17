import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainContent />
      <CardsSection />
      <Footer />
      {/* <Card/> */}
    </div>
  );
}

export default App;
