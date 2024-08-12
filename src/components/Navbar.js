import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex items-center justify-between p-4 z-50">
        <div className="text-2xl font-bold">INTERSTELLER</div>
        <div className="flex items-center">
          {/* Hamburger Menu for smaller screens */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            ☰
          </button>
          {/* Navigation Links for larger screens */}
          <nav className="hidden lg:flex space-x-4">
            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
              Dashboard
            </Link>
            <Link
              to="/Rockets"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Rockets
            </Link>
            <Link
              to="/About"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              to="/Contactme"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Contactme
            </Link>
          </nav>
        </div>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-gray-900 text-white z-50 lg:hidden">
          <nav className="flex flex-col items-center space-y-2 p-4">
            <Link
              to="/"
              className="block py-2 px-4 rounded hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link
              to="/Rockets"
              className="block py-2 px-4 rounded hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Rockets
            </Link>
            <Link
              to="/About"
              className="block py-2 px-4 rounded hover:bg-gray-700"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/Contactme"
              className="block py-2 px-4 rounded hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Contactme
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
