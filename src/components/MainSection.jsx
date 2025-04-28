


import { Link } from 'react-router-dom';
import image1 from '../assets/images/1.png.webp';
import image2 from "../assets/images/2.png";

const MainSection = () => {
    return ( 
        <div className='flex flex-row w-[100%] h-auto m-10'>
            <div className='flex w-[50%]'>
                <img className='relative w-70' src={image1} alt="Image 1" />
                <img className='absolute top-[1200px] w-70 left-60' src={image2} alt="Image 2" />
            </div>
            <div className='w-[50%] flex flex-col items-start'>
                <h2 className='text-[20px] border-b-[2px] border-solid border-blue-300'>Welcome to King's Hospital</h2>
                <h1 className='pt-[20px] text-[40px] font-black]'>Best Care For Your Good Health</h1>
                <h2 className='text-gray-400'>Esteem spirit temper too say adieus who direct esteem.<br />  It esteems luckily or picture placing drawing. <br />Apartments frequently or motionless on reasonable projecting expression.</h2>
                <ul  className='text-gray-400 list-(--my-marker) m-5'>
                    <li> Apartments frequently or motionless.</li>
                    <li> Duis aute irure dolor in reprehenderit in voluptate.</li>
                    <li>Voluptatem quia voluptas sit aspernatur.</li>
                </ul>
                <Link  className='text-blue-400 text-[15px] border border-solid w-[100px] rounded-[10px] border-blue-300 text-center' href="/">Learn More</Link>
            </div>
        </div>
    );
}
 
export default MainSection;
