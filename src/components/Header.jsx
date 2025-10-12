import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import logo from "../assets/ASTLE.png";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="font-sans relative">
      {/* Top Dummy Bar */}
      <div className="bg-blue-900 text-white text-sm px-4 py-2 text-center">
        Quality seafood exports — fresh, frozen, trusted worldwide.
      </div>

      {/* Header */}
      <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto mr-4" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/home" className="hover:text-blue-700">Home</Link>
          <Link to="/about" className="hover:text-blue-700">About Us</Link>
          <Link to="/process" className="hover:text-blue-700">Process</Link>
          <Link to="/products" className="hover:text-blue-700">Products</Link>
          {/* <Link to="/brands" className="hover:text-blue-700">Blogs</Link>
          <Link to="/blogs" className="hover:text-blue-700">Galleries</Link> */}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/contactus"
            className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} className="text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4 px-6">
          <Link to="/home" onClick={() => setSidebarOpen(false)} className="text-gray-700 font-medium hover:text-blue-700">Home</Link>
          <Link to="/about" onClick={() => setSidebarOpen(false)} className="text-gray-700 font-medium hover:text-blue-700">About Us</Link>
          <Link to="/process" onClick={() => setSidebarOpen(false)} className="text-gray-700 font-medium hover:text-blue-700">Process</Link>
          <Link to="/products" onClick={() => setSidebarOpen(false)} className="text-gray-700 font-medium hover:text-blue-700">Products</Link>
          {/* <Link to="/brands" onClick={() => setSidebarOpen(false)} className="text-gray-700 font-medium hover:text-blue-700">Brands</Link>
          <Link to="/blogs" onClick={() => setSidebarOpen(false)} className="text-gray-700 font-medium hover:text-blue-700">Blogs and Galleries</Link> */}

          {/* Contact Button */}
          <Link
            to="/contactus"
            onClick={() => setSidebarOpen(false)}
            className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition mt-2 text-center"
          >
            Contact Us
          </Link>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-700 hover:text-blue-900">FB</a>
            <a href="#" className="text-blue-700 hover:text-blue-900">IG</a>
            <a href="#" className="text-blue-700 hover:text-blue-900">TW</a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Header;
