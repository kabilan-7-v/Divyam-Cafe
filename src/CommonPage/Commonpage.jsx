import React from 'react'
import Homepage from '../Homepage/Homepage'
import Navbar from '../Compounds/Navbar'
import Aboutus from '../Aboutus/Aboutus'
import MenuPage from '../Menubar/MenuPage'
import SubMenuPage from '../Menubar/SubMenuPage'
import RotatingImage from '../Compounds/RotatingImage'
import Attraction from '../Attraction/Attraction'
import Footbar from '../Compounds/Footbar'
import CustomerTagPage from '../customertagpage/CustomerTagPage'

function Commonpage() {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex flex-col h-max w-full bg-white">
        <Navbar />
        <div className='md:h-15'></div>
        <Homepage />
        <Aboutus />
        <RotatingImage />
        <MenuPage />
        <SubMenuPage />
        <Attraction />
        <CustomerTagPage />
        <Footbar />
      </div>

      {/* Mobile View */}
      <div className="block md:hidden bg-white ">
        <div className='h-screen justify-center text-center items-center bg-white'>
          <h1 className='text-red-600'>Welcome to Our Mobile Site is in construction field</h1>
        </div>
      </div>
    </>
  )
}

export default Commonpage
