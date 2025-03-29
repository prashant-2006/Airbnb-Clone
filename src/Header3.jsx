import React from "react";
import { FaSearch, FaBars, FaUser, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import myImage from './assets/logo.png';

const Header3 = () => {
  return (
    <header className="lg:flex lg:justify-between lg:items-center lg:p-4 lg:shadow-md lg:bg-white lg:sticky lg:top-0 lg:z-50 lg:w-full hidden">
      {/* Logo */}
      <Link to="/"><img src={myImage} alt="Airbnb Logo" className="h-10" /></Link>

      {/* Search Bar */}
      <div className="flex items-center border px-4 py-2 rounded-full shadow-sm w-full max-w-md justify-between">
        <span className="font-semibold">Anywhere</span>
        <span className="text-gray-500">|</span>
        <span className="font-semibold">Any week</span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-400">Add guests</span>
        <button className="bg-rose-500 text-white p-2 rounded-full">
          <FaSearch />
        </button>
      </div>

      {/* Right Menu */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 cursor-pointer hover:text-gray-950">Airbnb your home</span>
        <FaGlobe className="text-gray-500 cursor-pointer hover:text-gray-900" />
        <div className="flex items-center border px-3 py-2 rounded-full shadow-sm space-x-2 hover:shadow-lg">
          <FaBars className="text-gray-500 " />
          <FaUser className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header3;
