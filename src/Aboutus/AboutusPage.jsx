import React from 'react'
import Navbar from '../Compounds/Navbar'
import Footbar from '../Compounds/Footbar'

function AboutusPage() {
  return (
    <div className="hidden md:flex flex-col h-full w-screen bg-white">
        <Navbar/>
        <div className='h-screen bg-white'></div>
        <Footbar/>
    </div>
  )
}

export default AboutusPage