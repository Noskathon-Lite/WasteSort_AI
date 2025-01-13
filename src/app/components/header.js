import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#709965] text-white p-3 shadow-md z-50">
      <div className="flex justify-between items-center">
        {/* Logo or Title Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Waste Sort</h1>
        </div>
        
        {/* Navigation Menu */}
        <div className="flex items-center">
          <nav>
            <ul className="flex space-x-6">  
              {/* <li>
                <a href="/upload" className="hover:text-gray-300">
                  Upload+
                </a>
              </li> */}
              <li>
                <a href="/Aboutus" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
