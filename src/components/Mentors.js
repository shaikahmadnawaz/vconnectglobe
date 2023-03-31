import React, { useState,useEffect } from "react";
import StarRating from "./StarRating";
import mentorsData from "../Data/mentorsData";
import data from "../Data/filterOptions";

const Mentors = () => {
  const countries = Object.keys(data);
  const [filter,setFilter] = useState({
    selectedCountry : "",
    selectedState : ""
  });

  const defaultMentors = mentorsData.sort((mentor1, mentor2) => {
    return mentor2.rating - mentor1.rating;
  });

  const [filteredData, setFilteredData] = useState(defaultMentors.slice(0, 9));

  const handleFilter = () => {
    console.log(filter);
    const filteredMentors = mentorsData.filter((mentor) => {
      return mentor.country === filter.selectedCountry && mentor.state === filter.selectedState;
    });
    setFilteredData(filteredMentors)
  }

  return (
    <section id="mentors" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Our Featured Mentors
      </h2>
      <div className="flex items-center justify-center mb-10">
        <label className="mr-2 font-medium">Filter by:</label>

        <select
          className="border rounded-md px-2 py-1 mx-2"
          name = "selectedCountry"
          value={filter.selectedCountry}
          onChange={(e)=>setFilter({...filter,[e.target.name]:e.target.value})}
        >
          <option value={""} disabled>
            Country
          </option>
          {countries.map((country, index) => {
            return <option value={country}>{country}</option>;
          })}
        </select>

        {filter.selectedCountry && (
          <select
            className="border rounded-md px-2 py-1"
            name="selectedState"
            value={filter.selectedState}
            onChange={async(e)=>{await setFilter({...filter,[e.target.name]:e.target.value});handleFilter(e)}}
          >
            <option value={""} disabled>
              State
            </option>
            {data[filter.selectedCountry].map((state, index) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        )}
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
                  className="w-56 h-56 object-cover rounded-full"
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

// const handleChange = (event) => {
//   if (event.target.value === "All") {
//     setSelectedState("All");
//     setFilteredData(mentorsData);
//   } else if (event.target.value === "") {
//     setSelectedState("");
//     setFilteredData(defaultMentors.slice(0, 9));
//   } else {
//     setSelectedState(event.target.value);
//     const data = mentorsData.filter((mentor) => {
//       return mentor.state === event.target.value ? mentor : "";
//     });
//     setFilteredData(data);
//   }
// };

// const countries = Object.keys(data);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");

//   const defaultMentors = mentorsData.sort((mentor1, mentor2) => {
//     return mentor2.rating - mentor1.rating;
//   });

//   const [filteredData, setFilteredData] = useState(defaultMentors.slice(0, 9));

//   const handleCountryChange = (e) => {
//     e.preventDefault();
//     setSelectedCountry(e.target.value);
//     const filteredMentors = mentorsData.filter((mentor) => {
//       return mentor.country === selectedCountry ? mentor : "";
//     });
//     setFilteredData(filteredMentors);
//   };

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//     const filteredMentors = filteredData.filter((mentor) => {
//       return mentor.state === selectedState ? mentor : "";
//     });
//     setFilteredData(filteredMentors);
//   };
