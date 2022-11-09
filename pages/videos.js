import Head from "next/head";
import Image from "next/image";
import HomeHero from "../components/HomeHero";
import NavBar from "../components/NavBar";

export default function Videos() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center content-center">
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
      <div align="center">
        <u>Description</u>
      </div>
      <div align="center">
        Climate Change facts and science explained in under 2 minutes.
      </div>
      <div align="center">Video created by Our Changing Climate</div>
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
      <div align="center">
        <u>Description</u>
      </div>
      <div align="center">
        Climate change is a real and serious issue. In this animated
        infographic, we dive into the science behind human-accelerated climate
        change, how it is affecting our planet, why we need to act on this
        issue, and how you as an individual can contribute to the solution.
      </div>
      <div align="center">Video created by Matt Miltonberger</div>
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
      <div align="center">
        <u>Description</u>
      </div>
      <div align="center">
        This video defines climate change and explains the greenhouse effect and
        the role of greenhouse gases in our atmosphere. While it explores the
        consequences of climate change on our environment - such as rising sea
        levels, more frequent extreme weather, and damage to our ecosystems - it
        also suggests both big and little changes that we can make to protect
        our Earth.
      </div>
      <div align="center">Video created by ClickView</div>
      <div align="center">
        David Attenborough picture - Weston Library Opening by John Cairns.
      </div>
      <br></br>
    </>
  );
}
