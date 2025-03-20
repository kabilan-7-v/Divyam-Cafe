import React from 'react'

function Feedbackcard({quote,author,index}) {
  return (
    
        <div key={index} className='bg-white text-[#603913] w-80 p-6 ml-12  rounded-lg shadow-md  '>
          <span className='text-6xl opacity-10 leading-none'>“</span>
          <p className='text-sm mb-4'>{quote}</p>
          <p className='italic font-semibold text-right'>— {author}</p>
          <span className='text-6xl opacity-10 leading-none text-right'>”</span>
        </div>
      
  )
}

export default Feedbackcard