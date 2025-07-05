export const generateRandomValue = (stock) => {

    setInterval(()=>{const randomChange = (Math.random() * 2 - 1).toFixed(2); 
    const randomPrice = (stock.currentPrice + parseFloat(randomChange)).toFixed(2); 
    
    stock.percentChange1D = parseFloat((randomPrice-stock.currentPrice)/stock.currentPrice * 100).toFixed(2);
    stock.currentPrice = parseFloat(randomPrice);
    stock.performance['1D'].push(parseFloat(randomPrice));
    stock.performance['1D'].shift();
    console.log(`Updated ${stock.ticker}: Price: $${stock.currentPrice}, Change: ${stock.percentChange1D}%`);

},1000)
    
}