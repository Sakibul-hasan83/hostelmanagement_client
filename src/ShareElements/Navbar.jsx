import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <li><a className="hover:text-emerald-300 font-medium transition-colors">Home</a></li>
      <li><a className="hover:text-emerald-300 font-medium transition-colors">Rooms</a></li>
      <li><a className="hover:text-emerald-300 font-medium transition-colors">Apply</a></li>
      <li><a className="hover:text-emerald-300 font-medium transition-colors">Contact</a></li>
    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-700 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 lg:px-8 h-16 w-full relative">

        {/* Small Screen: Left Hamburger Menu */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"} />
            </svg>
          </button>
        </div>

        {/* Logo Center */}
        <a className="text-xl sm:text-2xl font-extrabold tracking-wider absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            🏨 GreenStay
          </span>
        </a>

        {/* Large Screen: Links Center */}
        <ul className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {links}
        </ul>

        {/* Login Button */}
        <div className="absolute right-4 lg:static" >
            <Link to={'/login'} className="btn bg-emerald-500 hover:bg-emerald-400 border-none text-white font-semibold shadow-md hover:scale-105 transform transition-all duration-300 text-sm sm:text-base">
          Login
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="lg:hidden bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-700 text-white flex flex-col space-y-2 px-4 py-4 mt-1 shadow-md">
          {links}
          <li>
            <a className="btn w-full bg-emerald-500 hover:bg-emerald-400 border-none text-white font-semibold mt-2">
              Login
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
