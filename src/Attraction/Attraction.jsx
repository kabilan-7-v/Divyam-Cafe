import React from 'react'
import '@fontsource/gloock';
import image from '../assets/Divyam 8.png'
import image1 from '../assets/Divyam 9.png'
import image2 from '../assets/Divyam 10.png'

function Attraction() {
  return (
    <div className='relative h-screen mt-66'>
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
        
<div className='relative bg-white h-15 w-full shadow-md shadow-gray-400'></div>

            </div>
            <div className='relative w-90 h-85 bg-white left-180 bottom-70 '>
<img src={image1} alt="Divyam" className='w-full h-full object-cover'></img>
<div className='relative bg-white h-15 w-full shadow-md shadow-gray-400'></div>


            </div>
            <div className='relative w-90 h-85 bg-amber-500 left-280 bottom-140 '>
<img src={image2} alt="Divyam" className='w-full h-full object-cover'></img>
<div className='relative bg-white h-15 w-full shadow-md shadow-gray-400'></div>


            </div>
           </div>
    </div>
  )
}

export default Attraction