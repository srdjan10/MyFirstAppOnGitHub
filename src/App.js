import React, { useState, useEffect } from 'react';
import './App.css';
import webpict from './picture/marketplace-logo.png'
import axios from 'axios'
import Card from './component/Card';
import AddProduct from './component/AddProduct';
import { DateTime } from './component/DateTime';
import shoppicture from './picture/icon.png'
import Login from './page/Login';
import Contact from './page/Contact';
import CreditCard from './component/CreditCard';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Filter from './component/Filter';

function App (){
 const [alldata, setalldata]=useState([])
 const [filterData, setfilterData]=useState(alldata)

  const handleSearch =(event)=>{

  let value = event.target.value
  let result = []
  console.log (value)

   result = alldata.filter((data)=>{
    return data.title.search(value) != -1;
  })

  setfilterData(result);
 }

 useEffect(() => {
  axios('https://fakestoreapi.com/products')
  .then(response=>{
    console.log(response.data)
    setalldata(response.data)
    setfilterData(response.data)
  })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
}, []);
  return (
    <><div className="App">
      <header className="App-header">
        <strong>ONLINE MARKET</strong>
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
        <div><img src={shoppicture} width='70' height='70' alt="Shoping" /></div>
        <button className='formbutton' >Payment details</button>
      </div> 
        <div style={{ margin: '0 auto', marginTop: '3%' }}>
          <input className='search'
            type="text"
            onChange={(event) => handleSearch(event)} placeholder="Search for..." />
        </div>

      </header>
      <DateTime />
      <Filter/>
      <BrowserRouter>
    <nav className='item-container2'>
          <NavLink className='card3' exact activeClassName='current' to='/'> Home </NavLink>
          <NavLink className='card3'exact activeClassName='current' to='/Login'> Login </NavLink>
          <NavLink className='card3'exact activeClassName='current' to='/Contact'> Contact us </NavLink>
          <NavLink className='card3'exact activeClassName='current' to='/App'> App for your phone </NavLink>
    </nav>
    <Switch>
    <Route exact path="/Login" render={props => <Login {...props}/>} />
    <Route exact path="/Contact" render={props=> <Contact {...props} />}/>
    <Route excat path="/App" render={() => window.location = "https://play.google.com/store/apps"}  />
    </Switch> 
    </BrowserRouter>
      </div>
    <div className='item-container'>
        {filterData.map((value, index) => {
          return (
            <Card>
              {<Card className="card"
              key={value.id}>
              <h2> {value.title}</h2>
              <h3><b>Price: <i>{value.price} $</i></b></h3>
              <p><b>Description:</b> {value.description} </p>
              <p><b>Category:</b> {value.category}</p>
              <img className="card2" src={value.image} width='150' height='150'></img>
              <AddProduct />
              <button className='formbutton'>+ Add</button>
            </Card>}
            </Card>
          );
        })}
      </div></>
  );
  }

export default App;
