import React from "react";
import Card from "./Card";

const ListaProizvoda = (props)=>{
return(
    <Card className='card'>
        <ul>
           <h2>Title: {props.title}</h2>
           <p>Price: {props.price} $</p>
           <p>Description: {props.description}</p>
           <p>Category: {props.category}</p>
           <img src={props.image} width='150' height='150'/>
        </ul> 
    </Card>
)
}
export default ListaProizvoda;