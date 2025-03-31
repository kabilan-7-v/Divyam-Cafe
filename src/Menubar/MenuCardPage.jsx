import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Footbar from '../Compounds/Footbar'
import image from '../assets/Divyam 11.png'
import Navbar from '../Compounds/Navbar'

function MenuCardPage() {
  const [getmenucard, setGetmenucard] = useState([]);

  useEffect(() => {
    Getmenucard();
  }, []);
  const Getmenucard = async () => {
    try {
      const response = await axios.get("https://divyamcafe-backend-39ny.onrender.com/api/getmenucard");
      console.log(response.data.data)
      setGetmenucard(response.data.data); // Assuming response structure { status: true, data: [...] }
    } catch (error) {
      console.error("Error fetching menu cards:", error.response?.data || error);
    }
  };

  return (
    <div className=" flex flex-col  w-screen bg-white items-center ">
      <Navbar />

      <h5 className='md:text-[250%] text-[24px]  text-[#603913] font-[gloock] text-center  mt-5 '>
        Our Spicy & Special Menu
      </h5>
      <div className='h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center'></div>
      <div className=' flex flex-wrap m-12 '>
      {getmenucard.map((val, index) => (
        <div className='w-1/2 md:p-8 p-4 '>
          <img src={image} className='object-cover'>
          </img>
        </div>
    ))}

        {/* <div className='w-1/2 p-8'>
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
      </div> */}
    </div>


      <Footbar />
    </div>
  )
}

export default MenuCardPage