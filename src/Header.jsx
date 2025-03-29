import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";
import { useEffect } from "react";

function Header(prop){
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [destination, setDestination] = useState('');
  const [destinationDesc, setDestinationDesc] = useState('');
  const [destinationIcon, setDestinationIcon] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [guestDropdown, setGuestDropdown] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });
  const guestRef = useRef(null);
  const destinations = [
    { name: "Nearby", description: "Find what's around you", icon: "📍" },
    { name: "Puri, Odisha", description: "For its seaside allure", icon: "🌊" },
    { name: "Kolkata, West Bengal", description: "For sights like Victoria Memorial", icon: "🏛️" },
    { name: "North Goa, Goa", description: "For its bustling nightlife", icon: "🎉" },
    { name: "New Delhi, Delhi", description: "For its stunning architecture", icon: "🏰" },
    { name: "Jaipur, Rajasthan", description: "For sights like Amber Fort", icon: "🏯" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setGuestDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateGuests = (type, value) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value) // Ensure count doesn't go below 0
    }));
  };

    return (
        <div className='lg:flex lg:flex-col lg:w-full lg:justify-center lg:items-center lg:gap-4 lg:pb-8  hidden'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-between mx-16 mt-4'>
            <img src="https://banner2.cleanpng.com/20180608/elx/aa80loyez.webp" alt="logo" className='h-[50] w-32'/>
            <div className='flex flex-row font-semibold text-lg'>
              <p className={`h-12 w-auto rounded-full ${prop.stay ? 'hover:bg-stone-200':'text-stone-500'} hover:cursor-pointer flex items-center px-4 transition-all duration-300`} onClick={()=>prop.setStay(true)}>Stay</p>
              <p className={`h-12 w-auto rounded-full ${!prop.stay ? 'hover:bg-stone-200':'text-stone-500'} hover:cursor-pointer flex items-center px-4 transition-all duration-300`} onClick={()=>prop.setStay(false)}>Experiences</p>
            </div>
            <div className='flex flex-row gap-4 items-center font-semibold'>
              <p className='h-12 w-auto rounded-full hover:bg-stone-200 flex items-center px-4 transition-all duration-300 hover:cursor-pointer'>Airbnb your home</p>
              <div className='h-12 w-auto rounded-full hover:bg-stone-200 flex items-center px-4 transition-all duration-300 hover:cursor-pointer'>
                <i class="fa-solid fa-globe"></i>
              </div>
              <div className='h-12 w-auto rounded-full border border-stone-500 flex flex-row gap-4 items-center p-4 text-2xl text-stone-500 hover:cursor-pointer hover:shadow-lg'>
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-circle-user"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 border border-stone-200 flex flex-row rounded-full divide-x divide-stone-200 items-center m-0 w-fit shadow-md">
           {/* Where Dropdown */}
        <div ref={dropdownRef} className="relative">
          <div className="h-20 w-[22rem] sm:w-60 xs:w-40 rounded-full hover:bg-stone-200 transition-all duration-200 p-4 flex flex-col items-center" onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>
            {destination=='' && <p>Where</p>}
            {destination=='' && <p className="text-stone-500 text-sm">Search destinations</p>}
            {destination!='' && <div className="flex flex-row items-center gap-4 justify-center">
            <span>{destinationIcon}</span>
            <div>
              <p className="font-medium">{destination}</p>
              <p className="text-sm text-gray-500">{destinationDesc}</p>
            </div>
            </div>}
            {isDropdownOpen && (
            <div className="absolute top-full left-0 w-[22rem] bg-white border rounded-lg shadow-lg z-50 mt-2">
              <ul className="py-2">
                {destinations.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {setIsDropdownOpen(false);setDestination(item.name);setDestinationDesc(item.description);setDestinationIcon(item.icon)}}
                  >
                    <span>{item.icon}</span>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
          </div>
          <div>
          <div className="h-20 w-40 sm:w-32 xs:w-24 rounded-full hover:bg-stone-200 transition-all duration-200 p-4 flex flex-col items-center">
            <p>{date1==''?  `Check in`:date1}</p>
            {date1=='' && <p className="text-stone-500 text-sm">Add dates</p>}
            <input
              type="date"
              value={date1}
              onChange={(e)=>setDate1(e.target.value)}
              className="w-10 p-2 border rounded-md mt-1 transition-all focus:border-rose-500 focus:ring focus:ring-rose-200 opacity-0 z-10 absolute pt-9 pr-2"
            />
            <i className="fas fa-chevron-down"></i>
          </div>
          </div>
          <div>
          <div className="h-20 w-40 sm:w-32 xs:w-24 rounded-full hover:bg-stone-200 transition-all duration-200 p-4 flex flex-col items-center">
            <p>{date2==''? `Check out`: date2}</p>
            {date2=='' && <p className="text-stone-500 text-sm">Add dates</p>}
            <input
              type="date"
              value={date2}
              onChange={(e)=>setDate2(e.target.value)}
              className="w-10 p-2 border rounded-md mt-1 transition-all focus:border-rose-500 focus:ring focus:ring-rose-200 opacity-0 z-10 absolute pt-9 pr-2"
            />
            <i className="fas fa-chevron-down"></i>
          </div>
          </div>
          <div className="relative flex flex-row justify-center items-center">
          <div className="h-20 w-80 sm:w-48 xs:w-32 rounded-full hover:bg-stone-200 transition-all duration-200 p-4 flex flex-col items-center" onClick={()=>setGuestDropdown(!guestDropdown)} ref={guestRef}>
            <p>Who</p>
            <p className="text-stone-500 text-sm">{guests.adults + guests.children + guests.infants + guests.pets === 0
            ? "Add guests"
            : `${guests.adults + guests.children} guests, ${guests.infants} infants, ${guests.pets} pets`}</p>
             {/* Dropdown */}
        {guestDropdown && (
          <div className="absolute top-full left-0 w-[20rem] bg-white shadow-lg rounded-lg mt-2 p-4 z-50 border border-gray-200">
            {/* Adults */}
            <div className="flex justify-between items-center p-2">
              <div>
                <p className="font-semibold">Adults</p>
                <p className="text-sm text-gray-500">Ages 13 or above</p>
              </div>
              <div className="flex items-center">
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("adults", -1)}}>-</button>
                <span className="px-4">{guests.adults}</span>
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("adults", 1)}}>+</button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center p-2">
              <div>
                <p className="font-semibold">Children</p>
                <p className="text-sm text-gray-500">Ages 2–12</p>
              </div>
              <div className="flex items-center">
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("children", -1)}}>-</button>
                <span className="px-4">{guests.children}</span>
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("children", 1)}}>+</button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex justify-between items-center p-2">
              <div>
                <p className="font-semibold">Infants</p>
                <p className="text-sm text-gray-500">Under 2</p>
              </div>
              <div className="flex items-center">
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("infants", -1)}}>-</button>
                <span className="px-4">{guests.infants}</span>
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("infants", 1)}}>+</button>
              </div>
            </div>

            {/* Pets */}
            <div className="flex justify-between items-center p-2">
              <div>
                <p className="font-semibold">Pets</p>
                <p className="text-sm text-gray-500">Bringing a service animal?</p>
              </div>
              <div className="flex items-center">
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("pets", -1)}}>-</button>
                <span className="px-4">{guests.pets}</span>
                <button className="p-2 border rounded-full" onClick={(e) => {e.stopPropagation();updateGuests("pets", 1)}}>+</button>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-end mt-4">
              <button 
                className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
                onClick={() => setGuestDropdown(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}
          </div>
          <div className="h-14 w-14 text-white bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center mr-4">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Header;
