import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar/navbar.jsx'
import RotatingInfo from './components/RotatingInfo/RotatingInfo.jsx'
import App from './components/Main_console.jsx'
import StockPage from './components/StockPage/StockPage.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <RotatingInfo/>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/stock/:ticker" element={<StockPage />} />
  </Routes>
   
  </BrowserRouter>,
)
