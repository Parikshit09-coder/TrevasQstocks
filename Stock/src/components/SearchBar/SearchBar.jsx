// src/components/SearchBar.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../../resolvers/ErrorBoundaries';
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allStocks, setAllStocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllStocks = async () => {
      const uri =
        import.meta.env.VITE_URI_GRAPH_DATA ||
        'https://raw.githubusercontent.com/Parikshit09-coder/stock-database/main/sp500_dummy_data.json';
      const res = await fetch(uri);
      const data = await res.json();
      setAllStocks(data);
    };

    fetchAllStocks();
  }, []);

  const handleSearchClick = () => {
    if (searchQuery.trim() === '') {
      alert('Please enter a ticker symbol to search.');
      return;
    }
    if (searchQuery.length < 6 || searchQuery.length > 6) {
      alert('Please enter a proper ticker symbol 6 (characters)');
      return;
    }

    navigate(`/stock/${searchQuery.capitalize()}`);
  };

  return (
    
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 border-2 border-gray-300 rounded-3xl px-4 py-2 shadow-sm">
        <input
        
          autoComplete="off"
          type="text"
          placeholder="Search Ticker..."
          value={searchQuery}
          onChange={(e) => {
            const query = e.target.value;
            setSearchQuery(query);
            const filtered = allStocks.filter((stock) =>
              stock.ticker.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(query ? filtered.slice(0, 5) : []);
          }}
          className="flex-grow outline-none bg-transparent text-black"
        />
        <button
  onClick={handleSearchClick}
  disabled={searchQuery && suggestions.length === 0}
  className={`px-3 py-1 rounded-full transition 
    ${searchQuery && suggestions.length === 0 
      ? 'bg-gray-400 text-white cursor-not-allowed' 
      : 'bg-blue-400 hover:bg-blue-600 text-white'
    }`}
>
  🔍
</button>
      </div>

     {searchQuery && (
  suggestions.length > 0 ? (
    <ul className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-md w-full">
      {suggestions.map((stock) => (
        <li
          key={stock.ticker}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
          onClick={() => {
            setSearchQuery(stock.ticker);
            setSuggestions([]); 
            navigate(`/stock/${stock.ticker}`);
          }}
        >
          {stock.ticker} — {stock.companyName}
        </li>
      ))}
    </ul>
  ) : !searchQuery && (
    <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-md w-full px-4 py-2 text-gray-500 italic">
      No matching results.
    </div>
  )
)}

    </div>
  );
}

export default SearchBar;
