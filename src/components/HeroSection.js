import React from "react";

import {heroData} from "../Data/heroData";
import { handleScroll } from "./utils/handleScroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
        <Slider {...settings}>
      {heroData.map((item) => {
        const {
          title,
          description,
          buttonText,
          buttonLink,
          image,
          backgroundColor,
        } = item;
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
              {/* <button className="arrow next inline" onClick={handleNext}>
                <BsArrowRight className="bg-white mr-2 w-5 md:w-8 md:h-6 rounded-xl" />
              </button> */}
            </div>
          </section>
        );
      })}
      </Slider>
    </section>
  );
};

export default HeroSection;
