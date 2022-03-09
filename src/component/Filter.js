import React from "react";
import classes from '../component/Filter.css'


const Filter =({category, handleSelect})=>{

return(
    <div>
        <select className="category" value={category} onChange={handleSelect}>
            <option value=''>Select category...</option>
            <option value='mens clothing'>men's clothing</option>
            <option value='womens clothing'>women's clothing</option>
            <option value='jewelery'>jewelery</option>
            <option value='electronics'>electronics</option>
        </select>
    </div>

)
}
export default Filter;