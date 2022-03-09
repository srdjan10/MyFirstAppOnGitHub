import React from "react";
import Input from "./Input";
import classes from '../App.css'

const AddProduct = props =>{

return(
    <form className="form" >
        <Input label = "Number:" input ={{
            id:'index',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}
        />
    </form>
)
}
export default AddProduct;