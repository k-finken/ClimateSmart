import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import ToolsCarbon from '../components/ToolsCarbon'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <>
      <NavBar/>
      <hr className="border-themeDark"></hr>
      <ToolsCarbon/>
      <Footer/>
    </>
  )
}
