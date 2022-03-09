import React from "react";
import classes from '../component/CreditCard.css'

const CreditCard =()=>{

    return(
<div className="creditcard">
  <div className="top-card">
    <h2 className="payment">PAYMENT<br/>DETAILS</h2>
    <h1 className="visa">VISA</h1>
  </div>
  <div className="bottom-card">
    <div className="row-1">
      <div className="card-holder-element">
        <h6 className="row-1-grey">CARDHOLDER'S NAME</h6>
        <input className="textbox1" contenteditable="true" placeholder="name...."></input>
      </div>
      <div className="card-number-element">
        <h6 className="row-1-grey">CARD NUMBER</h6>
        <input className="textbox1" contenteditable="true" placeholder="xxxx-xxxx-xxxx-xxxx" maxLength='16'></input>
      </div>
    </div>
    <div className="row-2">
      <div className="expiry-date-element">
        <h6 className="row-2-grey">EXPIRY DATE</h6>
           <select>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <div className="expiry-date-element">
        <h6 className="row-2-grey">&nbsp;</h6>
           <select>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
        </select>
      </div>
      <div className="cvv-element">
        <h6 className="row-2-grey">CVV</h6>
        <input className="textbox2" contenteditable="true" placeholder="number..."></input>
      </div>
    </div>
  </div>
</div>
    )
}

export default CreditCard;