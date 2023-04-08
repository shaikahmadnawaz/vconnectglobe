import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-24 py-8 md:py-12 flex flex-wrap justify-between items-center">
        <div className="flex flex-col justify-start mb-10 md:mb-0">
          <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl text-center font-bold mb-2">
              VConnect Globe
            </h1>
            <p className="mt-2 text-gray-500 text-sm">
              Insights and guidance for study abroad by experienced mentors
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Explore the path of global learning experience through VConnect
              Globe
            </p>
          </div>
          <div className="w-full items-center flex justify-center flex-col mt-5 md:w-auto md:mt-8 md:flex md:justify-start">
            <p className="text-gray-500 flex justify-items-start text-sm mb-2">
              Connect with us on social media
            </p>
            <div className="md:flex flex flex-row md:justify-items-start mt-3">
              <a
                href="https://www.instagram.com/vconnectglobe/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <FaInstagram className="text-3xl cursor-pointer" />
              </a>
              <a
                href="http://facebook.com/VconnectGlobe"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-3xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="grid grid-cols-2 gap-3 flex-wrap items-center justify-between md:justify-end">
            <Link to="/pages/aboutus" className="block text-sm py-2">
              About us
            </Link>
            <Link to="/pages/privacypolicy" className="block text-sm py-2">
              Privacy Policy
            </Link>
            <Link to="/pages/refundpolicy" className="block text-sm py-2">
              Refund Policy
            </Link>
            <Link to="/pages/termsandconditions" className="block text-sm py-2">
              Terms and Conditions
            </Link>
            <Link to="/pages/pricingpolicy" className="block text-sm py-2">
              Pricing Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} VConnect Globe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
