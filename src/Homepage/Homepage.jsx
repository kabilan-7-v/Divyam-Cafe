import React from 'react'
import image from '../assets/welcomeimage.png'
import '@fontsource/gloock';
import '@fontsource/lato';
import Lighttext from '../Compounds/Lighttext';

function Homepage() {
    return (
        <div className="relative w-screen flex  items-center ">

            {/* Image & Background Container */}
            <div className="relative w-[650px] h-[455px] ">
                {/* Background Section */}
                <div className="bg-[#603913] md: w-[100%] md:h-[100%] absolute top-0 left-0 z-0 "></div>

                {/* Image Section */}
                <div className="absolute md:bottom-25 md:left-[30%] md:w-[100%] md:h-[100%] rounded-xl overflow-hidden ">
                    <img
                        src={image}
                        alt="Main Dish"
                        className="w-full h-full object-cover rounded-tr-[250px] rounded-tl-[250px]"
                    />
                </div>
            </div>

            {/* Text Section */}

            <div className="w-full md: pl-[25%]">
                <h3
                    className="
        w-[570px] 
        h-[24px] 
        font-[Lato] 
        font-bold 
        italic 
        text-[24px] 
        leading-[100%] 
        tracking-[0.1em] 
        text-[#603913]
        mt-8
    ">
                    Divyam & Specialty Coffee
                </h3>
                <h1
                    className="
        w-[100%] 
        h-[255px] 
        font-[Gloock] 
        font-bold 
        text-[80%] 
        leading-[100%] 
        tracking-[0.05em] 
        text-[#603913] 
        pt-8

    ">
                    We welcome you to <br />
                    Savor the Flavor of <br />
                    The World
                </h1>

                <p
                    className="
        w-[504px] 
        h-[38px] 
        font-[Lato] 
        font-normal 
        text-[20px] 
        leading-[100%] 
        tracking-[0.08em] 
        text-justify 
        text-[#603913] 

    ">
                    Get ready to taste our take on Divyam cafe menu. Indulge
                    your tastebuds with the burst of flavour.
                </p>
                {/* Hidden for mobile, visible only for larger screens */}
                <div className="hidden md:block">
                    <Lighttext text="Pride" fontSize="240px" />
                </div>

                {/* Smaller Lighttext for Mobile */}
                <div className="block md:hidden">
                    <Lighttext text="Pride" fontSize="130px" />
                </div>
            </div>


        </div>



    );
};
export default Homepage