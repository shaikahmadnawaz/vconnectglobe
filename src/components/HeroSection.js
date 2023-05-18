import React from "react";
import { heroData } from "../Data/heroData";
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
    <div className="overflow-x-hidden mt-8 md:mt-14 h-[95vh]">
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
              key={title}
              className={`flex w-full h-full justify-center items-center bg-gradient-to-r ${backgroundColor} mx-auto px-4 md:px-8 lg:px-12`}
            >
              <div className="flex flex-col md:flex-row h-full mx-4 md:mx-8">
                <div className="flex h-full items-center justify-start flex-col w-full py-12 px-4 md:px-20 md:py-32 md:w-1/2">
                  <div className="container mx-auto text-center lg:text-left">
                    <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4">
                      {title}
                    </h1>
                    <p className="text-md md:text-xl lg:text-xl text-white mb-6">
                      {description}
                    </p>
                    <a
                      href={buttonLink}
                      onClick={handleScroll}
                      className="bg-white text-black text-md lg:text-xl py-1 md:py-2 px-2 md:px-3 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {buttonText}
                    </a>
                  </div>
                </div>
                <div className="flex items-center px-10 justify-center w-full pb-5 md:pb-0 md:w-1/2">
                  <img
                    src={image}
                    className="w-full h-auto max-h-96"
                    alt="abroad study mentorship"
                  />
                </div>
              </div>
            </section>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSection;
