import React from "react";


const Filter =(value)=>{

const items = [
  { value: "Select category...",},
  { value:'mens clothing' },
  { value:'womens clothing' },
  { value:'jewelery' },
  { value:'electronics'},
]

return(
    <select className="card4">
        {items.map((categor) => (
              <option value={categor.value}>{categor.value}</option>
            ))}
    </select>

)
}
export default Filter;
