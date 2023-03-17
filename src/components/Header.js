import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [open, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!open);
    console.log(open);
  };
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-2 md:px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo or brand name */}
            <h1 className="text-lg font-bold">Mentorship to Study Abroad</h1>
          </div>
          {/* Navigation menu */}
          <nav className="hidden ml-6 md:flex justify-around">
            <div className="flex items-center justify-between gap-1.5 mx-3">
              <FaHome className="text-xl" />
              <a
                href="#"
                className="text-gray-600 text-lg hover:text-gray-1200 pt-1 font-medium"
              >
                Home
              </a>
            </div>
            <div className="flex items-center justify-between gap-1.5 mx-3">
              <FaUser className="text-lg" />
              <a
                href="#"
                className="text-gray-600 text-lg hover:text-gray-1200 pt-1 font-medium"
              >
                About
              </a>
            </div>
            <div className="flex items-center justify-between gap-1.5 mx-3">
              <FaPhoneAlt className="text-lg" />
              <a
                href="#"
                className="text-gray-600 text-lg hover:text-gray-1200 pt-1 font-medium"
              >
                Contact
              </a>
            </div>
            {/* Call-to-action button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 mx-3">
              Schedule Appointment
            </button>
          </nav>
          <GiHamburgerMenu
            className="mx-4 text-3xl mt-1 md:hidden"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
