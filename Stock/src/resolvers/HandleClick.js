



export const handleStockClick = (stock,navigate) => {
	
    navigate(`/stock/${stock.ticker}`, {
        state: {
            stockData: stock,
        },
      
    });
};

