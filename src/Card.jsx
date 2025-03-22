import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ images, location, distance, date, price, rating, isFavorite, tag, roomNo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer w-full" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      {/* Image & Pagination */}
      <div className="relative w-full h-52">
        <img
          src={images[currentIndex]}
          alt={location}
          className="w-full h-full object-cover rounded-t-xl transition-opacity duration-500"
        />

        {/* Left Button */}
        {currentIndex>0 && <button
          onClick={handlePrev}
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ${isHovered? "":"lg:hidden"}`}
        >
          <FaChevronLeft size={16} />
        </button>}

        {/* Right Button */}
        {currentIndex<(images.length-1) && <button
          onClick={handleNext}
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ${isHovered? "":"lg:hidden"}`}
        >
          <FaChevronRight size={16} />
        </button>}

        {/* Tag */}
        {tag && (
          <div className="absolute top-3 left-3 bg-white text-black text-sm px-2 py-1 rounded-full shadow">
            {tag}
          </div>
        )}

        {/* Favorite Icon */}
        <div className="absolute top-3 right-3">
          {isFavorite ? (
            <span className="text-black text-lg">❤️</span>
          ) : (
            <span className="text-gray-400 text-lg">♡</span>
          )}
        </div>

        {/* Pagination Indicators (Small Circles) */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white scale-125" : "bg-gray-50 opacity-50"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>

      {/* Details */}
      <Link to={roomNo===0 ? "/room":"/"}><div className="p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{location}</h3>
          <span className="text-sm">⭐ {rating}</span>
        </div>
        <p className="text-gray-500 text-sm">{distance}</p>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-black font-semibold mt-2">
          {price} <span className="text-gray-500 font-normal">/ night</span>
        </p>
      </div></Link>
    </div>
  );
};

export default Card;
