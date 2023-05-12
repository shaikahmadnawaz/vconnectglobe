import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";
const interviewers = [
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
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
const VisaInterviews = () => {
  return (
    // overall div
    <div className="flex items-center justify-center">
      {/* Video div */}
      <div className="p-10">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ss_7sZl3vCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      {/* Visa interview mentor cards */}
      {/* <div className="grid lg:gap-x-9 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-32 gap-y-20 mx-4">
        <Slider {...settings}>
        {
          interviewers.map((mentor, index) => {
            return (
              <div
                key={index}
                className="bg-slate-100 rounded-lg shadow-lg hover:scale-105 duration-500"
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
                  <a
                    href={mentor.appointmentLink}
                    target="_blank"
                    rel="noreferrer"
                    className="block my-4 bg-blue-500 text-white font-medium rounded-md px-4 py-2 text-center"
                  >
                    Schedule Appointment
                  </a>
                </div>
              </div>
            );
          })
        }
        </Slider>
      </div> */}
    </div>
  );
};

export default VisaInterviews;
