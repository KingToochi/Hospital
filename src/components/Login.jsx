import logo from '../assets/images/logo.jpg'
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <div className='bg-sky-50 flex flex-col h-auto gap-[5rem] items-center w-[50%] m-auto'>
            <div className='flex flex-col items-center gap-[3rem]'>
                <img className='rounded-[50px] mt-[50px]' src={logo} alt="logo" />
                <h2>LOG IN</h2>
            </div>
            <form className="flex flex-col gap-[3rem] w-full mb-10">
                <label className='flex w-[80%] gap-[0.5rem] border-b-2 items-center m-auto'>
                    <i className="fa fa-user"></i>
                    <input className='w-[97.5%] border-0 focus:outline-none' type="email" name="email"  placeholder="Email Adddress" />
                </label>
                <label className='flex w-[80%] gap-[0.5rem] border-b-2 items-center m-auto'>
                    <i className="fa fa-lock"></i>
                    <input className='w-[97.5%] border-0 focus:outline-none' type="password" name="password" placeholder="password"/>
                </label>
                <button className='border rounded-[10px] w-[20%] m-auto bg-white cursor-pointer' type='submit'>Login</button>
                <label className='flex ml-[50px]'>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                    <span class="ml-[250px]">Forgot <Link href="#">password?</Link></span>
                </label>
            </form>
        </div>
     );
}
 
export default Login;