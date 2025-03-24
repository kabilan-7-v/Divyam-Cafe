import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Compounds/Navbar'
import Footbar from '../Compounds/Footbar'
import Attractioncard from './Atrractioncard';

function Attractionpage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetchPlaces();
    }, []);
    const fetchPlaces = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/getplace');
            console.log(response.data);

            // Extract the places array from the response
            if (response.data && response.data.places && Array.isArray(response.data.places)) {
                setPlaces(response.data.places);


            } else {
                console.error("Unexpected response format:", response.data);
                setPlaces([]);
            }
        } catch (error) {
            console.error("Error fetching places:", error);
            setPlaces([]);
        }
    };
    return (
        <div className="hidden md:flex flex-col min-h-full w-screen bg-white items-center">
            <Navbar />
            <h5 className='text-[250%]  text-[#603913] font-[gloock] text-center  mt-5 '>
                Top Attractions in Pondy
            </h5>
            <div className='h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center'></div>

            <div className="m-12 bg-white rounded-2xl flex flex-col">

                <div className="flex flex-wrap justify-center">
                    {places.slice().reverse().map((val, index) => (
                        <Attractioncard
                            key={index}
                            description={val.description}
                            images={val.imageurls}
                            heading={val.heading}
                        />
                    ))}


                </div>
            </div>



            <Footbar />
        </div>
    )
}

export default Attractionpage