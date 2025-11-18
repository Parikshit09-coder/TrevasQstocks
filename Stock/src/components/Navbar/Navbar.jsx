import React from 'react';
import Logo from "../../assets/trevasqlogo.png";
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx'; 

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-teal-400 to-teal-800 px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">

        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={Logo}
              alt="TrevasQ Logo"
              className="h-10 sm:h-14 w-auto transform transition-transform duration-300 hover:scale-150"
            />
          </Link>
          <span className="text-violet-800 text-lg sm:text-xl italic font-bold">
            TrevasQStocks
          </span>
        </div>

        
        <SearchBar />

        
        <div className="flex flex-wrap gap-2 text-sm sm:text-base items-center justify-center">
          <Link to="/" className="text-pink-200 hover:text-gray-700 font-medium underline"> Home</Link>
          <Link to="/about" className="text-pink-200 hover:text-gray-700 font-medium underline">About</Link>
          <Link to="/contact" className="text-pink-200 hover:text-gray-700 font-medium underline">Contact</Link>

          <button
            onClick={() => navigate('/stock/top_ranks')}
            className="bg-green-700 hover:bg-green-500 text-white font-semibold px-3 py-1 rounded-full shadow-md transition"
          >
            Top Gainers
          </button>
          <button
            onClick={() => navigate('/stock/bottom_ranks')}
            className="bg-red-700 hover:bg-red-500 text-white font-semibold px-3 py-1 rounded-full shadow-md transition"
          >
            Top Losers
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
