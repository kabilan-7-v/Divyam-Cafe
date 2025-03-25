import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/gloock';
import Feedbackcard from '../Compounds/Feedbackcard';


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
  }
 
];


function CustomerTagPage() {
  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='bg-[#603913] text-white py-12 px-16 w-screen'>
    <h2 className='text-4xl font-bold text-center mb-6 font-[gloock]'>Some of Our Happy Customer</h2>
    <hr className='w-20 mx-auto border-t-2 border-white mb-8' />
    

    <div className='    justify-center items-center'>
     
      <Slider className='md:ml-16 md:mr-8 ' {...settings}>
      {testimonials.map((item, index) => (
         <Feedbackcard index={index} author={item.author} quote={item.quote}/>
        ))}
        
      
      </Slider>

      
    </div>
  </div>
  )
}

export default CustomerTagPage
