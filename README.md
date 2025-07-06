
Check it out now:https://trevas-qstocks-git-main-parikshit09-coders-projects.vercel.app/
🧠 TrevasQ Stocks — S&P 500 Dashboard
TrevasQ is a responsive frontend-only stock dashboard that visualizes real-time mock performance of S&P 500 companies. Built with React.js, it lets users view price changes, search tickers, and explore sparkline charts with time frame filters like 1D, 5D, 1M, etc.

✨ Features
🔍 Search S&P 500 stocks by ticker symbol
📊 Real-time mock price updates
📈 Sparkline mini-charts (1D, 5D, 1M...)
📌 Dropdown filter for selecting timeframes
🧪 Error Boundaries for safe rendering
💡 Loading states and graceful error handling
🎯 Clean, responsive UI built with Tailwind CSS

⚙️ Tech Stack
    React.js
    Tailwind CSS
    React Router DOM
    React Sparklines
    Mock data served from GitHub JSON file:https://raw.githubusercontent.com/Parikshit09-coder/stock-database/main/sp500_full_mock_data.json

# Steps to install
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/trevasq-stocks.git
cd trevasq-stocks

# 2. Install dependencies
npm install

# 3. Create .env file & add
VITE_URI_GRAPH_DATA=https://raw.githubusercontent.com/Parikshit09-coder/stock-database/main/sp500_full_mock_data.json

# 4. Start the development server
npm run dev

