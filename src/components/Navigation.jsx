import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [blogDropDown, setBlogDropDown] = useState(false)
    const [pageDropDown, setPageDropDown] = useState(false)
    
    
    
    return ( 
        <nav 
        className="w-full h-[50%] bg-white flex items-center gap-4 text-gray-600 font-bold text-2xl " >
            <div 
            className="h-full w-[40%] flex justify-center items-center gap-2
            lg:justify-start lg:w-[20%] lg:ml-4
            ">
                <img
                className="w-[50px] h-[50px] rounded-[50%]" 
                src={logo} 
                alt='logo' />
                <h3>King'sMed</h3>
            </div>

            <div
            className='w-[60%] flex justify-end items-center gap-2 mr-2 h-full 
            lg:justify-start  lg:w-[80%] lg:mr-0  
            '
            >
                <ul 
                className={`${mobileMenu ? "absolute left-0 top-16 px-2 py-4 gap-4 flex flex-col  bg-white z-50" : "[&>*:not(:first-child)]:hidden"}
                flex justify-center gap-10 
                lg:[&>*:not(:first-child)]:flex lg:w-full lg:text-base lg:font-bold lg:mx-4 lg:ml-10`}
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                
                    <li>
                        <Link to="/department">Department</Link>
                    </li>

                    <li>
                        <Link to="/">Blog</Link>
                    </li>

                    <li>
                        <Link to="/">Pages</Link>
                    
                    </li>

                    <li>
                        <Link to="/doctors">Doctors</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li 
                    className='bg-blue-300 border-2 rounded-lg w-full flex justify-center
                    lg:w-[20%] 
                    '
                    >
                        <Link to="/appointment">Make an Appointment</Link>
                    </li>

                    <li 
                    className='bg-blue-300 border-2 rounded-lg w-full 
                    lg:w-[8%] flex justify-center
                    '
                    >
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>

                <button 
                className='lg:hidden'
                type='button' onClick={() => setMobileMenu(prev => !prev)}>
                    <FontAwesomeIcon icon="fa-solid fa-bars peer"></FontAwesomeIcon>
                </button>
            </div>
        </nav>
     );
}
 
export default Navigation;