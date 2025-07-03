import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleStockClick } from '../../resolvers/resolver';
function RotatingInfo() {
    const [repoData, setInfo] = useState([]);
    const uri = import.meta.env.VITE_URI_GRAPH_DATA || 'https://raw.githubusercontent.com/Parikshit09-coder/stock-database/main/sp500_dummy_data.json';
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(uri);
                const data = await res.json();
                setInfo(Array.isArray(data) ? data : [data]); // Ensure it's always an array
            } catch (err) {
                console.error('Failed to fetch rotating info:', err);
            }
        }
        fetchData();
    }, [uri]);

    return (
        <div className="overflow-hidden w-full bg-gray-200 p-3 rounded-lg shadow-lg mb-0">
  <div className="animate-marquee whitespace-nowrap hover:animate-paused cursor-pointer">
    {repoData.map((stock) => (
    
      <span key={stock.ticker} onClick={()=>handleStockClick(stock,navigate)} className="mx-6 text-gray-800 font-medium border-2 border-gray-300 rounded-lg p-2 hover:bg-gray-300 transition-colors duration-300">
        {stock.companyName} ({stock.ticker}): ${stock.currentPrice?.toFixed(2)}  
        <span className={stock.percentChange1D >= 0 ? "text-green-600" : "text-red-600"}>
          {stock.percentChange1D > 0 ? "+" : ""}{stock.percentChange1D}%
        </span>
      </span>
     
    ))}
  </div>
</div>
    )
}

export default RotatingInfo;