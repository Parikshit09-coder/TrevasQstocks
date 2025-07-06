import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import RotatingInfo from './components/RotatingInfo/RotatingInfo.jsx'
import App from './components/Main_console.jsx'
import StockPage from './components/StockPage/StockPage.jsx'
import TopRanks from './components/Rankings/TopRanks.jsx'
import BottomRanks from './components/Rankings/BottomRanks.jsx'

import ErrorBoundary from './resolvers/ErrorBoundaries.jsx'

createRoot(document.getElementById('root')).render(
   <ErrorBoundary>
    <BrowserRouter>
    <Navbar/>
    <RotatingInfo/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stock/:ticker" element={<StockPage />} />
      <Route path="/stock/top_ranks" element={<TopRanks />} />
    
      <Route path="/stock/bottom_ranks" element={<BottomRanks />} />
    
    </Routes>
    
    </BrowserRouter>,
  </ErrorBoundary>
)
