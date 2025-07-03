import React from 'react';
import trevaslogo from '../../assets/trevasqlogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-400 to-teal-800 px-4 py-2">
      <div className=" max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-2 ease-in-out duration-300">
        
       
        <div className="flex items-center space-x-2 sm:space-x-3 whitespace-nowrap">
         <Link to="/"> <img
            src={trevaslogo}
            alt="TrevasQ Logo"
            className="h-8 sm:h-12 md:h-16 w-auto transform transition-transform duration-300 hover:scale-150 ease-in-out "

          />
          </Link>
          <span className="text-violet-800 text-sm sm:text-base md:text-xl italic animate-fade-in-scale font-bold">
            TrevasQStocks
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-2 text-sm sm:text-base underline cursor-pointer">
          <Link to="/" className="text-pink-200 hover:text-gray-700 font-medium">Home |</Link>
          <Link to="/about" className="text-pink-200 hover:text-gray-700 font-medium">About |</Link>
          <Link to="/contact" className="text-pink-200 hover:text-gray-700 font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
