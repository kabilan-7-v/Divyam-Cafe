import React from 'react'
import Lighttext from '../Compounds/Lighttext'
import Custombtn from '../Compounds/Custombtn'
import '@fontsource/gloock';
import image1 from '../assets/dosaiimage1.png'
import image2 from '../assets/idlyimage.png'
import image3 from '../assets/samosaimage.png'

function MenuPage() {
  return (<div id='menu' className='relative  flex-col bg-white w-full h-320'>

    <Lighttext   text="Divyam" fontSize="280px" leftpadding="30px" ismenu="true" />
    

    <div  className='relative flex-row bg-white w-full'>
      <div className='absolute flex-col w-full bg-white'>
        <h3 className='text-black pl-32 text-[24px]'>A progression of rare and beautiful ingrediens where texture,<br></br> flavour, and harmony is paramount.</h3>
        <Custombtn btnmane="Get Menu" />
        <div className=' relative w-full bg-white h-full '
        ></div>
      
      </div>
      <div    className=' absolute top-[-100px] right-0 h-200 w-150 bg-amber-900'>
        <h1 className='text-[48px] font-normal font-[gloock] mt-24 ml-8'>
          —Let’s talk about
        </h1>
        <h1 className='text-[48px] font-normal font-[gloock] ml-32 mt-2'>
          our Signature</h1>
          <div className='relative w-100 h-100 bg-amber-200 right-200'>
          <img
                        src={image3}
                        alt="Main Dish"
                        className="w-full h-full object-cover "
                    />

          


</div>
        <h1 className='text-[48px] font-normal font-[gloock] ml-72 mt-2'>Menu</h1>
        <div className='relative w-100 h-100 right-90 bg-blue-400 bottom-100 '>
        <img
                        src={image2}
                        alt="Main Dish"
                        className="w-full h-full object-cover "
                    />
        </div>
          
        <div className='relative w-100 h-100  bg-red-500 bottom-185 left-20'>
        <img
                        src={image1}
                        alt="Main Dish"
                        className=" w-full h-full object-cover "
                    />

        </div>

      </div>
    </div>
   

  </div>
  )
}

export default MenuPage