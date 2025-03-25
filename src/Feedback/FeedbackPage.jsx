import React from 'react'
import '@fontsource/gloock';
import Navbar from '../Compounds/Navbar';
import Footbar from '../Compounds/Footbar';
import Feedbackcard from '../Compounds/Feedbackcard';
function FeedbackPage() {

const testimonials = [
    {
      quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
      author: "Quinta Adelia"
    },
    {
      quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
      author: "Natasya"
    },
    {
      quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
      author: "Yosina Ribkah Kalalo"
    }, {
        quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
        author: "Quinta Adelia"
      },
      {
        quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
        author: "Natasya"
      },
      {
        quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
        author: "Yosina Ribkah Kalalo"
      }, {
        quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
        author: "Quinta Adelia"
      },
      {
        quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
        author: "Natasya"
      },
      {
        quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
        author: "Yosina Ribkah Kalalo"
      },{
        quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
        author: "Quinta Adelia"
      },
      {
        quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
        author: "Natasya"
      },
      {
        quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
        author: "Yosina Ribkah Kalalo"
      }
   
  ];
  return (
    <div className=" flex flex-col h-full w-screen bg-white items-center">
        <Navbar/>
        <h5 className='md:text-[250%] text-[22px] text-[#603913] font-[gloock] text-center  mt-5 '>
Some of Our Happy Customer
</h5>
<div className='h-0.5 mt-2 md:w-60 w-40 bg-[#603913] justify-center items-center'></div>
<div className='flex flex-wrap   justify-center '>
{testimonials.map((item, index) => (
    <div className='mt-5 flex-basis-[15%]'>
         < Feedbackcard index={index} author={item.author} quote={item.quote}/>
         </div>
        ))}

        
    
</div>
<div className='h-8 '>

</div>
       <Footbar/>
    </div>
  )
}

export default FeedbackPage

{/*  */}