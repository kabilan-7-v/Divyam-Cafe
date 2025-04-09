import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/divyam logo brown-01.png';
import { useSelector, useDispatch } from "react-redux";
import { toggleNavbar,closeNavbar } from "../redux/navbarSlice";


function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
const isOpen = useSelector((state) => state.navbar.isOpen);

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => {
    dispatch(toggleNavbar());
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Feedback', path: '/feedback' },
    { label: 'Enquiry', path: '/enquiry' },
    { label: 'About us', path: '/aboutus' },
    { label: '      ', path: '' },


  ];
  const navItemsmobile = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Feedback', path: '/feedback' },
    { label: 'Enquiry', path: '/enquiry' },
    { label: 'About us', path: '/aboutus' },


  ];

  return (
    <div className="md:p-4  w-screen md:overflow-x-hidden fixed z-50  " style={{ backgroundColor: 'rgba(236, 232, 206, 1)' }}>
      <div className="flex md:items-center justify-between   ">
        {/* Logo */}
        <div className="w-40 h-15">
          <img src={logo} className="w-full h-full object-cover" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-12 text-lg font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`text-[18px] ${isActive(item.path) ? "text-amber-950 font-bold" : "text-green-800 font-normal hover:text-amber-950"}`}
            >
              <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

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
  );

}

export default Navbar;
