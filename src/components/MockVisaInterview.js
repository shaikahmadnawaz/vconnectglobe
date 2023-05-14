import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";
import { useState } from "react";
import { visaInterviewMentors } from "../Data/visaInterviewMentorsData";
import { TbPointFilled } from "react-icons/tb";
import { data } from "../Data/visaInterviewData";

export const MockVisaInterview = () => {
  const [active, setActive] = useState({
    "heading-1": true,
    "heading-2": false,
    "heading-3": false,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const [content, setContent] = useState(data[1]);
  const handleClick = (number) => {
    if (!active[`heading-${number}`]) {
      const newActive = {
        "heading-1": false,
        "heading-2": false,
        "heading-3": false,
      };
      newActive[`heading-${number}`] = true;
      setActive(newActive);
      setContent(data[number]);
    }
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* About Mock Visa Interviews */}
      <div className="flex flex-col justify-between bg-white rounded-lg">
        <div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Nail the <span className="text-red-700 font-bold">toughest</span>{" "}
            <br /> USA Visa interviews
          </h2>
          <p className="mt-4 text-lg">
            Get ready for your USA visa interview with our mock interview
            service. Practice with{" "}
            <span className="font-semibold">experienced professionals</span> and
            increase your chances of success.
          </p>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex justify-start text-base">
            <p
              onClick={() => handleClick(1)}
              className={`cursor-pointer px-2 py-3 text-sm md:text-lg mr-8 border-2 rounded ${
                active["heading-1"] ? "border-red-400" : "border-gray-300"
              }`}
            >
              Heading-1
            </p>
            <p
              onClick={() => handleClick(2)}
              className={`cursor-pointer px-2 py-3 text-sm md:text-lg border-2 rounded ${
                active["heading-2"] ? "border-red-400" : "border-gray-300"
              }`}
            >
              Heading-2
            </p>
            <p
              onClick={() => handleClick(3)}
              className={`cursor-pointer px-2 py-3 text-sm md:text-lg ml-8 border-2 rounded ${
                active["heading-3"] ? "border-red-400" : "border-gray-300"
              }`}
            >
              Heading-3
            </p>
          </div>
          <div className="mt-6">
            {content.map((point, index) => (
              <div key={index} className="flex items-start mb-3">
                <div className="w-6 h-6 mr-3 mt-1 text-blue-600">
                  <TbPointFilled />
                </div>
                <div>
                  <span className="font-medium text-sm lg:text-base">
                    {point}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-center mt-2">
          <a
            href="https://vconnectglobe.com/community"
            target="_blank"
            rel="noreferrer"
            className="focus:outline-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 text-lg mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 text-white font-medium rounded-md px-4 py-2 text-center inline-block hover:scale-105 ease-in-out duration-300"
          >
            Register now
          </a>
        </div>
      </div>

      {/* Displaying mentors div */}
      <div className="flex flex-col justify-center">
        <Slider {...settings}>
          {visaInterviewMentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl duration-500 m-5"
            >
              <div className="flex justify-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-52 h-52 object-cover rounded-full mt-4"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                <p className="text-gray-700 text-base mb-2">
                  {mentor.education}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  {mentor.university}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {mentor.languages}
                </p>
                <div className="flex items-center">
                  <div className="text-gray-700 text-sm">
                    <StarRating
                      rating={mentor.rating}
                      count={mentor.studentsCount}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
