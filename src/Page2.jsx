import React from "react";
import Header3 from "./Header3"; // Use the Airbnb-like header
import Footer2 from "./Footer2"; // Use the correct footer
import { FaStar, FaShare, FaHeart } from "react-icons/fa";
import Header2 from "./Header2";
import ListingPage from "./ListingPage";

const Page2 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header3 /> {/* Updated Header */}
      <Header2 />
      <ListingPage />
      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default Page2;
