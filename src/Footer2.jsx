import React from "react";

const Footer2 = () => {
  return (
    <footer className="w-full bg-gray-100 mt-10 py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 text-sm">
          {/* Explore Section */}
          <div>
            <h3 className="font-semibold mb-2">Explore other options in and around Nandi Hills</h3>
            <div className="grid grid-cols-2 gap-2">
              <span>Bengaluru Urban</span> <span>Vacation rentals</span>
              <span>Nandi Hills</span> <span>Vacation rentals</span>
              <span>Hosur</span> <span>Vacation rentals</span>
              <span>Kanakapura</span> <span>Vacation rentals</span>
              <span>Puttaparthi</span> <span>Vacation rentals</span>
              <span>Mandya</span> <span>Vacation rentals</span>
            </div>
          </div>

          {/* Other Stays Section */}
          <div>
            <h3 className="font-semibold mb-2">Other types of stays on Airbnb</h3>
            <ul>
              <li>Nandi Hills vacation rentals</li>
              <li>Nandi Hills monthly stays</li>
              <li>Pet-friendly vacation rentals</li>
              <li>Vacation rentals with a pool</li>
            </ul>
          </div>

          {/* Support / Hosting / Airbnb */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul>
                <li>Help Centre</li>
                <li>AirCover</li>
                <li>Disability Support</li>
                <li>Cancellation Options</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hosting</h3>
              <ul>
                <li>Airbnb your home</li>
                <li>AirCover for Hosts</li>
                <li>Hosting resources</li>
                <li>Join a hosting class</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Airbnb</h3>
              <ul>
                <li>Newsroom</li>
                <li>New features</li>
                <li>Careers</li>
                <li>Gift cards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Social Icons */}
        <div className="border-t mt-6 pt-4 flex justify-between items-center text-gray-600 text-sm">
          <p>© 2025 Airbnb, Inc. · Privacy · Terms · Sitemap</p>
          <div className="flex space-x-4">
            <span>🌐 English (CA)</span>
            <span>💲 CAD</span>
            <span>📷 🐦 🔗</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
