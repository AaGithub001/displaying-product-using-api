import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Addproduct from './pages/Addproduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path = "/product" element={<App/>}/>
    <Route path = "/" element={<Addproduct/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
