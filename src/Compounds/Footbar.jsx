import React from 'react'
import '@fontsource/lato';
import { MapPin, Mail, Phone } from 'lucide-react';

function Footbar() {
  return (
    <div className='flex flex-col w-full bg-amber-950 p-8 items-center text-center'>
    <div className='flex flex-col md:flex-row justify-around items-center w-full'>
        <div className='flex-wrap w-full text-start md:w-1/5 mb-4 md:mb-0'>
            <h4>
                Let Divyam Cafe transform your special occasion into a masterpiece with our professional touch.
            </h4>
        </div>

        <div className='flex flex-col items-start mb-4 md:mb-0 text-start'>
            <h3
            className='
            font-bold font-[lato] text-[24px]'
            >Links</h3>
            <h3 className='font-[lato]'>Home</h3>
            <h3 className='font-[lato]'    >Menu</h3>
            <h3 className='font-[lato]'   >Feedback</h3>
            <h3 className='font-[lato]'   >Enquiry</h3>
        </div>

        <div className='flex flex-col justify-start text-start space-y-4'>
    <h3 className='font-bold font-[lato] text-[24px]'>Contact Us</h3>

    <div className='flex items-start space-x-3'>
        <MapPin className='text-white' />
        <p className='font-[lato]'>
            Door No, Street, <br />
            District, <br />
            Country.
        </p>
    </div>

    <div className='flex items-start space-x-3'>
        <Mail className='text-white' />
        <p className='font-[lato]'>example@example.com</p>
    </div>

    <div className='flex items-center space-x-3'>
        <Phone className='text-white' />
        <p className='font-[lato]'>9876543210</p>
    </div>
</div>
    </div>

    <h5 className='mt-16 font-[lato]'>
        © 2025 Divyam Cafe All rights reserved
    </h5>
</div>

  )
}

export default Footbar