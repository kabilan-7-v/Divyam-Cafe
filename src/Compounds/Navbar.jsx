import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/divyam logo brown-01.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="p-4 relative w-full  overflow-x-hidden" style={{ backgroundColor: 'rgba(236, 232, 206, 1)' }}>
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="w-40 h-15">
          <img src={logo} className=" w-full h-full object-cover">
          </img>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-12 text-lg font-medium text-gray-700">
          {['Home', 'Menu', 'Feedback', 'Enquiry', 'About us' ,"   "].map((item) => (
            <li
              key={item}
              className="hover:text-blue-500 cursor-pointer"
              style={{ color: 'rgba(56, 136, 120, 1)' }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Drawer for Mobile */}
      {isOpen && (
  <div className="md:hidden bg-white shadow-md w-full z-50">
    <ul className="flex flex-col items-start gap-4 p-4">
      {['Home', 'Menu', 'Feedback', 'Enquiry', 'About us'].map((item) => (
        <li
          key={item}
          className="hover:text-blue-500 cursor-pointer w-full border-b border-gray-200 py-2"
          style={{ color: 'rgba(56, 136, 120, 1)' }}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>

      )}
    </div>
  );
}

export default Navbar;
