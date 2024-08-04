import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top bar with title and hamburger menu */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex items-center justify-between p-4 z-50 lg:hidden">
        <div className="text-2xl font-bold">SpaceX</div>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          ☰
        </button>
      </div>
      
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:h-screen lg:bg-gray-500 lg:text-white lg:p-4 lg:fixed lg:top-0">
        <div className="text-2xl font-bold mb-4">SpaceX</div>
        <span className="inline-block mb-4">LIVE-INFO</span>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Rockets" className="block py-2 px-4 rounded hover:bg-gray-700">
                Rockets
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar for smaller screens (hidden by default) */}
      <div className={`fixed top-0 left-0 bg-gray-900 text-white h-screen w-64 p-4 flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:hidden z-40`}>
        <div className="text-2xl font-bold mb-4">SpaceX</div>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleMenu}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Rockets" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleMenu}>
                Rockets
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
