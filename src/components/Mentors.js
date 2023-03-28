import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import mentorsData from "../Data/mentorsData";

const Mentors = () => {
  const [selectedState, setSelectedState] = useState("");
  const defaultMentors = mentorsData.sort((mentor1, mentor2) => {
    return mentor2.rating - mentor1.rating;
  });
  const [filteredData, setFilteredData] = useState(defaultMentors.slice(0, 9));
  const handleChange = (event) => {
    if (event.target.value === "All") {
      setSelectedState("All");
      setFilteredData(mentorsData);
    }else if(event.target.value === ""){
      setSelectedState("");
      setFilteredData(defaultMentors.slice(0,9));
    } 
    else {
      setSelectedState(event.target.value);
      const data = mentorsData.filter((mentor) => {
        return mentor.state === event.target.value ? mentor : "";
      });
      setFilteredData(data);
    }
  };

  return (
    <section id="mentors" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-5 text-center">Our Featured Mentors</h2>
      <div className="flex items-center justify-center mb-10">
        <label className="mr-2 font-medium">Filter by state:</label>
        <select
          className="border rounded-md px-2 py-1"
          value={selectedState}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Texas(TX)">Texas(TX)</option>
          <option value="Kansas(KS)">Kansas(KS)</option>
          <option value="Connecticut(CT)">Connecticut(CT)</option>
          <option value="Missouri(MO)">Missouri(MO)</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className="grid lg:gap-x-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-20 mx-4">
        {filteredData.map((mentor, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:scale-105 duration-500"
            >
              <div className="flex justify-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-56 h-56 object-fill rounded-full"
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
                  href="#"
                  className="block my-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 text-center"
                >
                  Schedule Appointment
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mentors;
