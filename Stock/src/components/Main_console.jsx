import React from 'react';
import { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useNavigate } from 'react-router-dom';
import { handleStockClick } from '../resolvers/resolver.js'
function App() {

  const navigate = useNavigate();
  
  const [repoData, setRepoData] = useState(null);
  const uri = import.meta.env.VITE_URI_GRAPH_DATA || 'https://raw.githubusercontent.com/Parikshit09-coder/stock-database/main/sp500_full_mock_data.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          uri
        );
        const data = await res.json();
        setRepoData(data);
     
      } catch (err) {
        console.error('Failed to fetch JSON:', err);
      }
    };

    fetchData();
  }, []);

  if (!repoData) return <p className='text-red-600 font-bold'>Loading...</p>;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mt-0'>
      <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden cursor-pointer'>
        <thead>
          <tr className='bg-gray-200 text-gray-700 uppercase text-sm leading-normal'>
            <th className='py-3 px-6 text-left'>Company Name</th>
            <th className='py-3 px-6 text-left'>Ticker</th>
            <th className='py-3 px-6 text-left'>Current Price</th>
            <th className='py-3 px-6 text-left'>Percent change 1D</th>
            <th className='py-3 px-6 text-left'>1D Performance</th>
          </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-light'>
          {repoData.map((stock) => (
            
            <tr key={stock.ticker} className='border-b border-gray-200 hover:bg-gray-100' onClick={() => handleStockClick(stock, navigate)}>
              <td className='py-3 px-6 font-bold'>{stock.companyName}</td>
              <td className='py-3 px-6 font-semibold'>{stock.ticker}</td>
              <td className='py-3 pl-12 font-medium'>${stock.currentPrice.toFixed(2)}</td>
              <td className={`py-3  pl-12 font-medium ${stock.percentChange1D >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock.percentChange1D > 0 ? '+' : ''}{stock.percentChange1D}%
              </td>
              <td className='py-3 px-3'>
                <Sparklines 
                  data={stock?.performance?.["1D"]} 
                  width={100} 
                  height={20} 
                  margin={5}
                >
                  <SparklinesLine 
                    color={stock.percentChange1D >= 0 ? 'green' : 'red'} 
                  />
                </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;