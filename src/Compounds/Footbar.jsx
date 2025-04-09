import React from 'react';
import '@fontsource/lato';
import { MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logowhite.png';
import { Link,} from 'react-router-dom';


function Footbar() {
    return (
        <div className='relative flex flex-col w-full bg-amber-950 p-8 text-start bottom-0'>
            <div className='flex flex-col md:flex-row justify-around w-full md:items-center'>

                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <div className='w-40 '>
                        <img src={logo} className='w-full object-cover' alt='Divyam Cafe Logo' />
                    </div>
                    <h4>
                        Let Divyam Cafe transform your special occasion into a masterpiece with our professional touch.
                    </h4>
                </div>

                <div className='flex flex-col space-y-2 mb-6 md:mb-0 md:items-center'>
                    <h3  className='font-bold font-[lato] text-[24px]'>Links</h3>
                    <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}  >
                    <h3 className='font-[lato] hover:text-blue-400' >Home</h3>
                    </Link>
                    <Link to={"/menu"}  style={{ textDecoration: "none", color: "inherit" }} >
                    <h3 className='font-[lato] hover:text-blue-400'>Menu</h3></Link>
                    <Link to={"/feedback"  } style={{ textDecoration: "none", color: "inherit" }}>
                    <h3 className='font-[lato] hover:text-blue-400'>Feedback</h3></Link>
                    <Link to={"/enquiry"}  style={{ textDecoration: "none", color: "inherit" }} >
                    <h3 className='font-[lato] hover:text-blue-400'>Enquiry</h3></Link>
                </div> 

                <div className='flex flex-col space-y-4 md:items-start'>
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

                    <div className='flex items-start space-x-3'>
                        <Phone className='text-white' />
                        <p className='font-[lato]'>9876543210</p>
                    </div>
                </div>
            </div>

            <h5 className='mt-10 font-[lato] text-center'>
                © 2025 Divyam Cafe All rights reserved
            </h5>
        </div>
    );
}

export default Footbar;
