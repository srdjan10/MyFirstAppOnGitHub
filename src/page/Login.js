import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../page/Login.css'
import AuthContext from "../store/auth-context";

const Login =()=>{

const emailInputRef = useRef();
const passwordInputREf = useRef();

const [isLoading, setisLoading] = useState(false)

const authCtx = useContext(AuthContext)

const [isLogin, setIsLogin] = useState(true)

const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

const submitHandler =(event)=>{
    event.preventDefault();

const enteredEmail = emailInputRef.current.value; 
const enteredPassword = passwordInputREf.current.value;   

setisLoading(true)
let url;
if(isLogin){
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8G6UVrSETntf4oUqrkZ4luMzd_H1zxnU'

}
else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8G6UVrSETntf4oUqrkZ4luMzd_H1zxnU'
}
fetch(url,{
    method:'POST',
    body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
    }),
    headers:{
        'Content-Type': 'aplication/json',
    } 
}).then((res)=>{
    setisLoading(false)
    if(res.ok){
        return res.json();
    }else{
        return res.json().then((data)=>{
            let errorMessage = 'Autentification faild';
            throw new Error(errorMessage);
        })
    }
}).then((data)=>{
    authCtx.login(data.idToken);
}).catch((err)=>{
    alert(err.message)
}) 

}
return(
    <div>
    <form className="auth" onSubmit={submitHandler}>
        <div>
       <label>Username (your email)</label>
       <input type='text' name="username" placeholder="Email..." required ref={emailInputRef}/>
       </div>
       <div >
       <label>Password</label>
       <input type='password' name="password" placeholder="Password..." required ref={passwordInputREf}/><br/>
       <div>
        {!isLoading && (
            <button className="loginbutton" onClick={switchAuthModeHandler}>Login</button>
        )}
         {isLoading && <p>Sending request...</p>}
         <Link to='/' style={{textDecoration:'none'}}>
       <button className="loginbutton" >Cancel</button>
       </Link>
       </div>
       </div>
    </form>
    </div>
)
}
export default Login;