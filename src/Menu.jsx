import React from "react";
import { useState } from "react";
import { rooms } from "./rooms";
import Card from "./Card";
import { Link } from "react-router-dom";
import Filter from "./Filter";

function Menu(){
  const [isTaxIncluded, setIsTaxIncluded] = useState(false);
  const [selected, setSelected] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
    <div className="flex items-center gap-6 overflow-x-auto px-4 pl-12 py-4 justify-start overflow-auto">
      {showFilter && <Filter setShowFilter={setShowFilter} />}
      {/* Category Items */}
      <div className={`flex flex-col items-center cursor-pointer ${selected==1 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(1)}>
        <p className={`${selected==1 ? 'font-medium':''}`}>Amazing pools</p>
        {selected==1 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==2 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(2)}>
        <p className={`${selected==2 ? 'font-medium':''}`}>Icons</p>
        {selected==2 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==3 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(3)}>
        <p className={`${selected==3 ? 'font-medium':''}`}>Farms</p>
        {selected==3 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==4 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(4)}>
        <p className={`${selected==4 ? 'font-medium':''}`}>Amazing views</p>
        {selected==4 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==5 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(5)}>
        <p className={`${selected==5 ? 'font-medium':''}`}>Skiing</p>
        {selected==5 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==6 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(6)}>
        <p className={`${selected==6 ? 'font-medium':''}`}>Arctic</p>
        {selected==6 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==7 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(7)}>
        <p className={`${selected==7 ? 'font-medium':''}`}>Rooms</p>
        {selected==7 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==8 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(8)}>
        <p className={`${selected==8 ? 'font-medium':''}`}>Cabins</p>
        {selected==8 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==9 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(9)}>
        <p className={`${selected==9 ? 'font-medium':''}`}>Countryside</p>
        {selected==9 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      <div className={`flex flex-col items-center cursor-pointer ${selected==10 ? '':'text-gray-500 hover:text-black transition duration-200'}`} onClick={()=>setSelected(10)}>
        <p className={`${selected==10 ? 'font-medium':''}`}>Treehouses</p>
        {selected==10 && <div className="w-8 border-b-2 border-black mt-1"></div>}
      </div>

      {/* Right Arrow Button */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:shadow-md transition duration-200">
        <span>&gt;</span>
      </div>

      {/* Filters Button */}
      <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:shadow-md transition duration-200" onClick={()=>setShowFilter(true)}>
        <span className="mr-2">⚙</span> Filters
      </button>

      {/* Toggle Switch */}
      <div
        className="flex items-center border border-gray-300 px-4 py-2 rounded-lg hover:shadow-md transition duration-200 cursor-pointer"
        onClick={() => setIsTaxIncluded(!isTaxIncluded)}
      >
        <p className="mr-2">Display total before taxes</p>
        <div
          className={`w-10 h-5 rounded-full flex items-center p-1 transition ${
            isTaxIncluded ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow transition transform ${
              isTaxIncluded ? "translate-x-5" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10">
    {rooms.map((property, index) => (
      <Card key={property.id} {...property} roomNo={index}/>
    ))}
    </div>
    <div className="flex flex-col justify-center items-center gap-4 mb-4">
        <p className="font-semibold text-xl">Continue exploring amazing pools</p>
        <div className="h-10 w-32 bg-gray-800 hover:bg-gray-950 rounded-lg text-white p-4 flex items-center justify-center">
            Show more
        </div>
    </div>
    </div>
  );
}

export default Menu;