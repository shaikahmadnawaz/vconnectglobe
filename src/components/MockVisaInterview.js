import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";
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
const visaInterviewMentors = [
    {
      name: "Mr.Kowshik",
      university: "University of North Texas, (TX)",
      education: "Business Analytics",
      image: "./mentors/kowshik.jpg",
      studentsCount: 9,
      rating: 4.5,
      languages: "Telugu/English/Hindi",
      state: "Texas(TX)",
      country: "USA",
      appointmentLink: "https://vconnectglobe.com/booking/kowshik-gondala/",
    },{
      name: "Mr.Akheel",
      university: "Illinois Institute of Technology, (IL)",
      education: "Construction Management",
      image: "./mentors/akheel.jpg",
      studentsCount: 10,
      rating: 4.5,
      languages: "English/Hindi",
      state: "IIIinois(IL)",
      country: "USA",
      appointmentLink: "https://vconnectglobe.com/booking/akheel-abbas/",
    },
  ]
export const MockVisaInterview = () => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 sm:p-5">
      {/* ABout Mock Visa Interviews */}
      <div className="flex gap-y-4 flex-col p-10">
        <h2 className="text-5xl font-semibold leading-snug lg:leading-relaxed">
          Nail the <span className="text-red-700 font-bold">toughest</span>
          <span className="block"> US Visa interviews</span>
        </h2>
        {/* <p className="text-lg">
          Get ready for your US visa interview with our mock interview service.
          Practice with
          <span className="block">
            <span className="font-semibold">experienced professionals</span> and
            increase your chances of success.
          </span>
        </p> */}
				<div className="flex flex-row sm:gap-x-8 justify-around p-2">
					<p>Heading-1</p>
					<p>Heading-2</p>
					<p>Heading-3</p>
				</div>
        <div>
          <p>{}</p>
        </div>
        <div className="flex justify-center items-center mt-10">
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
      <div className="">
        <Slider {...settings}>
        {visaInterviewMentors.map((mentor, index) => {
          return (
            <div
              key={index}
              className="bg-slate-100 rounded-lg shadow-lg hover:scale-105 duration-500 m-5 scale-90"
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
                <div className="flex items-center flex-row">
                  <div className="text-gray-700 text-sm">
                    <StarRating
                      rating={mentor.rating}
                      count={mentor.studentsCount}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </Slider>
      </div>
    </section>
  );
};
