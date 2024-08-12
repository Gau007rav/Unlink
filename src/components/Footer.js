import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa"; // Import icons for social links

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-950 to-gray-800 text-white py-8 px-4 lg:px-20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          {/* Stylish Card Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
              Fill Your Details
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <hr></hr>
          {/* Social Links Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start pl-40 pt-20">
            <div className="flex flex-col items-center lg:items-start mb-6">
              <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-full">
                <img
                  src="https://i.pinimg.com/736x/d4/8d/fb/d48dfb38a73f227ea0dc3dbe647c6f4f.jpg"
                  alt="logo"
                ></img>
              </div>
              <span className="text-xl font-semibold mt-4">
                Interstellar.com
              </span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gaurav_3609"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://github.com/Gau007rav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
