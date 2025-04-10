import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/gloock';
import Feedbackcard from '../Compounds/Feedbackcard';

function CustomerTagPage() {
  const settings = {
    accessibility: true,
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

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("https://divyamcafe-backend-39ny.onrender.com/api/getallfeedback");
      const filteredFeedbacks = response.data.feedbacks.filter(
        (item) => item.ishomepage === true
      );
      setTestimonials(filteredFeedbacks);
      setLoading(false);
    } catch (err) {
      setError("Failed to load feedbacks");
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-white">Loading feedback...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div>
      {testimonials.length !== 0 ?   (
        <div className='bg-[#603913] text-white py-12 px-16 w-screen'>
          <h2 className='text-4xl font-bold text-center mb-6 font-[gloock]'>
            Some of Our Happy Customers
          </h2>
          <hr className='w-20 mx-auto border-t-2 border-white mb-8' />
  
          <div className='justify-center items-center'>
         {testimonials.length<=3?(<div className="flex justify-center ">
          {testimonials.map((item, index) => (
                <Feedbackcard
                  key={index}
                  index={index}
                  author={item.name}
                  quote={item.feedback}
                  rating={item.rating}
                />
              ))}
         </div>) :( <Slider className='md:ml-16 md:mr-8 ml-2 mr-2' {...settings}>
              {testimonials.map((item, index) => (
                <Feedbackcard
                  key={index}
                  index={index}
                  author={item.name}
                  quote={item.feedback}
                  rating={item.rating}
                />
              ))}
            </Slider>)}
          </div>
        </div>
      ) : 
      (
        <div></div>
      )}
    </div>
  );}

export default CustomerTagPage;
