import React from "react";
import { NavLink } from "react-router-dom";

const NavBar =()=>{

    return(
<div className="item-container2">
    <nav >
        <button className="card3">
            <NavLink to="/Product" style={{textDecoration:'none'}}>Our products</NavLink>
        </button>
    </nav>
    <nav>
        <button className="card3">
            <NavLink to="/Login" style={{textDecoration:'none'}}>Login</NavLink>
        </button>
    </nav> 
    <nav>
        <button className="card3">
            <NavLink to="/App" style={{textDecoration:'none'}}>App for your phone</NavLink>
        </button>
    </nav> 
    <nav>
        <button className="card3">
            <NavLink to="/MoreProduct" style={{textDecoration:'none'}}>More products</NavLink>
        </button>
    </nav> 
    <nav>
        <button className="card3">
            <NavLink to="/Contact" style={{textDecoration:'none'}}>Contact</NavLink>
        </button>
    </nav> 
</div>
    )

}
export default NavBar;