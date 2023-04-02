import React from "react";
import { testimonials } from "../Data/testimonialsData";
import StarRating from "./StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <section className="bg-white py-16">
      <div id="testimonials" className="container md:px-14 mx-auto px-4">
        <h2 className="text-2xl text-center font-bold mb-8">
          What people are saying
        </h2>
        <div className="space-x-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  className="scale-75 md:scale-90 shadow-md rounded-2xl md:my-5 bg-slate-100 mx-4 p-2 hover:scale-100 duration-500 mr-4"
                >
                  <div className="photo flex justify-center py-2 rounded-md">
                    <img
                      src="./mentors/cartoon.jpg"
                      alt="student"
                      className="rounded-full w-32"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <p className="font-bold text-center">{testimonial.name}</p>
                    <p className="text-gray-500 text-center">
                      {testimonial.position}
                    </p>
                  </div>
                  <div className="flex italic justify-center px-10 mt-4">
                    <p>{testimonial.testimonial}</p>
                  </div>
                  <div className="mt-4 flex justify-center my-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
