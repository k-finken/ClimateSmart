import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function Videos() {
  return (
    <div className='bg-[#f5f7f8]'>
      <NavBar />

      <div align="center" className="text-themeDark text-3xl underline">
        <h1>Climate Content</h1>
      </div>

      <div className="ml-[19rem] mx-60 mt-10 grid grid-cols-2 gap-20">
        <div className="m-auto">
          <ReactPlayer className="flex justify-center items-center" url="https://www.youtube.com/embed/QYvFllsI328" />
          <h1 className="mt-8 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">Climate Change facts and science explained in under 2 minutes.
            Video created by Our Changing Climate</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://youtu.be/-D_Np-3dVBQ" />
          <h1 className="mt-2 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">Climate change is a real and serious issue. In this animated infographic, we dive into the science behind human-accelerated climate change, how it is affecting our planet, why we need to act on this issue, and how you as an individual can contribute to the solution.</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=EuwMB1Dal-4&feature=emb_logo" />
          <h1 className="mt-2 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">This video defines climate change and explains the greenhouse effect and the role of greenhouse gases in our atmosphere. While it explores the consequences of climate change on our environment - such as rising sea levels, more frequent extreme weather, and damage to our ecosystems.</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=LxgMdjyw8uw&t=59s" />
          <h1 className="mt-12 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">This video goes into what has been done on climate change already and what the stats say about how much left there is to do.</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=G4H1N_yXBiA" />
          <h1 className="mt-12 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">What causes climate change (also known as global warming)? And what are the effects of climate change? Learn the human impact and consequences of climate change for the environment, and our lives.</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=SDRxfuEvqGg" />
          <h1 className="mt-12 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">Video of Climate Change 2022: Impacts, Adaptation & Vulnerability, the Working Group II contribution to the IPCC Sixth Assessment Report.</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=yiw6_JakZFc" />
          <h1 className="mt-12 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">Never before in human history have we been richer, more advanced or powerful. And yet we feel overwhelmed in the face of rapid climate change. It seems simple on the surface. Greenhouse gases trap energy from the Sun and transfer it to our atmosphere. This leads to warmer winters, harsher summers. Dry places become drier and wet places wetter. Countless ecosystems will die while the rising oceans swallow coasts and the cities we build on them.</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=ipVxxxqwBQw" />
          <h1 className="mt-12 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">Since the Industrial Revolution, humans have released over 1.5 trillion tonnes of carbon dioxide or CO2 into the earths atmosphere.  In the year 2019  we were still pumping out  around 37 billion more.  Thats 50% more than the year 2000 and almost three times as much as 50 years ago. And its not just CO2. Were also pumping out growing volumes  of  other greenhouse gases such as methane and nitrous oxide. Combining all of our greenhouse gases, were emitting 51 billion tonnes of carbon dioxide equivalents each year. 
And emissions keep rising but they need to get down to 0!</p>
        </div>
        <div className="m-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=dIsjcG7hTmo" />
          <h1 className="mt-12 text-themeDark underline text-xl">Description:</h1>
          <p className="mt-2 text-themeDark text-md">From the moment we wake up to when we go to sleep we are all using energy, this emissions from this constant generation of energy has caused the world to warm by roughly 1℃.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
