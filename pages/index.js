import Head from 'next/head'
import Image from 'next/image'
import HomeHero from '../components/HomeHero'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <>
      <NavBar/>
      <HomeHero/>
    </>
  )
}
