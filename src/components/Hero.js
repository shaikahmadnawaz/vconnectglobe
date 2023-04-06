import React from "react";
import HeroImage from "../assets/study-abroad.png";
import { handleScroll } from "./utils/handleScroll";

function Hero() {
  return (
    <section className="flex w-full flex-wrap bg-gradient-to-r from-blue-500 to-cyan-500 h-full mx-auto mt-0 pt-12 md:px-14">
      <div className="w-full md:w-1/2">
        <div
          id="home"
          className="container flex justify-center items-center flex-col text-center mx-auto lg:py-40 lg:px-32 pt-24 px-4"
        >
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-white mb-4">
          1-2-1 Mentorship for Study abroad 
          </h1>
         
          <p className="text-lg text-white mb-6">
          Avail the personalised mentorship on all the aspects of studying abroad by knowledgeable and passionate mentors, who are eager to share their wisdom and experience with you! 
          </p>
          <a
            href="#mentors"
            onClick={handleScroll}
            className="bg-white text-black text-xl py-2 px-3 rounded-xl font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Meet our Mentors 
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 py-24">
        <div className="container ml-0 px-4">
          <img src={HeroImage} alt="abroad study mentorship" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
