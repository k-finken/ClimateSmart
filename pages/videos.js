import Head from 'next/head'
import Image from 'next/image'
import HomeHero from '../components/HomeHero'
import NavBar from '../components/NavBar'

export default function Videos() {
    return (
      <>
        <NavBar/>
        <div className="flex justify-center content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QYvFllsI328"/>
        </div>
      </>
    )
  }