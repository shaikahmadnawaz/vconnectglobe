import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="mx-auto px-4 lg:px-32 py-6 lg:py-12 grid lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">VConnect Globe</h1>
            <p className="text-gray-500 text-sm">
              Insights and guidance for study abroad by experienced mentors
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Explore the path of global learning experience through VConnect
              Globe
            </p>
            <div className="flex flex-col items-center mt-8 lg:flex-col lg:justify-start">
              <p className="text-gray-500 text-sm mb-2">
                Connect with us on social media
              </p>
              <div className="flex mt-3">
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
                  href="https://youtube.com/@civilengineerinus"
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
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mb-8">
            <a
              href="https://forms.gle/q8iUkKbXcxZHZj6B9"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black text-xl py-2 md:px-4 px-3 rounded-xl font-medium transition-all duration-300"
            >
              Join As Mentor
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:flex md:justify-evenly">
            <div>
              <a
                href="https://vconnectglobe.com/booking/about-us/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm py-2"
              >
                About Us
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
