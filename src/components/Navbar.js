import React, { useState } from "react";
import { handleScroll } from "./utils/handleScroll";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Mentors", link: "#mentors" },
    { name: "Contact", link: "#footer" },
  ];
  let [open, setOpen] = useState(false);
  let [showLogin, setShowLogin] = useState(false);
  return (
    <div className="shadow-md w-full z-50 fixed top-0 left-0">
      <div className="md:flex mx-auto items-center  justify-between bg-white md:px-14 px-7">
        <div class="text-md py-0 cursor-pointer flex items-center">
          <a href="/" class="text-md py-0 cursor-pointer flex items-center">
            <img
              src="/vconnectglobal.png"
              alt="vconnectglobal"
              class="w-40 md:w-56"
            />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-[0.8rem] cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 h-96 md:h-5 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-4  text-lg md:my-0 my-7">
              <a
                href={link.link}
                onClick={(e) => {
                  handleScroll(e);
                  setOpen(false);
                }}
                className="text-black font-medium border-b-black hover:text-slate-700 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className=" md:ml-4 relative">
            <button
              type="button"
              className="flex items-center text-black hover:text-gray-900"
              onClick={() => setShowLogin(!showLogin)}
            >
              <span className="font-medium text-lg">Login</span>
              <HiChevronDown className="h-5 w-5" />
            </button>
            {showLogin && (
              <div className="absolute left-0 md:right-0 mt-2 w-32 rounded-md shadow-lg">
                <div className="py-1 rounded-md bg-white">
                  <a
                    href="https://vconnectglobe.com/booking/mentor-login/"
                    className="block px-7 py-1 w-full text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <h1>Mentor</h1>
                  </a>
                  <a
                    href="https://vconnectglobe.com/booking/students-login/"
                    className="block px-7 py-1 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Student
                  </a>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
