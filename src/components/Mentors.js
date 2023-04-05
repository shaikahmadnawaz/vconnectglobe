import React, { useState } from "react";
import StarRating from "./StarRating";
import mentorsData from "../Data/mentorsData";
import sortMentors from "./utils/sortMentors";

const Mentors = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const defaultMentors = sortMentors(mentorsData).slice(0, 9);

  const [filteredData, setFilteredData] = useState(defaultMentors);

  const handleChange = (event) => {
    if (event.target.name === "country") {
      setSelectedCountry(event.target.value);
      setSelectedState("");
      const data = mentorsData.filter((mentor) => {
        return mentor.country === event.target.value ? mentor : filteredData;
      });
      setFilteredData(sortMentors(data));
    } else if (event.target.name === "state") {
      setSelectedState(event.target.value);
      if (event.target.value === "") {
        setFilteredData(defaultMentors);
      }
      if (event.target.value === "all") {
        console.log(selectedCountry);
        const data = mentorsData.filter((mentor) => {
          return mentor.country === selectedCountry ? mentor : "";
        });
        setFilteredData(sortMentors(data));
      } else {
        const data = mentorsData.filter((mentor) => {
          return mentor.state === event.target.value ? mentor : "";
        });
        setFilteredData(sortMentors(data));
      }
    }
  };

  const countries = [...new Set(mentorsData.map((mentor) => mentor.country))];

  const states = [
    ...new Set(
      mentorsData
        .filter((mentor) => {
          return mentor.country === selectedCountry;
        })
        .map((mentor) => mentor.state)
    ),
  ].sort();

  return (
    <section id="mentors" className="container md:px-14 mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Our Featured Mentors
      </h2>

      <div class="flex flex-col md:flex-row items-center justify-center mb-10">
        <label class="mr-2 mb-2 md:mb-0 font-medium">Filter by:</label>

        <div class="relative mb-2 md:mb-0 md:mr-4">
          <select
            class="block appearance-none w-full border border-gray-400 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500 bg-white"
            name="country"
            value={selectedCountry}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 10-1.414 1.414l3.5 3.5a1 1 0 001.414 0l3.5-3.5a1 1 0 000-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="relative">
          <select
            className={`block appearance-none w-full border border-gray-400 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500 bg-white ${selectedCountry == ""? "cursor-not-allowed" : "cursor-default"} md:cursor-auto`}
            name="state"
            value={selectedState}
            onChange={handleChange}
            disabled={!selectedCountry}
          >
            <option value="" disabled selected>
              State
            </option>
            <option value="all">All</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 10-1.414 1.414l3.5 3.5a1 1 0 001.414 0l3.5-3.5a1 1 0 000-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
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
                  rel="noreferrer"
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
