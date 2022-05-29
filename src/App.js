import React, { useState } from 'react';
import './App.css';
import webpict from './picture/marketplace-logo.png'
import { DateTime } from './component/DateTime';
import shoppicture from './picture/icon.png'
import Login from './page/Login';
import Contact from './page/Contact';
import CreditCard from './component/CreditCard';
import MoreProduct from './page/MoreProduct';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Filter from './component/Filter';
import NavBar from './component/NavBar';
import Product from './page/Product';
import handleSearch from './page/Product'
import Welcome from './page/Welcome';
import { Link } from 'react-router-dom';


function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Link to='/' style={{textDecoration:'none'}}>
          <strong className="App-header" >ONLINE MARKET</strong>
          </Link>
          <img className='App-logo' src={webpict} alt="Online market" />
          <div className="App-headertwo">
            <tbody>
              <tr>
                <td>Items:</td>
                <td>
                  <strong>0</strong>
                </td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>
                  <strong> 0 $</strong>
                </td>
              </tr>
            </tbody>
            <div><img src={shoppicture} width='50' height='50' alt="Shoping" /></div>
            <NavLink to='/CreditCard'>
              <button className='formbutton'>Payment details</button>
            </NavLink>
          </div>
        </header>
        {/* <DateTime /> */}
        <NavBar />
        <Switch>
        <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/Product">
            <Product/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/App" render={() => window.location = "https://play.google.com/store/apps"}>
          </Route>
          <Route path="/MoreProduct">
            <MoreProduct />
          </Route>
          <Route path="/CreditCard">
            <CreditCard />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
