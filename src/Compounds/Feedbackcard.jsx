import React from 'react'

function Feedbackcard({quote,author,index}) {
  return (
    
        <div key={index} className='bg-white text-[#603913] md:w-80 p-6 md:ml-12  rounded-lg shadow-md w-40  h-70 '>
          <span className='md:text-6xl opacity-10 leading-none text-2xl'>“</span>
          <p className='md:text-sm mb-4 text-[12px]'>{quote}</p>
          <p className='italic font-semibold text-right'>— {author}</p>
          <span className='md:text-6xl text-xl opacity-10 leading-none text-right'>”</span>
        </div>
      
  )
}

export default Feedbackcard