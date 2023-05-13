import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import HeroImage1 from "../assets/study-abroad.png";
import HeroImage3 from "../assets/visa.png";
import community from "../assets/community.png";
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
    image: HeroImage3,
    backgroundColor: "from-green-400 to-green-500", // Add background color
  },
  {
    title: "Join our growing Community",
    description:
      "Joining our community can be a valuable resource for anyone interested in studying abroad. You'll have the opportunity to ask questions, share your concerns, and connect with others who have already gone through the process. ",
    buttonText: "Join Now",
    buttonLink: "https://vconnectglobe.com/community/",
    image: community,
    backgroundColor: "from-purple-400 to-purple-500", // Add background color
  },
  // Add more hero sections as needed
];

function Hero() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveHeroIndex(
      (prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length
    );
  };

  const handleNext = () => {
    setActiveHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  };

  const { title, description, buttonText, buttonLink, image, backgroundColor } =
    heroData[activeHeroIndex];

  return (
    <section
      className={`flex w-full h-screen flex-wrap bg-gradient-to-r ${backgroundColor} mx-auto mt-0 md:pt-12 md:px-14`}
    >
      <div className="flex">
        {/* <button className="arrow prev" onClick={handlePrev}>
          <BsArrowLeft className="bg-white ml-2 w-5 md:w-8 md:h-6 rounded-xl" />
        </button> */}
        <div className="flex flex-col md:flex-row mx-8 h-screen">
          <div className="flex h-full mt-10 md:mt-0 items-center justify-center flex-col w-full md:w-1/2">
            <div
              id="home"
              className="container flex justify-center items-center flex-col text-center mx-auto lg:py-40 lg:px-32 md:pt-24 px-4"
            >
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-white mb-4">
                {title}
              </h1>
              <p className="text-sm md:text-lg text-white mb-6">
                {description}
              </p>
              <a
                href={buttonLink}
                onClick={handleScroll}
                className="bg-white text-black text-md md:text-xl py-1 md:py-2 px-1 md:px-3 rounded-lg md:rounded-xl font-medium hover:bg-black hover:text-white transition-all duration-300"
              >
                {buttonText}
              </a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center md:w-1/2 md:py-24">
            <img
              src={image}
              className="w-80 md:w-full mb-10"
              alt="abroad study mentorship"
            />
          </div>
        </div>
        <button className="arrow next inline" onClick={handleNext}>
          <BsArrowRight className="bg-white mr-2 w-5 md:w-8 md:h-6 rounded-xl" />
        </button>
      </div>
    </section>
  );
}

export default Hero;