import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { fetchBottom20 } from '../../resolvers/SortURIFetcher.js';
import { handleStockClick } from '../../resolvers/HandleClick.js';

function BottomRanks() {
  const uri =
    import.meta.env.VITE_URI_GRAPH_DATA ||
    'https://raw.githubusercontent.com/Parikshit09-coder/stock-database/main/sp500_dummy_data.json';

  const [repoData, setRepoData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(uri);
        const data = await res.json();

      

        const updatedData = data.map((stock) => {
          const price5d = stock.performance?.['5D'];
          const percentChange5D =
            ((price5d[price5d.length - 1] - price5d[0]) / price5d[0]) * 100;

          return {
            ...stock,
            percentChange5D: percentChange5D.toFixed(2),
          };
        });
   const bottomLosers = fetchBottom20(updatedData);
        setRepoData(bottomLosers);
      } catch (err) {
        console.error('Failed to fetch JSON:', err);
      }
    };

    fetchData();
  }, []);

  if (!repoData)
    return (
      <div className="flex h-[100vh] text-8xl justify-center items-center rounded-lg p-4 bg-gray-100">
        <div className="w-16 h-16 border-8 border-dashed border-blue-600 rounded-full animate-spin"></div>
        <div className="text-gray-600 font-semibold italic ml-4 text-2xl">Loading Bottom Losers...</div>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mt-0">
      <h1 className="text-3xl font-extrabold text-red-700 mb-6 underline">Bottom Rankers - Losers(1D)</h1>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full bg-white shadow-md rounded-lg overflow-hidden cursor-pointer text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-xs sm:text-sm leading-normal" tabIndex={-1}>
              <th className="py-3 px-4 sm:px-6 text-left hover:bg-gray-300">Company Name</th>
              <th className="py-3 px-4 sm:px-6 text-left hover:bg-gray-300">Ticker</th>
              <th className="py-3 px-4 sm:px-6 text-left hover:bg-gray-300">Current Price</th>
         
              <th className="py-3 px-4 sm:px-6 text-left hover:bg-gray-300">% Change 5D</th>
              <th className="py-3 px-4 sm:px-6 text-left hover:bg-gray-300">1D Performance</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-light">
            {repoData.map((stock) => (
              
              <tr
                key={stock.ticker}
                className="border-b border-gray-200 hover:bg-gray-100 transition-all"
                onClick={() => handleStockClick(stock, navigate)}
              >
                <td className="py-2 px-4 sm:px-6 font-bold">{stock.companyName}</td>
                <td className="py-2 px-4 sm:px-6 font-semibold">{stock.ticker}</td>
                <td className="py-2 px-4 sm:px-6 font-medium">${stock.currentPrice.toFixed(2)}</td>
                
                <td
                  className={`py-2 px-4 sm:px-6 font-medium ${
                    stock.percentChange5D >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stock.percentChange5D > 0 ? '+' : ''}
                  {stock.percentChange5D}%
                </td>
                <td className="py-2 px-4 sm:px-6">
                  <Sparklines data={stock?.performance?.['5D']} width={100} height={20} margin={5}>
                    <SparklinesLine color={stock.percentChange5D >= 0 ? 'green' : 'red'} />
                  </Sparklines>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BottomRanks;
