import React from "react";
import classes from '../component/Card.css'

const Login =()=>{

return(
    <div>
    <form className="form-box">
        <div>
       <label>Username</label>
       <input type='text' name="username" placeholder="Username..."/>
       </div>
       <div >
       <label>Password</label>
       <input type='password' name="password" placeholder="Password..."/><br/>
       <div>
       <button className="loginbutton">Login</button>
       <button className="loginbutton">Cancel</button>
       </div>
       </div>
    </form>
    </div>
)


}

export default Login;