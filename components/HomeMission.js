import React from "react";
import Image from "next/image";
import spaceshipGif from "../images/spaceship.gif"
import ReactPlayer from "react-player";

function HomeMission() {
  return (
    <div className="flex content-center justify-center">
      <div
        className="flex space-x-16 items-center justify-end py-40 pl-60 pr-44 bg-themeDark rounded-3xl"
        style={{ width: 1440, height: 600 }}
      >
        <div
          className="inline-flex flex-col space-y-8 items-start justify-end pb-0.5"
          style={{ width: 470, height: 258 }}
        >
          <p className="text-3xl text-white" style={{ width: 422 }}>
            Our Mission
          </p>
          <p
            className="text-lg leading-relaxed text-white"
            style={{ width: 470 }}
          >
            ClimateSmart is striving to educate the world about the climate information and build interactive tools to facilitate learning.
          </p>
          <p
            className="mt-4 text-sm leading-tight text-white"
            style={{ width: 470 }}
          >
            There are no passengers on Spaceship Earth. We are all crew.  
          </p>
          <div className="w-6 h-6 bg-[#f5f7f8] rounded-full" />
          <p className="text-sm leading-tight text-white">-Marshall McLuhan</p>
        </div>
          <ReactPlayer url="https://www.youtube.com/watch?v=yiw6_JakZFc" />
      </div>
    </div>
  );
}

export default HomeMission;
