import React, { useState } from "react";

const Header = () => {
  let Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Mentors", link: "#mentors" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex mx-auto items-center justify-between bg-white py-4 md:px-14 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          Mentorship
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-[1.1rem] cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8  text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black font-medium border-b-black hover:text-slate-700 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
