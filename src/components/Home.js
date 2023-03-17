import React from "react";
import {
  FaRegMoneyBillAlt,
  FaRegBuilding,
  FaRegHandshake,
} from "react-icons/fa";
import { MdSchool, MdLocationOn } from "react-icons/md";

const ContentCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-8 md:my-0 md:mx-0 md:w-64">
      <div className="flex items-center justify-center p-4">
        {icon}
        <h3 className="text-xl font-bold ml-2">{title}</h3>
      </div>
      <p className="text-gray-700 text-base px-4 py-2">{text}</p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-white">
      <div className="container px-32 mx-auto my-8 md:my-16">
        <h1 className="text-xl font-bold text-center text-black mb-8">
          Get clarity on important topics from experienced people
        </h1>
        <div className="grid grid-cols-3 mx-auto gap-8 justify-center">
          <ContentCard
            icon={<MdSchool className="text-3xl text-blue-500" />}
            title="Course Work & Internship Opportunities"
            text="Discover a range of courses and internship opportunities at top universities."
          />
          <ContentCard
            icon={<FaRegMoneyBillAlt className="text-3xl text-green-500" />}
            title="Application Process & Tuition Fee"
            text="Get clarity on the application process, deadlines, and tuition fees for various universities."
          />
          <ContentCard
            icon={<MdLocationOn className="text-3xl text-yellow-500" />}
            title="Accommodation near Universities"
            text="Find the best accommodation options near universities and make your stay comfortable and convenient."
          />
          <ContentCard
            icon={<FaRegHandshake className="text-3xl text-purple-500" />}
            title="On-Off Campus Job Opportunities"
            text="Explore job opportunities both on and off campus to fund your education and gain valuable work experience."
          />
          <ContentCard
            icon={<FaRegBuilding className="text-3xl text-red-500" />}
            title="Visa Experience & Tips"
            text="Learn about the visa process, documents required, and tips to ensure a smooth visa experience."
          />
          <ContentCard
            icon={<FaRegMoneyBillAlt className="text-3xl text-green-500" />}
            title="Scholarships in Universities"
            text="Discover various scholarship options offered by universities and organizations to fund your education."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
