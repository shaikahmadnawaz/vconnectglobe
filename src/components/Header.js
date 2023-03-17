import React from "react";

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo or brand name */}
            <h1 className="text-lg font-bold">
              One to One Mentorship to Study Abroad
            </h1>

            {/* Navigation menu */}
            <nav className="ml-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Call-to-action button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2">
            Schedule a consultation
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
