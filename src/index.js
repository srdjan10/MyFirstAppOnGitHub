import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './component/Footer';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context';



ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </AuthContextProvider>
    <Footer/> 
   </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
