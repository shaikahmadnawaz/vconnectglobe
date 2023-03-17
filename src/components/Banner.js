import React from "react";
function Banner() {
  return (
    <div className="banner-bg bg-gradient-to-r from-cyan-500 to-blue-500 py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          One to One Mentorship to Study Abroad
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Get clarity on important topics from experienced people
        </p>
        <a
          href="#"
          className="bg-white text-black text-xl py-2 px-4 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
        >
          Schedule Appointment
        </a>
      </div>
    </div>
  );
}

export default Banner;
