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
        <h1>Climate content</h1>
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

      </div>
      {/* <div className="flex justify-center content-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QYvFllsI328"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <br></br>
      <div align="center"className="text-themeDark">
        <u>Description</u>
      </div>
      <div align="center"className="text-themeDark">
        Climate Change facts and science explained in under 2 minutes.
      </div>
      <div align="center"className="text-themeDark">Video created by Our Changing Climate</div>
      <br></br>
      <div className="flex justify-center content-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-D_Np-3dVBQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <br></br>
      <div align="center"className="text-themeDark">
        <u>Description</u>
      </div>
      <div align="center"className="text-themeDark">
        Climate change is a real and serious issue. In this animated
        infographic, we dive into the science behind human-accelerated climate
        change, how it is affecting our planet, why we need to act on this
        issue, and how you as an individual can contribute to the solution.
      </div>
      <div align="center"className="text-themeDark">Video created by Matt Miltonberger</div>
      <br></br>
      <div className="flex justify-center content-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EuwMB1Dal-4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br></br>
      <div align="center"className="text-themeDark">
        <u>Description</u>
      </div>
      <div align="center"className="text-themeDark">
        This video defines climate change and explains the greenhouse effect and
        the role of greenhouse gases in our atmosphere. While it explores the
        consequences of climate change on our environment - such as rising sea
        levels, more frequent extreme weather, and damage to our ecosystems - it
        also suggests both big and little changes that we can make to protect
        our Earth.
      </div>
      <div align="center"className="text-themeDark">Video created by ClickView</div>
      <div align="center"className="text-themeDark">
        David Attenborough picture - Weston Library Opening by John Cairns.
      </div>
      <br></br> */}

      <Footer />
    </div>
  );
}
