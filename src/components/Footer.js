import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container w-screen mx-auto px-4 lg:px-32 py-8 lg:py-12 flex md:flex md:flex-col flex-wrap justify-between lg:grid lg:grid-cols-2 items-center">
        <div className="flex flex-col justify-start mb-10 lg:mb-0">
          <div className="w-full lg:w-auto text-center mb-6 lg:mb-0">
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
          <div className="w-full items-center flex justify-center flex-col mt-5 lg:w-auto lg:mt-8 lg:flex lg:justify-center">
            <p className="text-gray-500 flex justify-items-start text-sm mb-2">
              Connect with us on social media
            </p>
            <div className="lg:flex flex flex-row lg:justify-items-start mt-3">
              <a
                href="https://www.instagram.com/vconnectglobe/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <BsWhatsapp className="text-3xl cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/vconnectglobe/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <FaInstagram className="text-3xl cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/vconnectglobe/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <BsYoutube className="text-3xl cursor-pointer" />
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
        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-2 lg:gap-x-20 lg:grid-col-2 gap-3 md:flex md:justify-evenly flex-wrap items-center justify-between lg:justify-end">
            <div>
              <a
                href="https://vconnectglobe.com/booking/about-us/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm py-2"
              >
                About us
              </a>
              <a
                href="https://vconnectglobe.com/booking/privacy-policy/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm py-2"
              >
                Privacy Policy
              </a>
              <a
                href="https://vconnectglobe.com/booking/refund-policy/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm py-2"
              >
                Refund Policy
              </a>
            </div>
            <div>
              <a
                href="https://vconnectglobe.com/booking/terms-and-conditions/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm py-2"
              >
                Terms and Conditions
              </a>
              <a
                href="https://vconnectglobe.com/booking/pricing-policy/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm py-2"
              >
                Pricing Policy
              </a>
              <a
                href="https://vconnectglobe.com/booking/contact-us/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm py-2"
              >
                Contact Us
              </a>
            </div>
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
