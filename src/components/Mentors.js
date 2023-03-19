import React from "react";
import StarRating from "./StarRating";
import mentorsData from "../Data/mentorsData";
const Mentors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
          {mentorsData.map((mentor) => {
            console.log(mentor); 
            return (
              
              <div className="bg-white rounded-lg shadow-lg">
                <div className="flex justify-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-52 h-52 object-cover rounded-full"
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
                    <p className="text-gray-700 text-sm">
                      <StarRating rating={mentor.rating} /> 
                    </p>
                  </div>
                  <a
                    href="#"
                    className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 text-center"
                  >
                    Schedule Appointment
                  </a>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Mentors;
