import React, { useState } from "react";

const Filter = (prop) => {
  const [priceRange, setPriceRange] = useState([870, 12000]);
  const [beds, setBeds] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-10 bg-gray-900/70">
      {/* Filter Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        
        {/* Close Button (✖) */}
        <button 
          onClick={()=>prop.setShowFilter(false)} 
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-gray-700 font-medium">Price range</h3>
          <p className="text-sm text-gray-500">Nightly prices before fees and taxes</p>

          {/* Price Range Slider */}
          <div className="relative mt-3">
            <input
              type="range"
              min="870"
              max="12000"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="870"
              max="12000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer mt-1"
            />
          </div>

          {/* Price Values */}
          <div className="flex justify-between text-sm text-gray-700 mt-2">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}+</span>
          </div>
        </div>

        {/* Beds and Bathrooms */}
        <div className="mb-6">
          <h3 className="text-gray-700 font-medium">Beds and bathrooms</h3>
          
          {/* Beds */}
          <div className="flex items-center justify-between mt-2">
            <span>Beds</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBeds((prev) => (prev > 0 ? prev - 1 : null))}
                className="px-2 py-1 border rounded"
              >
                −
              </button>
              <span>{beds !== null ? beds : "Any"}</span>
              <button
                onClick={() => setBeds((prev) => (prev !== null ? prev + 1 : 1))}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center justify-between mt-2">
            <span>Bathrooms</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBathrooms((prev) => (prev > 0 ? prev - 1 : null))}
                className="px-2 py-1 border rounded"
              >
                −
              </button>
              <span>{bathrooms !== null ? bathrooms : "Any"}</span>
              <button
                onClick={() => setBathrooms((prev) => (prev !== null ? prev + 1 : 1))}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h3 className="text-gray-700 font-medium">Amenities</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {["Wifi", "Kitchen", "Private attached bathroom"].map((amenity, index) => (
              <button
                key={index}
                className="px-3 py-1 border rounded-lg text-sm bg-gray-100 hover:bg-gray-200"
              >
                {amenity}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-4">
          <button className="text-gray-600 text-sm">Clear all</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Show 1,000+ places
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
