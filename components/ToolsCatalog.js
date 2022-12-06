import react from "react"
import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function ToolsCatalog() {
    
    let currentDateObj = new Date();
    let init = currentDateObj.toDateString();
    
    const [value, setValue] = useState("______");
    const [decompDate, setDecompDate] = useState(init);
    
    const waste = {
        plastic: 365000,
        paper: 42,
        metal: 36500,
        organic: 32
    }
    
    
    const handleItemClick = (e) => {
        setValue(e.target.value);
        var currentDateObj = new Date();
        var numberOfMlSeconds = currentDateObj.getTime();
        let de = 0;
        if (value == "plastic") {
            de = waste.plastic;
        }
        else if (value == "paper"){
            de = waste.paper;
        }
        else if (value == "metal"){
            de = waste.metal;
        }
        else {
            de = waste.organic;
        }
        var addMlSeconds = de * 24 * 60 * 60 * 1000;
        var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
        var decompDate = newDateObj.toDateString();
        setDecompDate(decompDate);
        console.log(`Waste item selected:`, value);
    };
    
    
  return ( 
<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <p className="text-3xl text-themeDark" style={{ width: 422 }}>Waste Decomposition Catalog</p>
      <div>
    
        <select onChange={(e) => handleItemClick(e)}>
          <option value="plastic">Plastic</option>
          <option value="paper">Paper</option>
          <option value="metal">Metal</option>
          <option value="organic">Organic</option>
        </select>
      </div>
      <div>
        <p>If you threw away {value} waste today, it would likely decompose by</p>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <p className="text-3xl text-themeDark center"> {decompDate}</p>
      </div>
      </div>
      
</div>
      );
}