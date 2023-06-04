import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store/index'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.css';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
          position="top-center"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

