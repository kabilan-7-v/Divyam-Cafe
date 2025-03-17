import React from 'react'
import '@fontsource/gloock';
import Custombtn from '../Compounds/Custombtn';

function SubMenuPage() {
  return (
    <div className='relative flex flex-row w-full bg-white'>
      <div className='absolute w-120 h-150 bg-red-300 rounded-br-[350px]'>
      </div>
      <div className='relative w-120 h-80 left-10 top-80 border-amber-400 bg-transparent border-2  rounded-br-[350px]'>
      </div>
      <div className="relative max-w-2xl   ml-32">
        <blockquote className="text-5xl font-bold text-[#663900] italic leading-snug font-[gloock] ">
          “Having an afternoon tea with your best friend is all the therapy you need.”
        </blockquote>
        <p className="text-2xl font-semibold text-[#663900] mt-4">— anonymous</p>

        <p className="mt-6 text-[#7a4f24] text-lg leading-relaxed">
          Imagine having quality time with your family and friends in a comfortable, fully aesthetic space
          where you can enjoy various Asian fusion dishes and the finest bean coffee.
        </p>
        <Custombtn btnmane="BOOK A TABLES" />
      </div>
    </div>
  )
}

export default SubMenuPage