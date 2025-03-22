import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 mt-0 border-t border-gray-300">
      {/* Top Section - Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-black">Support</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Help Centre</a></li>
            <li><a href="#" className="hover:underline">AirCover</a></li>
            <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
            <li><a href="#" className="hover:underline">Disability support</a></li>
            <li><a href="#" className="hover:underline">Cancellation options</a></li>
            <li><a href="#" className="hover:underline">Report neighbourhood concern</a></li>
          </ul>
        </div>

        {/* Hosting Section */}
        <div>
          <h3 className="font-semibold text-black">Hosting</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Airbnb your home</a></li>
            <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
            <li><a href="#" className="hover:underline">Hosting resources</a></li>
            <li><a href="#" className="hover:underline">Community forum</a></li>
            <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            <li><a href="#" className="hover:underline">Join a free Hosting class</a></li>
            <li><a href="#" className="hover:underline">Find a co-host</a></li>
          </ul>
        </div>

        {/* Airbnb Section */}
        <div>
          <h3 className="font-semibold text-black">Airbnb</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">New features</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-500 text-xs">&copy; 2025 Airbnb, Inc. • Privacy • Terms • Sitemap • Company details</p>

          {/* Language, Currency, and Social Icons */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <span>🌐</span> <span>English (IN)</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <span>₹</span> <span>INR</span>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-black">📘</a> {/* Facebook */}
              <a href="#" className="hover:text-black">🐦</a> {/* Twitter */}
              <a href="#" className="hover:text-black">📸</a> {/* Instagram */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
