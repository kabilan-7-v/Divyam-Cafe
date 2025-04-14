import React from 'react';

function Feedbackcard({ quote, author, index, rating, ishomepage }) {
  const dynamicClasses = `${ishomepage ? 'w-50 h-70' : 'w-80 h-55 md:h-70'}`;

  return (
    <div
      key={index}
      className={`bg-white text-[#603913] md:w-80 p-6 md:ml-12 rounded-lg shadow-md ${dynamicClasses}`}
    >
      <span className='md:text-6xl opacity-10 leading-none text-2xl'>“</span>
      <p className='md:text-sm mb-4 text-[12px]'>{quote}</p>
      <p className='italic font-semibold text-right'>— {author}</p>
      <span className='md:text-6xl text-xl opacity-10 leading-none text-right'>”</span>
      <h4 className="relative bottom-4 text-xl">{rating}</h4>
    </div>
  );
}

export default Feedbackcard;
