import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import ToolsCarbon from '../components/ToolsCarbon'
import ToolsCatalog from '../components/ToolsCatalog'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div className='bg-[#f5f7f8]'>
      <NavBar/>
      <div className="flex content-center justify-center items-center space-y-8 space-x-8">
      <ToolsCarbon/>
      <ToolsCatalog/>
      </div>
      <div className='h-96'/>
      <Footer/>
    </div>
  )
}