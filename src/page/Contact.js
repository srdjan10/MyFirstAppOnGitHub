import React from "react";
import classes from '../page/Contact.css'

const Contact =()=>{

return(
<section className="contact">
  <div className="form-box">
    <h2>Contact Us</h2>
    <form action="">
      <div className="form-item">
        <label for="name">Your name:</label>
        <input type="text" name="name" id="name" placeholder="name"/>
      </div>
      <div className="form-item">
        <label for="email">Your email:</label>
        <input type="email" name="email" id="email" placeholder="example@domain.com"/>
      </div>
      <div className="form-item">
        <label for="message">Your message:</label>
        <textarea name="message" id="message" cols="30" rows="7" placeholder="If you want write us"></textarea>
      </div>
      <div>
          <button className="formbutton">Submit</button>
      </div>
    </form>
  </div>
</section>
)
}
export default Contact;