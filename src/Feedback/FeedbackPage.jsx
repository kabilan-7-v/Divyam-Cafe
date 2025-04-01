import axios from "axios";
import React, { useState, useEffect } from "react";
import "@fontsource/gloock";
import Feedbackcard from "../Compounds/Feedbackcard";
import Footbar from "../Compounds/Footbar";
import Navbar from "../Compounds/Navbar";
import { Link } from "react-router-dom";

function FeedbackPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch feedback data
  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("https://divyamcafe-backend-39ny.onrender.com/api/getallfeedback");

      // Filter only entries where isbutton is true
      const filteredFeedbacks = response.data.feedbacks.filter(
        (item) => item.isbutton == true
      );

      setTestimonials(filteredFeedbacks);
      console.log(filteredFeedbacks);
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

  return (
    <div className="flex flex-col h-full w-screen bg-white">
      <Navbar />
      <h5 className="md:text-[250%] text-[22px] text-[#603913] font-[gloock] text-center mt-5 items-center">
        Some of Our Happy Customers
      </h5>
      <div className="flex items-center justify-center">
        <div className="h-0.5 mt-2 md:w-60 w-40 bg-[#603913]"></div>
      </div>
      <div className="flex justify-end">
        <Link to={"/addfeedback"}>
          <div className="bg-amber-900 mr-16 rounded-xl">
            <h5 className="text-white text-[24px] font-bold text-center p-4">
              + Add Feedback
            </h5>
          </div>
        </Link>
      </div>

      {loading ? (
               <div className='h-100'> <p className="text-center text-black text-4xl mt-25">Loading...</p></div>

      ) : error ? (
        <p className="text-center text-red-500 mt-5">{error}</p>
      ) : testimonials.length === 0 ? (
       <div className="h-100 flex flex-col justify-center items-center"> <h1 className="text-black text-2xl text-center mt-5">
          NO FEEDBACK FOUND
        </h1>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">

          {testimonials.map((item, index) => (
            <div key={item._id || index} className="mt-5 flex-basis-[15%]">
              <Feedbackcard
                index={index}
                author={item.name}
                quote={item.feedback}
              />
            </div>
          ))}
        </div>
      )}

      <div className="h-35"></div>
      <Footbar />
    </div>
  );
}

export default FeedbackPage;
