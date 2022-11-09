import React from "react";
import Image from "next/image";
import browser from "../public/Browser.svg";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="flex content-center justify-center">
        <div
        className="flex space-x-20 items-center justify-end px-32 py-28 bg-white"
        style={{ width: 1440, height: 700 }}
        >
        <div
            className="inline-flex flex-col space-y-16 items-start justify-end"
            style={{ width: 422, height: 357 }}
        >
            <p className="text-6xl font-medium text-themeDark" style={{ width: 399 }}>
            What is ClimateSmart?
            </p>
            <p className="text-xl leading-7  text-themeDark" style={{ width: 422 }}>
            Description of ClimateSmart here
            </p>
            <div className="w-48 h-1/6">
            <div className="flex items-center justify-center flex-1 h-full py-5 px-6 bg-themeDark rounded hover:scale-110 transition">
                <Link href="/videos">
                    <button className="flex-1 text-lg text-center text-themeLightest hover:scale-110 transition">Explore</button>
                </Link>
            </div>
            </div>
        </div>
        <div
            className="flex space-x-3 items-start justify-start pl-4 pr-96 pt-4 pb-96 bg-themeLightest border rounded border-themeDark"
            style={{ width: 670, height: 480 }}
        >
            <div className="w-1/5 h-full border rounded-full  border-themeDark" />
            <div className="w-1/5 h-full border rounded-full  border-themeDark" />
            <div className="w-1/5 h-full border rounded-full  border-themeDark" />
        </div>
        </div>
    </div>
  );
}
