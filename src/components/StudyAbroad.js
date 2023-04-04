import React from "react";
import {
  FaGlobe,
  FaClipboard,
  FaUniversity,
  FaSearch,
  FaUserGraduate,
  FaMoneyBillAlt,
  FaFileAlt,
  FaPlane,
  FaCalendarAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaGlobe className="text-white" />,
    text: "1. Country Selection",
  },
  {
    icon: <FaClipboard className="text-white" />,
    text: "2. Write Required Exams",
  },
  {
    icon: <FaUniversity className="text-white" />,
    text: "3. UG College Certificates",
  },
  {
    icon: <FaSearch className="text-white" />,
    text: "4. Research on Universities",
  },
  {
    icon: <FaUserGraduate className="text-white" />,
    text: "5. Apply & Get Admit",
  },
  {
    icon: <FaMoneyBillAlt className="text-white" />,
    text: "6. Financial Documents",
  },
  {
    icon: <FaFileAlt className="text-white" />,
    text: "7. Get I-20 & Fill DS-160",
  },
  {
    icon: <FaCalendarAlt className="text-white" />,
    text: "8. Book Visa Slot",
  },
  {
    icon: <FaPlane className="text-white" />,
    text: "9. Visa Interview",
  },
  {
    icon: <FaPlane className="text-white" />,
    text: "10. Let's Fly",
  },
];

const StudyAbroad = () => {
  return (
    <section className="bg-white py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          How do I begin my study abroad?
        </h2>

        <div className="flowchart grid gap-2 sm:gap-x-5 sm:gap-y-10 text-center grid-cols-2 sm:grid-cols-5 w-full mx-auto my-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flowchart-box shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center flex-col w-36 sm:w-52 h-24 sm:h-36 mx-1 sm:mx-5 bg-white rounded-md"
            >
              <div className="flowchart-icon bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex justify-center items-center w-10 sm:w-16 h-10 sm:h-16">
                {step.icon}
              </div>
              <div className="flowchart-text text-sm sm:text-lg font-medium mt-2 sm:mt-4">
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default StudyAbroad;
