import React from "react";

function MainContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">
        Get clarity on important topics from experienced people
      </h2>
      <ul className="list-disc ml-6">
        <li className="text-lg mb-2">
          <a href="#">Application Process & Tuition Fee</a>
        </li>
        <li className="text-lg mb-2">
          <a href="#">Visa Experience & Tips</a>
        </li>
        <li className="text-lg mb-2">
          <a href="#">Scholarships in Universities</a>
        </li>
        <li className="text-lg mb-2">
          <a href="#">Accommodation near Universities</a>
        </li>
        <li className="text-lg mb-2">
          <a href="#">On-Off Campus Job Opportunities</a>
        </li>
        <li className="text-lg mb-2">
          <a href="#">Course Work & Internship Opportunities</a>
        </li>
      </ul>
    </div>
  );
}

export default MainContent;