import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'

const Footer = () => {
    return ( 
        
        <div
        className='flex items-center text-base font-semibold text-gray-700 justify-between px-4 py-2'
        >
            <img className='w-10 h-10 rounded-[50%]' src={logo} alt='logo' />
            <h1 > 
                © {new Date().getFullYear()} Kings's Med.
            </h1>
            <div className='flex gap-4  w-[50%] justify-between'>

                <Link to='/'>
                   Eye 
                </Link>
                <Link to='/'>
                   Skin 
                </Link>
                <Link to='/'>
                   Pathology
                </Link>
                <Link to='/'>
                   Medicine
                </Link>
                <Link to='/'>
                       Dental
                </Link>
           </div>
        </div>
     );
}
 
export default Footer;