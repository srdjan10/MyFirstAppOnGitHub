import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '../component/Card';
import AddProduct from '../component/AddProduct';
import Filter from '../component/Filter';

function Product (event){

 const [alldata, setalldata]=useState([])
 const [filterData, setfilterData]=useState(alldata)


 const handleSearch = (event) => {
    let value = event.target.value
    let result = []
    console.log(value)

    result = alldata.filter((data) => {
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
    <><div>
      <div>
            <input className='search'
              type="text"
              onChange={(event)=> handleSearch (event)}
               placeholder="Search for..." />
      </div>
      </div>
      <div>
        <br/>
        <Filter/>
      </div>
    <div className='item-container'>
      {filterData.map((value) => {
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
    </div>
</>
  );
  }
export default Product;
