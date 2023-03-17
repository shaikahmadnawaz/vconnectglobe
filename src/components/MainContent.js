import React from "react";

function MainContent() {
  return (
    <div className="flex mx-auto px-4 flex-col mt-16 md:flex-row justify-between mb-10">
      <div className="container mx-auto px-4 py-8 md:w-1/2">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Get clarity on important topics from experienced people
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <a className="" href="#">
              Application Process & Tuition Fee
            </a>
          </li>
          <li className="mb-2">
            <a href="#">Visa Experience & Tips</a>
          </li>
          <li className="mb-2">
            <a href="#">Scholarships in Universities</a>
          </li>
          <li className="mb-2">
            <a href="#">Accommodation near Universities</a>
          </li>
          <li className="mb-2">
            <a href="#">On-Off Campus Job Opportunities</a>
          </li>
          <li className="mb-2">
            <a href="#">Course Work & Internship Opportunities</a>
          </li>
        </ul>
      </div>
      <div className="pt-6 md:pt-0 px-7 md:w-1/2">
        <div className="h-64 md:h-auto overflow-hidden rounded-lg">
          <img className="w-full h-full object-cover" src="image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
