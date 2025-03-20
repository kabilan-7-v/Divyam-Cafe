import React from 'react'
import Navbar from '../Compounds/Navbar'
import Footbar from '../Compounds/Footbar'
import image from '../assets/dosaiimage.png'
import '@fontsource/lato';



function AboutusPage() {
  return (
    <div className="hidden md:flex flex-col h-full w-screen bg-white justify-center items-center">

      <Navbar />
      <h5 className='text-[250%]  text-[#603913] font-[gloock] text-center  mt-5 '>
        About Us
      </h5>
      <div className='h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center'></div>
      <div className=' pl-16 flex'>

        <div className="absolute w-[28%] h-[500px] rounded-xl overflow-hidden">
          <img
            src={image}
            alt="Main Dish"
            className="w-300 h-full object-cover rounded-br-[250px] rounded-bl-[250px]"
          /></div>
        <div className="relative bottom-[20px] right-[30px] md:h-[500px] w-[27%]  border-amber-400 bg-transparent border-2 rounded-br-[250px] rounded-bl-[250px]"
        >
        </div>
        <div className='w-[50%]'><p className='relative
         text-black text-[32px] font-[lato] leading-relaxed left-32 mt-12'>The Divyam Cafe is a premium South Indian chain of QSR module and is a trademark registered brand under the mother company M/s. Altran Ventures Pvt. Ltd. At The Divyam Café it is ensured that all the cuisines are prepared on-the-go and served hot to customers using the best and fresh high-quality ingredients, authentic recipes with the highest hygiene standards.</p>

        </div>
      </div>
      <div className='flex flex-col items-start'>
      <div className='w-[75%]'><p className='relative
         text-black text-[28px] font-[lato] leading-relaxed left-32 mt-12'>What makes The Divyam Cafe unique?<br/>
         The tastes and the quality of the food is consistent across all the outlets. With uncompromised quality, it’s one-of-a-kind South Indian Cafe that’s open from 6.30 AM to 1 AM throughout and caters to people across all strata.</p>

        </div><div className='w-[75%]'><p className='relative
         text-black text-[28px] font-[lato] leading-relaxed left-32 mt-12 mb-8'>What makes The Divyam Cafe unique?<br/>
           The tastes and the quality of the food is consistent across all the outlets. With uncompromised quality, it’s one-of-a-kind South Indian Cafe that’s open from 6.30 AM to 1 AM throughout and caters to people across all strata.</p>

        </div>
        </div>
      <Footbar />
    </div>
  )
}

export default AboutusPage