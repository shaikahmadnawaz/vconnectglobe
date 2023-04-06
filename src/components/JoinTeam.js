import React from "react";
import JoinUs from "../assets/joinus.png";
import { TbPointFilled } from "react-icons/tb";
const JoinTeam = () => {
  let listItems = [
    "Chance to enhance your skills having the potential to positively impact an aspirant life ",
    "Access to diverse perspectives and experiences from students across the world",
    "Exposure to cutting-edge technologies and innovative teaching techniques",
    "Opportunities to practise mentorship and leadership",
    "Ability to work from anywhere, with just an internet connection",
  ];
  return (
    <div class="md:px-14 mx-auto px-4 py-8">
      <h1 className="text-2xl text-center font-bold mb-0">
        Join the Assisting Community Today!
      </h1>
      <div className="flex flex-col md:h-full lg:h-full lg:flex-row items-center justify-center">
        <div class="lg:w-1/2">
          <img
            src={JoinUs}
            className="p-0 md:pl-7 w-60 md:w-auto object-center"
            alt="Mentor Team Illustration"
          />
        </div>

        <div class="lg:w-1/2 lg:p-auto">
          <div class="list-disc list-inside mb-6">
            {listItems.map((item, index) => (
              <div key={index} class="flex items-start mb-3">
                <div class="w-6 h-6 mr-3 mt-1 text-blue-600">
                  <TbPointFilled />
                </div>
                <div>
                  <span class="font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://forms.gle/YAafMk1ULHZvHKhQA"
            target="_blank"
            rel="noreferrer"
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
