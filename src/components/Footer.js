import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-bold">
            One to One Mentorship to Study Abroad
          </h4>
          <p className="text-gray-500 text-sm">
            Get clarification on study abroad topics from experienced people
          </p>
        </div>
        <div className="w-full md:w-auto text-center md:text-right mx-10">
          <p className="text-gray-500 text-sm mb-2">
            Connect with us on social media
          </p>
          <div className="flex justify-between mt-3">
            <FaTwitter className="text-3xl" />
            <FaYoutube className="text-3xl" />
            <FaInstagram className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            © 2023 Mentors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
