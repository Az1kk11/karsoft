import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.css';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

