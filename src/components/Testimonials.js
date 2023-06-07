import React from "react";
import { testimonials } from "../Data/testimonialsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
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

  return (
    <section className="bg-white py-8 lg:py-16">
      <div id="testimonials" className="container md:px-14 mx-auto px-4">
        <h2 className="text-2xl text-center font-bold mb-0 md:mb-2">
          Our Students Success Stories
        </h2>
        <Slider {...settings} className="">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className="scale-75 hover:scale-90 lg:hover:scale-95 shadow-md rounded-2xl h-full bg-slate-100 lg:mx-4 duration-300"
              >
                <div className="photo flex justify-center py-2 rounded-md">
                  <img
                    src={testimonial.image}
                    alt="student"
                    className="rounded-full w-32"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <p className="font-bold text-center">{testimonial.name}</p>
                  <p className="text-gray-500 text-center">
                    {testimonial.university}
                  </p>
                </div>
                <div className="flex italic justify-center px-10 mt-4">
                  <p>{testimonial.testimonial}</p>
                </div>
                <div className="mt-4 flex justify-center px-4 my-4">
                  <p>
                    My Mentor -{" "}
                    <span className="font-bold">
                      {testimonial.mentorName} ({testimonial.rating}/5)
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
