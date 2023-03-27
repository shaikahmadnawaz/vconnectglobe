import React from "react";
import topicsData from "../Data/topicsData";

const ContentCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-3 md:my-0 md:mx-0 md:w-72 mx-8">
      <div className="flex items-center justify-center p-4">
        {icon}
        <h3 className="text-xl font-semi-bold ml-2">{title}</h3>
      </div>
      <p className="text-gray-700 text-base px-4 py-2">{text}</p>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Get clarity on important topics from experienced people
      </h2>
      <div className="grid lg:gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {topicsData.map((topic, index) => {
          return (
            <ContentCard
              key={index}
              icon={topic.icon}
              title={topic.title}
              text={topic.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;