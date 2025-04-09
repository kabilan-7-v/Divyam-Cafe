import React from "react";
import Homepage from "../Homepage/Homepage";
import Navbar from "../Compounds/Navbar";
import Aboutus from "../Aboutus/Aboutus";
import MenuPage from "../Menubar/MenuPage";
import SubMenuPage from "../Menubar/SubMenuPage";
import RotatingImage from "../Compounds/RotatingImage";
import Attraction from "../Attraction/Attraction";
import Footbar from "../Compounds/Footbar";
import CustomerTagPage from "../customertagpage/CustomerTagPage";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/divyam logo brown-01.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavbar, closeNavbar } from "../redux/navbarSlice";

function Commonpage() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const toggleMenu = () => {
    dispatch(toggleNavbar());
  };
  const navItemsmobile = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Feedback", path: "/feedback" },
    { label: "Enquiry", path: "/enquiry" },
    { label: "About us", path: "/aboutus" },
  ];
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex flex-col h-max w-full bg-white">
        <Navbar />
        <div className="relative pt-26">
          {" "}
          {/* 👈 Add this padding */}
          <Homepage />
          <Aboutus />
          <RotatingImage />
          <MenuPage />
          <SubMenuPage />
          <Attraction />
          <CustomerTagPage />
          <Footbar />
        </div>
      </div>

      {/* Mobile View */}

      <div className="md:hidden flex flex-col h-max w-full items-start justify-start ">
        <div
          className=" relative w-screen  "
          style={{ backgroundColor: "rgba(236, 232, 206, 1)" }}
        >
          <div className="flex items-center justify-between  ">
            <div className="w-40 h-15">
              <img
                src={logo}
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="fixed w-full bg-white shadow-md">
              <ul className="flex flex-col items-start gap-3 p-3 ">
                {navItemsmobile.map((item) => (
                  <li
                    key={item.path}
                    className="w-full border-b border-gray-200 py-2 text-amber-900 hover:text-blue-500 cursor-pointer"
                  >
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={() => dispatch(closeNavbar())} // 👈 Close after click
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {isOpen && <div className="h-58"></div>}

        <Homepage />
        <Aboutus />
        <RotatingImage />
        <MenuPage />
        <SubMenuPage />
        <Attraction />
        <CustomerTagPage />
        <Footbar />
      </div>
    </>
  );
}

export default Commonpage;
