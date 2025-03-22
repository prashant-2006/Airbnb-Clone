import React from "react";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";

const Header2 = () => {
  return (
    <div className="flex flex-col items-center w-full lg:hidden">
      {/* Top Header Section */}
      <div className="flex justify-center space-x-8 py-4 bg-white shadow-md w-full">
        {/* Explore */}
        <div className="flex flex-col items-center text-red-600">
          <FaSearch className="text-2xl" />
          <span className="text-sm font-semibold">Explore</span>
        </div>

        {/* Wishlists */}
        <div className="flex flex-col items-center text-gray-500 hover:text-black">
          <FaHeart className="text-2xl" />
          <span className="text-sm font-semibold">Wishlists</span>
        </div>

        {/* Log in */}
        <div className="flex flex-col items-center text-gray-500 hover:text-black">
          <FaUser className="text-2xl" />
          <span className="text-sm font-semibold">Log in</span>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="w-full flex justify-center py-4 bg-gray-100 shadow-sm">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-3/4 md:w-1/2 lg:w-1/3 bg-white">
          <FaSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Start your search"
            className="ml-2 w-full focus:outline-none text-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Header2;
