import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import HomeMission from '../components/HomeMission'
import HomeOptions from '../components/HomeOptions'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div className='bg-[#f5f7f8]'>
      <NavBar/>
      <HomeHero/>
      <HomeOptions/>
      <HomeMission/>
      <Footer/>
    </div>
  )
}
