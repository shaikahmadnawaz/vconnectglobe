import React from "react";
import HeroImage from "../assets/study-abroad.png";

function Hero() {
  return (
    <section className="flex w-full flex-wrap bg-gradient-to-r from-blue-500 to-cyan-500 h-full mx-auto mt-0 pt-12">
      <div className="w-full md:w-1/2">
        <div className="container flex justify-center items-center flex-col text-center mx-auto lg:p-40 pt-24 px-4">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-semibold text-white mb-4">
            Learn and grow with help from mentors
          </h1>
          <p className="text-lg text-white mb-4">
            Book and meet mentors for 1:1 mentorship in our global community.
          </p>
          <p className="text-lg text-white mb-8">
            Your next chapter, made possible with mentorship.
          </p>
          <a
            href="#"
            className="bg-white text-black text-xl py-2 px-3 rounded-xl font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Our Mentors
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
