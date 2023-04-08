import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white bottom-0">
      <div className="md:px-14 container mx-auto px-4 py-8 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">VConnect Globe</h1>
          <p className="mt-2 text-gray-500 text-sm">
          Insights and guidance for study abroad by  experienced mentors
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            Explore the path of global learning experience through VConnect Globe
          </p>
        </div>
        <div className="flex gap-x-3 flex-wrap items-center justify-between gap-y-2">
          <Link to="/pages/aboutus">About us</Link>
          <Link to="/pages/privacypolicy">Privacy Policy</Link>
          <Link to="/pages/refundpolicy">Refund Policy</Link>
          <Link to="/pages/termsandconditions">Terms and Conditions</Link>
          <Link to="/pages/pricingpolicy">Pricing Policy</Link>
        </div>
        <div className="w-full md:w-auto text-center md:text-right mx-10">
          <p className="text-gray-500 text-sm mb-2">
            Connect with us on social media
          </p>
          <div className="flex justify-around mt-3">
           <a href="https://www.instagram.com/vconnectglobe/" target="_blank" rel="noreferrer"><FaInstagram className="text-3xl cursor-pointer" /></a>
           <a href="http://facebook.com/VconnectGlobe"  target="_blank" rel="noreferrer"> <FaFacebookF className="text-3xl cursor-pointer" /></a> 
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
