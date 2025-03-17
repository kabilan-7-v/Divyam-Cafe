import React from 'react'
import image from '../assets/dosaiimage.png'
import Custombtn from '../Compounds/Custombtn'


function Aboutus() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white ">





      <div className="w-full">
        <h2 className=" w-[550px] 
        h-[155px] 
        font-[Gloock] 
        font-bold 
        text-[66px] 
        leading-[100%] 
        tracking-[0.04em] 
        text-[#603913] 
        pl-32
        

        mt-2">Learn more<br />About us</h2>

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
        <Custombtn btnmane="READ ME"/>
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








  )
}

export default Aboutus



