import react from "react"
import { useState } from "react";
import ReactDOM from "react-dom/client";


export default function ToolsCarbon() {

    // footprint input values

    const [owncar, setOwncar] = useState(false);
    const [mileage, setMileage] = useState("");
    const [miles, setMiles] = useState("");
    const [people, setPeople] = useState("");

    // calculated footprint states
    const [calculated, setCalculated] = useState(0);

    const calcSubmit = (e) => {
        e.preventDefault(); // prevent form submit
        let calc = (owncar == true) * (parseInt(mileage) * parseInt(miles) * 19.6) + parseInt(people)*2.5
        setCalculated(calc +" ppm CO2");
        console.log("refresh prevented");
    };


  return (

<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <p className="text-3xl text-themeDark" style={{ width: 422 }}>Carbon Footprint Calculator</p>
  <form onSubmit={calcSubmit}>
      <div className="form-group form-check text-center mb-6">
      <input type="checkbox" className="form-check-input h-4 w-4 mr-2 border border-gray-300 rounded-sm bg-white" id="owncarCheck" value="unchecked" onChange={(e) => setOwncar(!owncar)}/>
      <label className="form-check-label inline-block text-themeDark" for="owncarCheck">Do you own at least 1 car?</label>
    </div>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="mileageInput" placeholder="Enter the mileage of your vehicle" value={ mileage } onChange={(e) => setMileage(e.target.value)}/>
      </div>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="milesInput" placeholder="Enter the miles driven by your vehicle" value={miles} onChange={(e) => setMiles(e.target.value)}/>
      </div>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="peopleInput" placeholder="Enter the number of people in your household" value={people} onChange={(e) => setPeople(e.target.value)}/>
      </div>

        <div classname="form-group">
      <label className="form-check-label inline-block text-themeDark" for="calculated">Your footprint: </label>
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="calculated" value={calculated} readonly />

            <input type="submit" className="text-themeDark pt-4" value="Calculate">
            </input>
    </div>
    <div className="form-group mb-6">
        <a href="https://www.epa.gov"><p className="text-themeDark pt-3"><i>source: www.epa.gov/ </i></p></a>

        </div>

  </form>
</div>
      );
}