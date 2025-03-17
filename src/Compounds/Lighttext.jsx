import React from 'react'
function Lighttext({ text, fontSize,leftpadding }) {
    return (
      <div className='bg-white'>
        <h5
          className={`font-[Gloock] text-[#6639001a] font-bold`}
          style={{ fontSize: fontSize,paddingLeft:leftpadding }}
        >
          {text}
        </h5>
      </div>
    )
  }
  
export default Lighttext