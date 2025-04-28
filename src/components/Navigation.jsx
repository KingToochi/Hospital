import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return ( 
        <nav className=" h-20 bg-white flex flex-row w-full items-center" >
            <div className="ml-10 w-[30%] flex flex-row gap-2 items-center ">
                <img className='w-10 h-10 rounded-[10px]' src={logo} alt='logo' />
                <h3 className="logo-text">King'sMed</h3>
            </div>

            <ul className="nav-links flex flex-row gap-8">
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="/department">Department</Link>
                </li>

                <li className='dropdown group relative'>
                    <Link to="/">Blog<i className='fa fa-caret-down'></i></Link>
                    {/* creating a dropdown options for the blog */}
                    <ul className='p-1 w-[100px] hidden group-hover:flex flex-col gap-[0.2rem] absolute  bg-white z-1'>
                            <li>
                                <Link to="/new-blog">New blog</Link>
                            </li>
                            <li>
                                <Link to="/single-blog">Single blog</Link>
                            </li>
                        </ul>
                </li>

                <li className='dropdown group relative'>
                    <Link to="/">Pages<i className='fa fa-caret-down'></i></Link>
                    {/* creating a dropdown options for the pages*/}
                    <ul className='p-1 w-[100px] hidden group-hover:flex flex-col gap-[0.2rem] absolute  bg-white z-1'>
                            <li>
                                <Link to="/element">Element</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                </li>

                <li>
                    <Link to="/doctors">Doctors</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li className='appointment-btn border border-solid rounded-[10px] w-[200px] text-center bg-blue-400 text-white'>
                    <Link to="/appointment">Make an Appointment</Link>
                </li>

                <li>
                    <Link to="/login">Log In</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;