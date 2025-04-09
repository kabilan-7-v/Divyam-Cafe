import React from "react";
import Navbar from "../Compounds/Navbar";
import Footbar from "../Compounds/Footbar";
import image from "../assets/dosaiimage.png";
import "@fontsource/lato";
import { useSelector } from "react-redux";

function AboutusPage() {
  const isOpen = useSelector((state) => state.navbar.isOpen);

  return (
    <div className="md:flex md:flex-col h-full w-screen bg-white  ">
      <Navbar />

      {isOpen && <div className="h-40" />}

      <h5 className="text-[250%] text-[#603913] font-[gloock] text-center mt-25">
        About Us
      </h5>
      <div className="flex justify-center">
        <div className="md:flex h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center hidden"></div>
      </div>
      <div className="flex flex-col justify-center items-center mb-8 md:hidden">
        <div className="md:flex h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center"></div>
      </div>

      <div className="md:pl-16 md:flex p-4  mt-8 ">
        <div className="absolute md:w-[28%] md:h-[500px] rounded-xl overflow-hidden w-[270px]  h-[270px] ml-5">
          <img
            src={image}
            alt="Main Dish"
            className="md:w-300 md:h-full object-cover rounded-br-[250px] rounded-bl-[250px] h-[270px] w-[400px]"
          />
        </div>
        <div className="relative bottom-[20px] right-[30px] md:h-[500px] md:w-[27%] w-[270px]  h-[270px] border-amber-400 bg-transparent border-2 rounded-br-[250px] rounded-bl-[250px] ml-5"></div>
        <div className="md:w-[60%]  ">
          <h1 className="text-black font-[gloock] text-2xl md:left-32 relative">
            Celebrating Authentic Udupi Based Cuisine & Our Culinary Legacy
          </h1>
          <p className="relative text-black md:text-[24px] font-[lato] leading-relaxed md:left-32 md:mt-12 mt-10 left-0">
            Learn about Divyam Cafe’s culinary legacy. Discover how our passion
            for authentic Udupi based cuisine and time-honored recipes has
            shaped our journey in Pondicherry. Open from 6:30 AM to 1:00 AM.
          </p>
          <p className="relative text-black md:text-[24px] font-[lato] leading-relaxed md:left-32 md:mt-12 mt-10 left-0">
            The Divyam Cafe is a premium South Indian chain of QSR module and is
            a trademark registered brand under the mother company M/s. Altran
            Ventures Pvt. Ltd. At The Divyam Café, all cuisines are prepared
            fresh and served hot using high-quality ingredients, authentic
            recipes, and the highest hygiene standards.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div className="md:w-[85%] ">
          <p className="relative text-black md:text-[28px] font-[lato] leading-relaxed md:left-32 md:mt-12 p-8 md:p-0">
            <strong className="font-[gloock] text-4xl">
              The Legacy of Divyam Cafe
            </strong>
            <br />
            Divyam Cafe is more than a dining venue—it’s a celebration of a rich
            culinary tradition. Our café is dedicated to the art of Udupi based
            cuisine, where every recipe is a tribute to generations of South
            Indian heritage. We take pride in our time-honored methods,
            preparing our vegetarian dishes with the finest locally sourced
            ingredients and a deep respect for classic techniques.
          </p>
          <p className="relative text-black md:text-[28px] font-[lato] leading-relaxed md:left-32 md:mt-12 p-8 md:p-0">
            <strong className="font-[gloock] text-4xl">
              Celebrating Udupi Based Cuisine
            </strong>
            <br />
            Our journey began with a passion for traditional vegetarian food in
            Pondicherry. At Divyam Cafe, our chefs blend ancestral recipes with
            subtle modern innovations, crafting meals that are both comforting
            and inventive. This dedication to authenticity has earned us
            recognition as one of the best restaurants in Puducherry by locals
            and visitors alike.
          </p>
          <p className="relative text-black md:text-[28px] font-[lato] leading-relaxed md:left-32 md:mt-12 p-8 md:p-0">
            <strong className="font-[gloock] text-4xl">
              A Tradition of Authentic Flavors
            </strong>
            <br />
            Open from early morning to late night (6:30 AM to 1:00 AM), our café
            offers a welcoming retreat for every meal—be it a nourishing
            breakfast, a light snack, or a relaxing dinner. Enjoy our signature
            filter coffee, prepared with premium beans using traditional
            methods, as you soak in the warm ambience that reflects our
            heritage.
          </p>
          <p className="relative text-black md:text-[28px] font-[lato] leading-relaxed md:left-32 md:mt-12 p-8 md:p-0 mb-8">
            <strong className="font-[gloock] text-4xl mb-4">
              Welcoming You from Dawn to Dusk{" "}
            </strong>
            <br />
            At Divyam Cafe, the legacy of Udupi based cuisine lives on in every
            dish. From crispy dosas and tender idlis to savory curries and
            freshly prepared sweets, our menu is a testament to quality and
            authenticity. Join us and experience the culinary journey that
            defines our story.
          </p>
        </div>

        <Footbar />
      </div>
    </div>
  );
}

export default AboutusPage;
