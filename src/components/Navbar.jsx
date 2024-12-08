import React from "react";
import logo from "../Images/logo.jpg"

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-black text-white px-6 py-4 flex items-center justify-between z-50">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={logo} // Replace with your logo URL
          alt="FALKON Logo"
          className="w-10 h-10"
        />
        <div>
          <h1 className="text-lg font-bold">FALKON</h1>
          <p className="text-sm text-gray-400">BY PARADOX</p>
        </div>
      </div>

      {/* Middle Section: Links */}
      <ul className="hidden md:flex space-x-8 text-lg -ml-16">
        {/* Use -ml-16 to shift the section slightly to the left */}
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Features</li>
        <li className="hover:text-gray-400 cursor-pointer">Use Cases</li>
        <li className="hover:text-gray-400 cursor-pointer">Innovation</li>
        <li className="hover:text-gray-400 cursor-pointer">Impact</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>

      {/* Right Section: Button */}
      <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 text-sm">
        Get started - it's free
      </button>
    </div>
  );
};

export default Navbar;
