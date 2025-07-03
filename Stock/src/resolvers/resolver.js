import { replace } from "react-router-dom";



export const handleStockClick = (stock,navigate) => {
	
    navigate(`/stock/${stock.ticker}`, {
        state: {
            stockData: stock,
        },
      
    });
};