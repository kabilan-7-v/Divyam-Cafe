import React from 'react'
import '@fontsource/gloock';
import image from '../assets/Divyam 8.png'
import image1 from '../assets/Divyam 9.png'
import image2 from '../assets/Divyam 10.png'
import viewmoreicon from '../assets/viewmore.png'
import { Link } from 'react-router-dom';

function Attraction() {
  return (

    <>
      <div className='relative h-screen mt-10 hidden md:flex'>
        <h5 className='absolute text-[140px] text-[#3c504914] font-[gloock] right-50 '>
          Attraction
        </h5>
        <div className='w-120 h-190 bg-[#603913]'>
          <h4 className='text-[48px] font-[gloock] pt-8 pl-8'>
            —Visit Pondy’s
          </h4>
          <h4 className='text-[48px] font-[gloock] pl-45'>Nearby</h4>
          <h4 className='text-[48px] font-[gloock] pl-21'>Attractions</h4>
          <div className='relative w-90 h-85 bg-white left-80'>

            <img src={image} alt="Divyam" className='w-full h-full object-cover'></img>

            <Link to="/attraction" style={{ textDecoration: "none", color: "inherit" }}>   <div className='relative flex flex-row bg-white h-15 w-full shadow-md shadow-gray-400 justify-center items-center gap-2 p-2'>
              <img src={viewmoreicon} alt="View More Icon" className='w-5 h-5' />
              <h5 className='text-black md:text-[16px] text-[12px]  hover:text-amber-900'>View More</h5>
            </div>
            </Link>


          </div>

          <div className='relative w-90 h-85 bg-white left-180 bottom-70 '>
            <img src={image1} alt="Divyam" className='w-full h-full object-cover'></img>
            <Link to="/attraction" style={{ textDecoration: "none", color: "inherit" }}>
              <div className='relative flex flex-row bg-white h-15 w-full shadow-md shadow-gray-400 justify-center items-center gap-2 p-2'>
                <img src={viewmoreicon} alt="View More Icon" className='w-5 h-5' />
                <h4 className='text-black text-[16px]  hover:text-amber-900'>View More</h4>
              </div>
            </Link>


          </div>
          <div className='relative w-90 h-85 bg-amber-500 left-280 bottom-140 '>
            <img src={image2} alt="Divyam" className='w-full h-full object-cover'></img>
            <Link to="/attraction" style={{ textDecoration: "none", color: "inherit" }}>
              <div className='relative flex flex-row bg-white h-15 w-full shadow-md shadow-gray-400 justify-center items-center gap-2 p-2'>
                <img src={viewmoreicon} alt="View More Icon" className='w-5 h-5' />
                <h4 className='text-black text-[16px] hover:text-amber-900'>View More</h4>
              </div>
            </Link>


          </div>
        </div>
      </div>




      <div className='relative h-screen mt-66 top-90 md:hidden mb-8 '>
        <h5 className='absolute text-[40px] text-[#3c504914] font-[gloock] right-10 top-20 '>
          Attraction
        </h5>
        <div className='w-1/2 h-100 bg-[#603913]'>
          <h4 className='text-[20px] font-[gloock] pt-8 pl-8'>
            —Visit Pondy’s
          </h4>
          <h4 className='text-[20px] font-[gloock] pl-22'>Nearby</h4>
          <h4 className='text-[20px] font-[gloock] pl-14'>Attractions</h4>
          <div className='relative w-[40%]  bg-white left-5 top-10'>

            <img src={image} alt="Divyam" className='w-full h-full object-cover'></img>

            <Link to="/attraction" style={{ textDecoration: "none", color: "inherit" }}>   <div className='relative flex flex-row bg-white h-15 w-full shadow-md shadow-gray-400 justify-center items-center gap-2 p-2'>
              <img src={viewmoreicon} alt="View More Icon" className='w-5 h-5' />
              <h4 className='text-black text-[16px]  hover:text-amber-900'>View More</h4>
            </div>
            </Link>


          </div>

          <div className='relative w-[40%]  bg-white left-35 bottom-12'>
            <img src={image1} alt="Divyam" className='w-full h-full object-cover'></img>
            <Link to="/attraction" style={{ textDecoration: "none", color: "inherit" }}>
              <div className='relative flex flex-row bg-white h-15 w-full shadow-md shadow-gray-400 justify-center items-center gap-2 p-2'>
                <img src={viewmoreicon} alt="View More Icon" className='w-5 h-5' />
                <h4 className='text-black text-[16px]  hover:text-amber-900'>View More</h4>
              </div>
            </Link>


          </div>
          <div className='relative w-[40%]  bg-amber-500 left-65 bottom-34 '>
            <img src={image2} alt="Divyam" className='w-full h-full object-cover'></img>
            <Link to="/attraction" style={{ textDecoration: "none", color: "inherit" }}>
              <div className='relative flex flex-row bg-white h-15 w-full shadow-md shadow-gray-400 justify-center items-center gap-2 p-2'>
                <img src={viewmoreicon} alt="View More Icon" className='w-5 h-5' />
                <h4 className='text-black text-[16px] hover:text-amber-900'>View More</h4>
              </div>
            </Link>


          </div>
        </div>
      </div>
    </>
  )
}

export default Attraction