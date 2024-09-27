import React from 'react';
import ReactDOM from 'react-dom/client';
import './index';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
  <Home />
  </BrowserRouter>,
  
 
);

