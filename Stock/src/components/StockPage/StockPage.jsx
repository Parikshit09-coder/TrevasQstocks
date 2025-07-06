import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function StockPage() {
  const uri =
    import.meta.env.VITE_URI_GRAPH_DATA ||
    'https://raw.githubusercontent.com/Parikshit09-coder/stock-database/main/sp500_dummy_data.json';

  const { ticker } = useParams();
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(uri);
        const data = await res.json();

        const filteredStock = data.filter((item) => item.ticker === ticker);
        setStockData(filteredStock);

        const intervalId = setInterval(() => {
          setStockData((prevData) => {
            try {
              return prevData.map((stock) => {
                const randomChange = (Math.random() * 3 - 1).toFixed(2);
                const newPrice = (
                  parseFloat(stock.currentPrice) + parseFloat(randomChange)
                ).toFixed(2);

                const percentChange = (
                  ((newPrice - stock.currentPrice) / stock.currentPrice) *
                  100
                ).toFixed(2);

                const updatedPerformance = [...(stock.performance?.['1D'] || [])];
                updatedPerformance.push(parseFloat(newPrice));
                if (updatedPerformance.length > 6) updatedPerformance.shift();

                return {
                  ...stock,
                  currentPrice: parseFloat(newPrice),
                  percentChange1D: parseFloat(percentChange),
                  performance: {
                    ...stock.performance,
                    '1D': updatedPerformance,
                  },
                };
              });
            } catch (error) {
              console.error('Error updating stock data:', error);
              return prevData;
            }
          });
        }, 5000);

        return () => clearInterval(intervalId);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [ticker]);

  if (stockData.length === 0) {
    return (
      <div className="flex h-screen text-xl justify-center items-center p-4 mt-[5%]">
        <div className="w-16 h-16 border-8 border-dashed border-blue-600 rounded-full animate-spin mr-4" />
        <div className="text-gray-600 font-semibold italic">Loading Data...</div>
      </div>
    );
  }

  return (
   <div className="h-auto mt-10 mx-4 sm:mt-12 max-w-[80%] ml-auto mr-auto">
  {stockData.map((stock) => (
    <div
      key={stock.ticker}
      className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-[60%_40%] gap-6 border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out mb-6"
    >
    <div className='grid grid-cols-1 sm:grid-cols-[40%_60%] gap-6'>
      <div className="flex flex-col justify-center space-y-3">
        <h1 className="text-4xl font-bold text-gray-900">{stock.companyName}</h1>
        <h2 className="text-2xl font-semibold text-blue-700 tracking-wider uppercase">{stock.ticker}</h2>

        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-600">Current Price:</span>
          <span className="text-xl font-bold text-black">${stock.currentPrice.toFixed(2)}</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-600">Change Today:</span>
          <span
            className={`text-xl font-semibold ${
              stock.percentChange1D >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {stock.percentChange1D >= 0 ? '+' : ''}
            {stock.percentChange1D.toFixed(2)}%
          </span>
        </div>
      
      
      </div>
          <div>
           <li>
            <ul>dsa</ul>
            <ul>as</ul>
            <ul>das</ul>
           </li>
          </div>
  
  </div>
      
      <div className="flex justify-center items-center border-l border-gray-300 pl-6">
        <Sparklines data={stock.performance?.['1D'] || []} width={200} height={80}>
          <SparklinesLine
            color={stock.percentChange1D >= 0 ? 'green' : 'red'}
            style={{ fill: 'none', strokeWidth: 3 }}
          />
        </Sparklines>
      </div>
    </div>
  ))}
</div>

  );
}

export default StockPage;
