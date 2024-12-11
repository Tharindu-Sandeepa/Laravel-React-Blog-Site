import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pinimg.com/736x/2f/96/75/2f9675d84074cedbe67dbf40a5aeb500.jpg"
            alt="DevWrite Logo"
            className="h-14 w-14 rounded-full border-2 border-white"
          />
          <h1 className="text-2xl font-extrabold tracking-tight">
            <Link to="/" className="hover:text-yellow-300 transition">
              DevWrite
            </Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-lg font-medium hover:text-yellow-300 transition"
          >
            Home
          </Link>
          <Link
            to="/myblogs"
            className="text-lg font-medium hover:text-yellow-300 transition"
          >
            My Blogs
          </Link>
          <Link
            to="/addblog"
            className="text-lg font-medium hover:text-yellow-300 transition"
          >
            Add Blog
          </Link>
        </div>

        {/* CTA Button */}
       
      </div>
    </nav>
  );
};

export default Navbar;