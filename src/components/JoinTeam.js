import React from "react";
import Team from "../assets/teams.jpg";

const JoinTeam = () => {
  return (
    <div className="container md:px-14 mx-auto my-6 px-4">
      <h1 className="text-2xl text-center font-bold mb-2">
        Come Be A Part Of The Helping Community
      </h1>

      <div className="flex flex-col md:flex-row  justify-center items-center">
        <div className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
          <img className="w-full" src={Team} alt="" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center md:pl-12">
          <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
            Our Team
          </h2>
          <p className="text-center md:text-base text-gray-600 mb-5">
            We are a passionate group of individuals dedicated to making a
            difference in our community. Our team consists of volunteers from
            all walks of life, who share a common goal of helping those in need.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
