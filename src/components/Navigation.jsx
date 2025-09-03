import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full h-auto md:h-[50%] bg-white flex items-center gap-4 text-gray-600 font-bold text-2xl  pl-4 sm:pl-1 pr-2">
      <div
        className="h-full w-[40%] flex justify-center items-center gap-2 
            lg:justify-start lg:w-[20%] lg:ml-4
            "
      >
        <img
          className="sm:w-[50px] sm:h-[50px] rounded-[50%] w-[30px] h-[30px]"
          src={logo}
          alt="logo"
        />
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">King'sMed</h3>
      </div>

      <div
        className="w-full flex justify-end  gap-2 mr-2 h-full lg:items-center 
            lg:justify-start  lg:w-[80%] lg:mr-0  
            "
      >
        <ul
          className={`${
            mobileMenu
              ? "absolute left-0 top-8 sm:top-13 px-2 py-4 gap-4 flex flex-col bg-white z-50"
              : "hidden"
          }
                flex justify-center gap-5 w-full lg:items-center
                lg:flex lg:w-full lg:text-base lg:font-bold  `}
        >
          <li className="hover:text-blue-600 transition-colors duration-200">
            <Link to="/">Home</Link>
          </li >

          <li className="hover:text-blue-600 transition-colors duration-200">
            <Link to="/department">Department</Link>
          </li>

          <li className="hover:text-blue-600 transition-colors duration-200">
            <Link to="/">Blog</Link>
          </li>

          <li className="hover:text-blue-600 transition-colors duration-200">
            <Link to="/">Pages</Link>
          </li>

          <li className="hover:text-blue-600 transition-colors duration-200">
            <Link to="/doctors">Doctors</Link>
          </li>

          <li className="hover:text-blue-600 transition-colors duration-200">
            <Link to="/contact">Contact</Link>
          </li>

          <li
            className="bg-blue-300 border-2 rounded-xl w-auto flex justify-center px-2
          
                    "
          >
            <Link to="/appointment">Appointment</Link>
          </li>

          <li
            className="bg-blue-300 border-2 rounded-xl w-auto px-2
                   flex justify-center
                    "
          >
            <Link to="/login">Log In</Link>
          </li>
        </ul>

        <button
          className="lg:hidden"
          type="button"
          onClick={() => setMobileMenu((prev) => !prev)}
        >
          <FontAwesomeIcon className="p-2 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors" icon="fa-solid fa-bars peer"></FontAwesomeIcon>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
