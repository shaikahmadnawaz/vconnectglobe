import React from "react";
import JoinUs from "../assets/joinus.png";

const JoinTeam = () => {
  let listItems = [
    "Chance to make a positive impact on someone's life while building your own skills",
    "Access to diverse perspectives and experiences from students all around the world",
    "Ability to work from anywhere with an internet connection",
    "Opportunities to develop leadership and mentorship skills",
    "Exposure to new and innovative teaching methods and technologies",
  ];

  return (
    <div class="md:px-14 mx-auto px-4 py-8">
      <h1 className="text-2xl text-center font-bold mb-0">
        Come Be A Part Of The Helping Community
      </h1>
      <div className="flex flex-col md:h-[27rem] lg:flex-row items-center justify-center">
        <div class="lg:w-1/2">
          <img
            src={JoinUs}
            className="p-0 md:p-12 w-42 object-center"
            alt="Mentor Team Illustration"
          />
        </div>

        <div class="lg:w-1/2 lg:p-auto">
          <div class="list-disc list-inside mb-6">
            {listItems.map((item, index) => (
              <div key={index} class="flex items-start mb-3">
                <div class="w-6 h-6 mr-3 mt-1 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="10" cy="10" r="8" fill="none" />
                  </svg>
                </div>
                <div>
                  <span class="font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 text-center inline-block"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
