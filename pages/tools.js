import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import ToolsCarbon from '../components/ToolsCarbon'
import ToolsCatalog from '../components/ToolsCatalog'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <>
      <NavBar/>
      <hr className="border-themeDark content-center"></hr>
      <div className="flex content-center justify-center items-center space-y-8 space-x-8">
      <ToolsCarbon/>
      <ToolsCatalog/>
      </div>
      <Footer/>
    </>
  )
}
