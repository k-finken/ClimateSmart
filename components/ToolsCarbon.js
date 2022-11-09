import React from "react";

export default function ToolsCarbon() {
  return (
<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name"/>
      </div>
    <div className="form-group mb-6">
      
    </div>
    <div className="form-group mb-6">
      <textarea
      className="form-control block w-full px-3 py-1.5"
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Message"
    ></textarea>
    </div>
    <div className="form-group form-check text-center mb-6">
      <input type="checkbox"
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck87" checked/>
      <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
    </div>
    <button type="submit" className="">
      Send
      </button>
  </form>
</div>
      );
}