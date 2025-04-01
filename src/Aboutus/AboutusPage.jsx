import React from "react";
import Navbar from "../Compounds/Navbar";
import Footbar from "../Compounds/Footbar";
import image from "../assets/dosaiimage.png";
import "@fontsource/lato";

function AboutusPage() {
  return (
    <div className="md:flex md:flex-col h-full w-screen bg-white justify-center items-center">
      <Navbar />
      <h5 className="text-[250%]  text-[#603913] font-[gloock] text-center  mt-5 ">
        About Us
      </h5>
      
      <div className=" md:flex h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center hidden"></div>
      <div className="flex flex-col justify-center items-center mb-8 md:hidden">
      <div className=" md:flex h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center "></div>


      </div>
      <div className=" md:pl-16 md:flex p-8 ">
        <div className="absolute md:w-[28%] md:h-[500px] rounded-xl overflow-hidden w-100">
          <img
            src={image}
            alt="Main Dish"
            className="md:w-300 md:h-full object-cover rounded-br-[250px] rounded-bl-[250px] h-120"
          />
        </div>
        <div className="relative bottom-[20px] right-[30px] md:h-[500px] md:w-[27%] w-100 h-110  border-amber-400 bg-transparent border-2 rounded-br-[250px] rounded-bl-[250px]"></div>
        <div className="md:w-[50%]">
          <p
            className="relative 
         text-black md:text-[32px] font-[lato] leading-relaxed md:left-32 md:mt-12 mt-30 left-0"
          >
            The Divyam Cafe is a premium South Indian chain of QSR module and is
            a trademark registered brand under the mother company M/s. Altran
            Ventures Pvt. Ltd. At The Divyam Café it is ensured that all the
            cuisines are prepared on-the-go and served hot to customers using
            the best and fresh high-quality ingredients, authentic recipes with
            the highest hygiene standards.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="md:w-[75%]">
          <p
            className="relative
         text-black md:text-[28px] font-[lato] leading-relaxed md:left-32 md:mt-12 p-8 md:p-0"
          >
            What makes The Divyam Cafe unique?
            <br />
            The tastes and the quality of the food is consistent across all the
            outlets. With uncompromised quality, it’s one-of-a-kind South Indian
            Cafe that’s open from 6.30 AM to 1 AM throughout and caters to
            people across all strata.
          </p>
        </div>
        <div className="md:w-[75%]">
          <p
            className="relative
         text-black md:text-[28px] font-[lato] leading-relaxed md:left-32 md:mt-12 md:mb-8 p-8 md:p-0"
          >
            What makes The Divyam Cafe unique?
            <br />
            The tastes and the quality of the food is consistent across all the
            outlets. With uncompromised quality, it’s one-of-a-kind South Indian
            Cafe that’s open from 6.30 AM to 1 AM throughout and caters to
            people across all strata.
          </p>
        </div>
      </div>
      <Footbar />
    </div>
  );
}

export default AboutusPage;
