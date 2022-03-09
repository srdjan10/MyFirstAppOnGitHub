import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './component/Footer';
import Contact from './page/Contact';


ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Footer/> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
