import React from "react";

function calc_footprint() {
    var car = document.getElementById("owncarCheck").value;
    var mg = document.getElementById("mileageInput").value;
    var mls = document.getElementById("milesInput").value;
return
}

export default function ToolsCarbon() {
  return (
<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md center">
      <p className="text-3xl text-black" style={{ width: 422 }}>Carbon Footprint Calculator</p>
  <form>
      <div className="form-group form-check text-center mb-6">
      <input type="checkbox"
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="owncarCheck" checked/>
      <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Do you own at least 1 car?</label>
    </div>
    <div className="form-group mb-6">
      <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="mileageInput" placeholder="Enter the mileage of your vehicle"/>
      </div>
    <div className="form-group mb-6">
      <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="milesInput" placeholder="Enter the miles driven by your vehicle"/>
      </div>
    <div className="form-group mb-6">
      <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="peopleInput" placeholder="Enter the number of people in your household"/>
      </div>
    <button type="submit" className="">
      Send
      </button>
  </form>
</div>
      );
}