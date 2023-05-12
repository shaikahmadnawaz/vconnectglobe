import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mentorsData from "../Data/mentorsData";
import { useState } from "react";
import StarRating from "./StarRating";
const MentorsPage = () => {
  const [filteredMentors,setFilteredMentors] = useState(mentorsData);
  const [filters,setFilters] = useState({
		country : "",
		state : "",
		university : "",
		gender : ""
	});

  const countries = [...new Set(mentorsData.map((mentor) => mentor.country))];
  const states = [...new Set(mentorsData.map((mentor)=>mentor.state))].sort();
	const universities = [...new Set(mentorsData.map((mentor)=>mentor.university))].sort();


	const handleFilterChange = (e) => {
		console.log(e.target.name +" : "+ e.target.value);
		
		setFilters({...filters ,[e.target.name] : e.target.value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const validFilters = {}
		for (const [key, value] of Object.entries(filters)) {
			if (value !== null && value !== "") {
				validFilters[key] = value;
			}
		}
		
		const filteredData = mentorsData.filter((mentor)=>{
			for (const [key, value] of Object.entries(validFilters)) {
				if (mentor[key] !== value) {
					return false;
				}
			}
			return true;
		})
		console.log(filteredData);
		setFilteredMentors(filteredData);
	}

  return (
    <div className="pt-24">
      <Navbar />
      {/* filter and mentor cards */}
      <section id="#mentors">
				<h3 className="text-center text-2xl font-bold m-3">Filter by your choice</h3>
        {/* Filter options */}
				<form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-y-4">
          {/* country filter */}
          <div className="grid justify-center items-center grid-cols-2">
            <label
              htmlFor="country filter"
              className="sm:text-sm md:text-md lg:text-lg font-semibold flex items-center justify-center"
            >
              Country
            </label>
            <select className="border-gray-400 border-2 rounded-md p-2 w-3/4 lg:w-2/3" name="country"onChange={handleFilterChange} defaultValue={"all"}>
              <option value="all">All</option>
              {countries.map((countryName, key) => {
                return <option value={countryName}>{countryName}</option>;
              })}
            </select>
          </div>
          {/* state filter */}
          <div className="grid justify-center items-center grid-cols-2">
            <label
              htmlFor="state filter"
              className="sm:text-sm md:text-md lg:text-lg font-semibold flex items-center justify-center"
            >
              State
            </label>
            <select className="border-gray-400 border-2 rounded-md p-2 w-3/4 lg:w-2/3" name="state" onChange={handleFilterChange} defaultValue={"all"}>
              <option value="all">All</option>
              {states.map((stateName, key) => {
                return <option value={stateName}>{stateName}</option>;
              })}
            </select>
          </div>
          {/* university filter */}
          <div className="grid justify-center items-center grid-cols-2">
            <label
              htmlFor="university filter"
              className="sm:text-sm md:text-md lg:text-lg font-semibold flex items-center justify-center"
            >
             	University
            </label>
            <select className="border-gray-400 border-2 rounded-md p-2 w-3/4 lg:w-2/3" name="university" onChange={handleFilterChange} defaultValue={"all"}>
              <option value="all">All</option>
              {universities.map((countryName, key) => {
                return <option value={countryName}>{countryName}</option>;
              })}
            </select>
          </div>
          {/* gender filter */}
          <div className="grid justify-center items-center grid-cols-2">
            <label
              htmlFor="gender filter"
              className="sm:text-sm md:text-md lg:text-lg font-semibold flex items-center justify-center"
            >
              Gender
            </label>
            <select className="border-gray-400 border-2 rounded-md p-2 w-3/4 lg:w-2/3" name="gender" onChange={handleFilterChange} defaultValue={"all"}>
              <option value="all">All</option>
							<option value={"male"}>Male</option>
							<option value={"female"}>Female</option>
            </select>
          </div>
					{/* Filter button */}
					
        </div>
				<div className="flex items-center justify-center mt-5 gap-x-4">
						<button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-10 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Filter</button>
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-10 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Reset</button>
				</div>
				</form>
        {/* Mentor cards */}
				<div className="p-4 lg:px-20">
					<h3 className="text-center text-2xl font-bold m-5">Our Featured Mentors</h3>
        <div className="grid lg:gap-x-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-20 mx-4">
        {filteredMentors.map((mentor, index) => {
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
        })}
      </div>
			</div>
      </section>
			<div className="absolute bottom-0">
				
			</div>
       
    </div>
  );
};

export default MentorsPage;
