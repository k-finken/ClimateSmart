import React from "react";

function calc_footprint() {
    alert("alert")
    var car = parseFloat(document.getElementById("owncarCheck").value);
    var mg = parseFloat(document.getElementById("mileageInput").value);
    var mls = parseFloat(document.getElementById("milesInput").value);
    document.getElementById("footprint").value = mg.toString();
return
}

export default function ToolsCarbon() {
  return (
<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <p className="text-3xl text-themeDark" style={{ width: 422 }}>Carbon Footprint Calculator</p>
  <form action="" method="post" onsubmit="return false;">
      <div className="form-group form-check text-center mb-6">
      <input type="checkbox" className="form-check-input h-4 w-4 mr-2 border border-gray-300 rounded-sm bg-white" id="owncarCheck"/>
      <label className="form-check-label inline-block text-themeDark" for="owncarCheck">Do you own at least 1 car?</label>
    </div>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="mileageInput" placeholder="Enter the mileage of your vehicle"/>
      </div>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="milesInput" placeholder="Enter the miles driven by your vehicle"/>
      </div>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="peopleInput" placeholder="Enter the number of people in your household"/>
      </div>
      <div classname="form-group">
      <label className="form-check-label inline-block text-themeDark" for="footprint">Your footprint: </label>
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="footprint" value="0" readonly/>
      </div>
    <button type="button" onclick="calc_footprint()" className="text-themeDark pt-4" >
      Calculate
      </button>
  </form>
</div>
      );
}