import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import { data } from "../Data/visaInterviewData";
import VI from "../assets/VI.png";

export const MockVisaInterview = () => {
  const [active, setActive] = useState({
    "heading-1": true,
    "heading-2": false,
    "heading-3": false,
  });

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
    <section
      className="flex flex-col md:flex-row px-6 md:px-16 md:pb-3"
      id="interviews"
    >
      {/* About Mock Visa Interviews */}
      <div className="flex flex-col justify-between md:w-1/2 bg-white rounded-lg">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            Nail the <span className="text-red-700 font-bold">toughest</span>{" "}
            <br /> USA Visa interviews
          </h2>
          <p className="mt-4 text-md">
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
              className={`cursor-pointer px-2 py-3 text-sm md:text-lg md:mr-8 border-2 rounded ${
                active["heading-1"] ? "border-red-400" : "border-gray-300"
              }`}
            >
              What we offer
            </p>
            <p
              onClick={() => handleClick(2)}
              className={`cursor-pointer px-2 py-3 text-sm mx-2 md:mx-0 md:text-lg border-2 rounded ${
                active["heading-2"] ? "border-red-400" : "border-gray-300"
              }`}
            >
              Why choose us
            </p>
          </div>
          <div className="mt-6">
            {content.map((point, index) => (
              <div key={index} className="flex items-start mb-1 md:mb-3">
                <div className="w-6 h-6 mr-3 mt-1 text-blue-600">
                  <TbPointFilled />
                </div>
                <div>
                  <span className="font-small text-sm lg:text-base">
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
            className="focus:outline-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 text-lg mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 text-white font-medium rounded-md px-3  py-2 md:px-4 md:py-2 text-center inline-block hover:scale-105 ease-in-out duration-300"
          >
            Register now
          </a>
        </div>
      </div>

      <div className="flex items-center px-10 justify-center w-full md:w-1/2">
        <img
          src={VI}
          className="w-full h-[20rem] md:h-[30rem]"
          alt="Visa Interview"
        />
      </div>
    </section>
  );
};
