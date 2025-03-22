import React from "react";
import Header3 from "./Header3"; // Use the Airbnb-like header
import Footer2 from "./Footer2"; // Use the correct footer
import { FaStar, FaShare, FaHeart } from "react-icons/fa";

const Page2 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header3 /> {/* Updated Header */}

      {/* Image Gallery - Full Width */}
      <div className="w-full max-w-screen-2xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="md:h-[500px]">
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/b992501e-3be8-4568-893a-bdbd89b3ce3e.jpeg?im_w=1200"
              alt="Main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:h-[500px]">
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/0dfb8df5-b634-4f86-ad8b-706d0f285acc.jpeg?im_w=720" className="w-full h-full object-cover rounded-lg" />
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/d2d315dc-51b4-4bc4-a769-8c84f4031264.jpeg?im_w=720" className="w-full h-full object-cover rounded-lg" />
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/8418b54e-1d3d-4269-91e6-f0f700f75d91.jpeg?im_w=720" className="w-full h-full object-cover rounded-lg" />
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/63249ca4-c82c-4341-8a0a-6925ed924b6e.jpeg?im_w=720" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Listing Details Section */}
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Entire villa in Nandi Hills, India</h2>
            <div className="flex space-x-4">
              <FaShare className="text-gray-500 cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-700" />
              <FaHeart className="text-gray-500 cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-700" />
            </div>
          </div>
          <p className="text-gray-600">16+ guests · 3 bedrooms · 3 beds · 4 baths</p>
          <div className="flex items-center mt-2">
            <FaStar className="text-yellow-500" />
            <span className="ml-1 font-semibold">4.95 · 22 reviews</span>
          </div>
        </div>
      </div>

      {/* Host Info */}
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
          <img src="https://a0.muscache.com/im/pictures/user/User/original/0f58eed0-ccdf-498c-b445-95f87c9e317a.jpeg?im_w=240" alt="Host" className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">Hosted by Niraj</h3>
            <p className="text-gray-500">4 months hosting</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Price: $150 CAD/night</h3>
          <div className="mt-2">
            <label className="text-gray-600">Check-in</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md mt-1 transition-all focus:border-rose-500 focus:ring focus:ring-rose-200"
            />
          </div>
          <div className="mt-2">
            <label className="text-gray-600">Check-out</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md mt-1 transition-all focus:border-rose-500 focus:ring focus:ring-rose-200"
            />
          </div>
          <button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-lg transition-all hover:bg-rose-600 hover:scale-105">
            Reserve Now
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Guest Reviews</h3>
          <div className="space-y-2">
            <p className="text-gray-700">⭐⭐⭐⭐⭐ "Amazing place! Super clean and great location."</p>
            <p className="text-gray-700">⭐⭐⭐⭐⭐ "Host was very helpful, had a wonderful stay!"</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default Page2;
