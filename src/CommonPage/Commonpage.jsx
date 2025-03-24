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
      <div className=" flex flex-col h-max w-full bg-white">
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

     
    </>
  )
}

export default Commonpage
