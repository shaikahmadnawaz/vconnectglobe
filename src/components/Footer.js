import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-bold">
            One to One Mentorship to Study Abroad
          </h4>
          <p className="text-gray-500 text-sm">
            Get clarification on study abroad topics from experienced people
          </p>
        </div>
        <div className="w-full md:w-auto text-center md:text-right">
          <p className="text-gray-500 text-sm mb-2">
            Connect with us on social media
          </p>
          <div className="flex justify-center md:justify-end">
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.985 4.998c-.884.387-1.835.65-2.833.772a5.247 5.247 0 002.305-2.892 10.49 10.49 0 01-3.323 1.269 5.237 5.237 0 00-8.893 4.77 14.85 14.85 0 01-10.795-5.462 5.236 5.236 0 001.618 6.985A5.198 5.198 0 012.1 7.323v.066a5.236 5.236 0 004.188 5.121c-.818.222-1.68.259-2.514.098a5.235 5.235 0 004.881 3.622 10.49 10.49 0 01-6.466 2.216c-.42 0-.82-.021-1.231-.065a14.815 14.815 0 008.008 2.348c9.605 0 14.856-7.954 14.528-14.866.977-.717 1.816-1.627 2.479-2.66l.005-.007z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
