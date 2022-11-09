import React from "react";

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
            Mission Statement here
          </p>
          <p
            className="text-sm leading-tight text-white"
            style={{ width: 470 }}
          >
            Possible Quote
          </p>
          <div className="w-6 h-6 bg-white rounded-full" />
          <p className="text-sm leading-tight text-white">Quote Author</p>
        </div>
        <div className="relative" style={{ width: 491, height: 286 }}>
          <div
            className="absolute right-0 top-0 bg-themeMedium"
            style={{ width: 400, height: 232.68 }}
          />
          <div
            className="absolute left-0 bottom-0 bg-themeLightest"
            style={{ width: 400, height: 232.68 }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMission;
