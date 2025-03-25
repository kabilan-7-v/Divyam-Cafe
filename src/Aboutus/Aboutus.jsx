import React from 'react'
import image from '../assets/dosaiimage.png'
import Custombtn from '../Compounds/Custombtn'
import { Link } from 'react-router-dom';


function Aboutus() {
  return (
    <div >
      <div className="hidden md:grid md:grid-cols-2 md:gap-4  md:pt-32 bg-white ">





        <div className="w-full">
          <h2 className=" md:w-[550px] 
        text-[44px]
        md:h-[155px] 
        font-[Gloock] 
        font-bold 
        md:text-[66px] 
        md:leading-[100%] 
        tracking-[0.04em] 
        text-[#603913] 
        md:pl-32
        pl-8
        

       md:mt-2">Learn more<br />About us</h2>

          <p
            className="
        w-[604px] 
        h-[38px] 
        font-[Lato] 
        font-normal 
        text-[20px] 
        leading-[100%] 
        tracking-[0.08em] 
        text-justify 
        text-[#603913] 
        pl-32

    ">
            Our current beans line up for filter coffee. We will add new selection for the guest beans. Keep you guys updated on this page.
          </p>
          <Link to="/aboutus" style={{ textDecoration: "none", color: "inherit" }}>
            <Custombtn btnmane="READ ME" />
          </Link>
        </div>


        <div className=' pl-16'>

          <div className="absolute w-[499px] h-[549px] rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Main Dish"
              className="w-300 h-full object-cover rounded-br-[250px] rounded-bl-[250px]"
            /></div>
          <div className="relative bottom-[20px] right-[30px] md:h-[549px] w-[399px]  border-amber-400 bg-transparent border-2 rounded-br-[250px] rounded-bl-[250px]"
          >
          </div>

        </div>
        <div className="flex justify-center items-center h-full">

        </div>
      </div>












      <div className='md:hidden relative flex w-screen top-[260px]  '>

        <div className="absolute h-[249px] w-[250px] rounded-xl overflow-hidden right-4">
          <img
            src={image}
            alt="Main Dish"
            className="w-300 h-full object-cover rounded-br-[250px] rounded-bl-[250px]"
          /></div>
        <div className="absolute top-[-20px] right-[49px] h-[249px] w-[250px]  border-amber-400 bg-transparent border-2 rounded-br-[250px] rounded-bl-[250px] "
        >
        </div>
        <h2 className=" 
        text-[44px]
        font-[Gloock] 
        font-bold 
        text-[#603913] 
        pl-4
        relative
        top-70

      ">Learn more<br />About us</h2>
         <p
            className="
        font-[Lato] 
        font-normal 
        text-[20px] 
        leading-[100%] 
        tracking-[0.08em] 
        text-justify 
        text-[#603913] 
        absolute
        top-105
        pl-4
        pr-4

    ">
            Our current beans line up for filter coffee. We will add new selection for the guest beans. Keep you guys updated on this page.
          </p>
        
        
      </div>

    </div>







  )
}




export default Aboutus



