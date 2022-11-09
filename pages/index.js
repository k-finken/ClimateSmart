import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import HomeMission from '../components/HomeMission'
import HomeOptions from '../components/HomeOptions'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <>
      <NavBar/>
      <hr className="border-themeDark"></hr>
      <HomeHero/>
      <HomeOptions/>
      <HomeMission/>
      <Footer/>
    </>
  )
}
