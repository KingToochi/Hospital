import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'

const Footer = () => {
    return ( 
        <div className='flex flex-row w-[100%] bg-black'>
            <div className="flex flex-col gap-[1.2rem] w-[33%] m-[10px] ">
                <img className='w-10 h-10 rounded-[10px]' src={logo} alt='logo' />
                <h2 className='text-gray-400'>Firmament morning sixth subdue <br></br>darkness creeping gathered divide.</h2>
                <div className='flex w-full gap-[1rem]'>
                    <i className='fa fa-facebook border rounded-[5px] w-[40px] p-[10px] text-gray-400 bg-gray-100 h-[40px] text-center'></i>
                    <i className='fa fa-twitter border rounded-[5px] w-[40px] p-[10px] text-gray-400 bg-gray-100 h-[40px] text-center'></i>
                    <i className='fa fa-instagram border rounded-[5px] w-[40px] p-[10px] text-gray-400 bg-gray-100 h-[40px] text-center' ></i>
                </div>
            </div>

            <div className='flex flex-col w-[34%] gap-[1.2rem] m-5px'>
                <h1 className='text-[35px] text-white' >Departments</h1>
                <div className='flex flex-col gap-[1rem] text-gray-400 text-[20px]'>
                    <Link to='/'>
                        Eye Care
                    </Link>
                    <Link to='/'>
                        Skin Care
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

            <div  className='flex flex-col w-[34%] gap-[1.2rem] m-5px'>
                <h1 className='text-[35px] text-white'>USeful Links</h1>
                <div className='flex flex-col gap-[1rem] text-gray-400 text-[20px]'>
                    <Link to='/'>
                        About
                    </Link>
                    <Link to='/'>
                        Blog
                    </Link>
                    <Link to='/'>
                        About
                    </Link>
                    <Link to='/'>
                        Contact
                    </Link>
                    <Link to='/'>
                        Appointment
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;