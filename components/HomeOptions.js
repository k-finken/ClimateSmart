import React from "react";
import Link from "next/link";

function HomeOptions() {

  return (
    <div className="flex justify-center content-center mb-20">
      <div
        className="inline-flex items-center justify-center pb-0.5"
        style={{ width: 1440, height: 268 }}
      >
        <div
          className="inline-flex flex-col space-y-8 items-center justify-end px-96 pt-12 pb-16 bg-themeLightest rounded-3xl w-full"
          style={{ width: 1440, height: 266 }}
        >
          <p className="text-2xl leading-loose text-center text-themeDark">
            Learn More About These Enviromental Issues
          </p>
          <div
            className="inline-flex space-x-10 items-center justify-end"
            style={{ width: 680, height: 80 }}
          >
            <Link href="https://www.epa.gov/climate-change">
                <button className="w-3/4 h-full bg-themeDark text-themeLightest rounded-full text-lg hover:scale-110 transition">Climate Change</button>
            </Link>
            <Link href="https://www.epa.gov/environmental-topics/air-topics">
                <button className="w-3/4 h-full bg-themeDark text-themeLightest rounded-full text-lg hover:scale-110 transition">Air Pollution</button>
            </Link>
            <Link href="https://www.epa.gov/https://www.epa.gov/environmental-topics/land-waste-and-cleanup-topics">
                <button className="w-3/4 h-full bg-themeDark text-themeLightest rounded-full text-lg hover:scale-110 transition">Waste Management</button>
            </Link>
            <Link href="https://www.epa.gov/environmental-topics/water-topics">
                <button className="w-3/4 h-full bg-themeDark text-themeLightest rounded-full text-lg hover:scale-110 transition">Water Quality</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeOptions;
