import React, { useEffect, useState } from "react";
import { FaStar, FaShare, FaHeart, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaPaw, FaCar, FaDesktop } from "react-icons/fa";

const ListingPage = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const reservationBox = document.getElementById("reservation-box");
      window.onscroll = () =>{
        const scrollTop = window.scrollY;
        const {top} = reservationBox.getBoundingClientRect();
        if(scrollTop>top+420){
          setIsSticky(true);
        }
        else{
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Image Gallery */}
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

      {/* Main Content */}
      <div className="w-full max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Left: Listing Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold">Entire villa in Nandi Hills, India</h2>
          <p className="text-gray-600 mt-2">16+ guests · 3 bedrooms · 3 beds · 4 baths</p>

          {/* Rating and Actions */}
          <div className="flex items-center mt-2 space-x-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <span className="ml-1 font-semibold">4.96 · 23 reviews</span>
            </div>
            <div className="flex space-x-4">
              <FaShare className="text-gray-500 cursor-pointer hover:text-gray-700" />
              <FaHeart className="text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-700">
            Escape to our serene villa near Nandi Hills, featuring a **private swimming pool** and **unobstructed views** of the hills, a lake, and lush greenery.
            The villa offers spacious rooms with **modern interiors**, **airy bathrooms** with skylights, and a **second-floor sit-out** with breathtaking views.
            Whether you're relaxing by the pool or enjoying the fresh air on the balcony, this is the perfect retreat for peace and comfort.
          </p>

          {/* Amenities */}
          <h3 className="mt-6 text-lg font-semibold">Amenities</h3>
          <div className="grid grid-cols-2 gap-4 mt-2 text-gray-700">
            <div className="flex items-center"><FaWifi className="mr-2" /> Wi-Fi</div>
            <div className="flex items-center"><FaSwimmingPool className="mr-2" /> Pool</div>
            <div className="flex items-center"><FaPaw className="mr-2" /> Pets Allowed</div>
            <div className="flex items-center"><FaCar className="mr-2" /> Free Parking</div>
            <div className="flex items-center"><FaDesktop className="mr-2" /> Dedicated Workspace</div>
            <div className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Mountain View</div>
          </div>

          {/* Reviews */}
          <h3 className="mt-6 text-lg font-semibold">Guest Reviews</h3>
          <div className="mt-2 space-y-3 text-gray-700">
            <p>⭐⭐⭐⭐⭐ "Amazing place! Super clean and great location." - Ajay</p>
            <p>⭐⭐⭐⭐⭐ "The host was very welcoming and the view was incredible." - Salpikar</p>
            <p>⭐⭐⭐⭐⭐ "Perfect for a getaway with family or friends. Highly recommended!" - Avinash</p>
          </div>

          {/* Location */}
          <h3 className="mt-6 text-lg font-semibold">Where you'll be</h3>
          <div className="mt-2">
            <iframe
              title="Location Map"
              className="w-full h-60 rounded-lg"
              src="https://maps.google.com/maps?q=Nandi%20Hills,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>

        {/* Right: Sticky Reservation Box */}
        <div className="w-full md:w-1/3 relative">
          <div
            id="reservation-box"
            className={`p-6 bg-white rounded-lg shadow-md transition-all duration-300 ${
              isSticky ? "lg:fixed lg:top-[100px] lg:right-8 lg:w-1/3" : ""
            }`}
          >
            <h3 className="text-xl font-semibold">Price: $150 CAD/night</h3>
            <div className="mt-2">
              <label className="text-gray-600">Check-in</label>
              <input type="date" className="w-full p-2 border rounded-md mt-1" />
            </div>
            <div className="mt-2">
              <label className="text-gray-600">Check-out</label>
              <input type="date" className="w-full p-2 border rounded-md mt-1" />
            </div>
            <button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
