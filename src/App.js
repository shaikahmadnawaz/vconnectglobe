import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Mentors from "./components/Mentors";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      {/* <MainContent /> */}
      <Mentors />
      <Footer />
    </div>
  );
}

export default App;
