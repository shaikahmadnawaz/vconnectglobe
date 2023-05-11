import React, { useState, useEffect } from "react";
import HeroImage1 from "../assets/study-abroad.png";
import HeroImage2 from "../assets/virtual-assistant.svg";
import { handleScroll } from "./utils/handleScroll";

const heroData = [
  {
    title: "1-2-1 Mentorship for Study Abroad",
    description:
      "Avail the personalised mentorship on all the aspects of studying abroad by knowledgeable and passionate mentors, who are eager to share their wisdom and experience with you!",
    buttonText: "Meet our Mentors",
    buttonLink: "#mentors",
    image: HeroImage1,
    backgroundColor: "from-blue-500 to-cyan-500", // Add background color
  },
  {
    title: "Unlimited Mock Interviews for Visa",
    description:
      "These mock interviews simulate the real visa interview experience and provide an opportunity for applicants to familiarize themselves with the process, improve their communication skills, and gain confidence!",
    buttonText: "Meet our Interviewers",
    buttonLink: "#Interview",
    image: HeroImage2,
    backgroundColor: "from-green-400 to-green-600", // Add background color
  },
  // Add more hero sections as needed
];

function Hero() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const { title, description, buttonText, buttonLink, image, backgroundColor } =
    heroData[activeHeroIndex];

  return (
    <section
      className={`flex w-full flex-wrap bg-gradient-to-r ${backgroundColor} h-full mx-auto mt-0 pt-12 md:px-14`}
    >
      <div className="w-full md:w-1/2">
        <div
          id="home"
          className="container flex justify-center items-center flex-col text-center mx-auto lg:py-40 lg:px-32 pt-24 px-4"
        >
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white mb-6">{description}</p>
          <a
            href={buttonLink}
            onClick={handleScroll}
            className="bg-white text-black text-xl py-2 px-3 rounded-xl font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 py-24">
        <div className="container ml-0 px-4">
          <img src={image} alt="abroad study mentorship" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
