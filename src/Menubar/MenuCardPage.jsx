import React, { useState, useEffect } from "react";
import axios from "axios";

import Footbar from "../Compounds/Footbar";
import Navbar from "../Compounds/Navbar";
import RotatingImage from "../Compounds/RotatingImage";

function MenuCardPage() {
  const [getmenucard, setGetmenucard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Getmenucard();
  }, []);

  const Getmenucard = async () => {
    try {
      const response = await axios.get(
        "https://divyamcafe-backend-39ny.onrender.com/api/getmenucard"
      );
      setGetmenucard(response.data.data);
    } catch (error) {
      console.error("Error fetching menu cards:", error.response?.data || error);
    } finally {
      setLoading(false); // Don't forget to set loading to false!
    }
  };

  return (
    <div className="flex flex-col w-screen bg-white items-center">
      <Navbar />

      <h5 className="md:text-[250%] text-[24px] text-[#603913] font-[gloock] text-center mt-5">
        Our Spicy & Special Menu
      </h5>
      <div className="h-0.5 mt-2 w-60 bg-[#603913] justify-center items-center"></div>

      {loading ? (
        <RotatingImage />
      ) : getmenucard.length === 0 ? (
        <div className="h-100 flex flex-col justify-center items-center">
          <h1 className="text-black text-2xl text-center mt-5">
            NO MENU CARD FOUND
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-6 p-8">
          {getmenucard.map((val, index) => (
            <img
              key={index}
              src={`data:image/png;base64,${val.imageurl}`}
              className="object-contain rounded-md"
              alt={`Menu Card ${index + 1}`}
            />
          ))}
        </div>
      )}

      <Footbar />
    </div>
  );
}

export default MenuCardPage;
