import React from "react";
import { testimonials } from "../Data/testimonialsData";
import StarRating from "./StarRating";
const Testimonials = () => {
  

  return (
    <section className="bg-white py-16">
      <div id="testimonials" className="container mx-auto px-4">
        <h2 className="text-2xl text-center font-bold mb-8">
          What people are saying
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {
            testimonials.map((testimonial,index)=>{
              return(
                <div key={index} className="shadow-md rounded-2xl">
                  <div className="photo flex justify-center py-2 rounded-md bg-white">
                    <img src="./mentors/cartoon-illustration.jpg" alt="student" className="rounded-full w-32"/>
                  </div>
                  <div className="flex flex-col mt-4">
                    <p className="font-bold text-center">{testimonial.name}</p>
                    <p className="text-gray-500 text-center">{testimonial.position}</p>
                  </div>
                  <div className="flex italic justify-center px-10 mt-4">
                    <p>{testimonial.testimonial}</p>
                  </div>
                  <div className="mt-4 flex justify-center my-4">
                    <StarRating rating={testimonial.rating}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


{/* <div
              key={index}
              className="bg-white hover:scale-105 duration-500 rounded-lg shadow-lg p-6"
            >
              <p className="text-lg font-medium mb-4">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://picsum.photos/200/300"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div> */}
            // </div>