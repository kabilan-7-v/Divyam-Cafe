import React from 'react'
import Footbar from '../Compounds/Footbar'
import image from '../assets/Divyam 11.png'
import Navbar from '../Compounds/Navbar'

function MenuCardPage() {
  return (
    <div className=" md:flex flex-col  w-screen bg-white items-center ">
        <Navbar/>

        <h5 className='text-[250%]  text-[#603913] font-[gloock] text-center  mt-5 '>
        Our Spicy & Special Menu
</h5>
<div className='h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center'></div>
<div className=' flex flex-wrap m-12 '>
        <div className='w-1/2 p-8 '>
        <img src={image} className='object-cover'>
        </img>
        </div>
        <div className='w-1/2 p-8'>
        <img src={image} className='object-cover'>
        </img>
        </div>
        <div className='w-1/2 p-8'>
        <img src={image} className='object-cover'>
        </img>
        </div>
        <div className='w-1/2 p-8'>
        <img src={image} className='object-cover'>
        </img>
        </div>
        </div>


        <Footbar/>
        </div>
  )
}

export default MenuCardPage