import React from 'react'
import Image from 'next/image'
import browser from '../public/browser.svg'

export default function HomeHero() {
    return (
        <div className="w-full h-700px">
            <div className="float-right mt-16 mr-44">
                <Image src={browser} alt="Picture of the author" width="670px" height="480px"/>
            </div>
            <h1 className="absolute w-1/5 h-132px text-6xl left-44 top-44">What is ClimateSmart?</h1>
            <p className="absolute w-1/5 h-132px text-1xl left-44 top-80">ClimateSmart description</p>
            <button className="absolute w-1/5 h-14 text-2xl left-44 top-1/2 border rounded-xl hover:text-themeDark bg-themeLightest hover:scale-110 transition">Call to action</button>
        </div>
    )
}
