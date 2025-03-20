import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import logo from '../assets/divyam logo brown-01.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="p-4 relative w-full overflow-x-hidden" style={{ backgroundColor: 'rgba(236, 232, 206, 1)' }}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-40 h-15">
          <img src={logo} className="w-full h-full object-cover" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-12 text-lg font-medium text-gray-700">
          {[
            { label: 'Home', path: '/' },
            { label: 'Menu', path: '/menu' },
            { label: 'Feedback', path: '/feedback' },
            { label: 'Enquiry', path: '/enquiry' },
            { label: 'About us', path: '/aboutus' },
            { label: '      ', id: '' }
          ].map((item) => (
             (
              <li
                key={item.path}
                className="hover:text-blue-500 cursor-pointer"
              >
                <Link to={item.path} style={{ color: 'rgba(56, 136, 120, 1)' }}>{item.label}</Link>
              </li>)
            // ) : (
            //   <li
            //     key={item.id}
            //     className="hover:text-blue-500 cursor-pointer"
            //     style={{ color: 'rgba(56, 136, 120, 1)' }}
            //     onClick={() => scrollToSection(item.id)}
            //   >
            //     {item.label}
            //   </li>
            )
          )}
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
            {[
              { label: 'Home', path: '/' },
              { label: 'Menu', id: 'menu' },
              { label: 'Feedback', path: '/feedback' },
              { label: 'Enquiry', path: '/enquiry' },
              { label: 'About us', path: '/aboutus' }
            ].map((item) => (
              
                <li
                  key={item.path}
                  className="hover:text-blue-500 cursor-pointer w-full border-b border-gray-200 py-2"
                >
                  <Link to={item.path} style={{ color: 'rgba(56, 136, 120, 1)' }}>{item.label}</Link>
                </li>
              
              ))
            }
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;