import React from "react";
import JoinUs from "../assets/joinus.png";
import { TbPointFilled } from "react-icons/tb";
const JoinTeam = () => {
  const points = [
    "Connect with like-minded individuals and expand your network.",
    "Gain valuable insights and tips from experienced members.",
    "Receive support and encouragement throughout your journey.",
    "Access a wealth of resources, including study abroad guides and job search strategies.",
    "Build lasting connections with people from all over the world.",
    "Give back to others by sharing your own experiences and insights.",
]
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
            {points.map((item, index) => (
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
          <div className="flex justify-center items-center">
            <a
              href="https://forms.gle/q8iUkKbXcxZHZj6B9"
              target="_blank"
              rel="noreferrer"
              class="focus:outline-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 text-lg mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 text-white font-medium rounded-md px-4 py-2 text-center inline-block"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
