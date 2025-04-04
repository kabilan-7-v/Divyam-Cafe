import React from 'react'
import Navbar from '../Compounds/Navbar'
import Footbar from '../Compounds/Footbar'
import image from '../assets/Divyam 12.png'
import '@fontsource/gloock';
import '@fontsource/lato';


function EnquiryPage() {
  return (
    <div className=" flex flex-col h-full w-screen bg-white items-center">
        <Navbar/>
        <div className='md:relative' >
            <img
            src={image} className='md:h-full h-220 md:w-screen'></img>
            <h5 className='absolute text-[24px] md:text-[32px] font-[gloock] text-white top-25 left-16'>
            For any Bulk order or caterings<br></br>
            Visit us or call us today
            </h5>
            <h3 className=' absolute text-[20px] font-[lato] top-50 md:top-64 left-16'>
            Opening Hours

            </h3>
            <h2 className='font-[lato] absolute text-[16px] md:top-74 top-60 left-16 '>
            Mon - Sat 5:00am -11pm<br></br>
            Sun : Closed
            </h2>
            <p className=" absolute md:top-90 top-80 mb-6 left-16">enquiry@divayam.com</p>
            <form className="absolute top-100 grid grid-cols-1 md:grid-cols-2 gap-4 left-16 md:w-1/2 h-100">
            <input className="bg-transparent border border-white p-2 w-full rounded-md  " type="text" placeholder="Name" />
            <input className="bg-transparent border border-white p-2 w-full rounded-md  " type="email" placeholder="Email" />
            <input className="bg-transparent border border-white p-2 w-full col-span-2 rounded-md" type="text" placeholder="Subject" />
            <textarea className="bg-transparent border border-white p-2 w-full col-span-2 rounded-md" placeholder="Message" rows="4"></textarea>
            <button className="bg-white py-2 px-4 w-1/3 col-span-2 rounded-md">SUBMIT</button>
          </form>
        </div>
   <Footbar/>
</div>
  )
}

export default EnquiryPage