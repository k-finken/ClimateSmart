import react from "react"
import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function ToolsCatalog() {
    
    const [value, setValue] = useState("");
    
    let plastic = "\u{1F9F4}"
    
    const handleItemClick = value => {
        setValue(value);
        console.log(`Waste item selected:`, value);
    };
    
    
  return ( 
<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <p className="text-3xl text-themeDark" style={{ width: 422 }}>Waste Decomposition Catalog</p>
      <div>
    
        <select>
          <option value="plastic"></option>
          <option value="paper"></option>
            <option value="metal"></option>
            <option value="organic"></option>
        </select>


      </div>
      
</div>
      );
}