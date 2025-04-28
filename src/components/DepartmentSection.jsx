import image4 from "../assets/images/4.png"
import image5 from "../assets/images/5.png"
import image6 from "../assets/images/6.png"
import image7 from "../assets/images/7.png"
import image9 from "../assets/images/9.png"
import image8 from "../assets/images/8.png"

const Department = () => {
    return ( 
        <div className="flex flex-col mt-50">
            <h1 className="text-center text-[35px] ">Our Department</h1>
            <h2 className="text-center pt-[5px] text-gray-400">Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.</h2>
            <div className="m-10 grid grid-cols-3 gap-3">
                <div className="border  border-solid rounded-[10px] w-[350px] border-white h-[400px] group">
                    <img className="scale-100 group-hover:scale-105 w-[400px] ease-in duration-500" src={image4} />
                    <h1 className="text-[25px] pl-[10px] font-bold ">Eye Care</h1>
                    <h2 className="pl-[10px] text-gray-400">Esteem spirit temper too say adieus who direct esteem.</h2>
                    <a className="pl-[10px] text-blue-400" href="">Learn More</a>
                </div>
                <div className="group border border-solid rounded-[10px] w-[350px] border-white h-[400px]">
                    <img className="scale-100 group-hover:scale-105 ease-in duration-500" src={image5} />
                    <h1 className="text-[25px] pl-[10px] font-bold ">Physical Therapy</h1>
                    <h2 className="pl-[10px] text-gray-400">Esteem spirit temper too say adieus who direct esteem.</h2>
                    <a className="pl-[10px] text-blue-400" href="">Learn More</a>
                </div>
                <div className="group border border-solid rounded-[10px] w-[350px] border-white h-[400px]">
                    <img className="scale-100 group-hover:scale-105 ease-in duration-500" src={image6} />
                    <h1 className="text-[25px] pl-[10px] font-bold ">Dental Care</h1>
                    <h2 className="pl-[10px] text-gray-400">Esteem spirit temper too say adieus who direct esteem.</h2>
                    <a className="pl-[10px] text-blue-400" href="">Learn More</a>
                </div>
                <div className=" group border border-solid rounded-[10px] w-[350px] border-white h-[400px]">
                    <img className="scale-100 group-hover:scale-105 ease-in duration-500" src={image7} />
                    <h1 className="text-[25px] pl-[10px] font-bold ">Diagnostic Test</h1>
                    <h2 className="pl-[10px] text-gray-400">Esteem spirit temper too say adieus who direct esteem.</h2>
                    <a className="pl-[10px] text-blue-400" href="">Learn More</a>
                </div>
                <div className="group border border-solid rounded-[10px] w-[350px] border-white h-[400px]">
                    <img className="scale-100 group-hover:scale-105 ease-in duration-500" src={image8} />
                    <h1 className="text-[25px] pl-[10px] font-bold ">Skin Surgery</h1>
                    <h2 className="pl-[10px] text-gray-400">Esteem spirit temper too say adieus who direct esteem.</h2>
                    <a className="pl-[10px] text-blue-400" href="">Learn More</a>
                </div>
                <div className=" group border border-solid rounded-[10px] w-[350px] border-white h-[400px]">
                    <img className="scale-100 group-hover:scale-105 ease-in duration-500" src={image9} />
                    <h1 className="text-[25px] pl-[10px] font-bold ">Surgical Service</h1>
                    <h2 className="pl-[10px] text-gray-400">Esteem spirit temper too say adieus who direct esteem.</h2>
                    <a className="pl-[10px] text-blue-400" href="">Learn More</a>
                </div>
            </div>
        </div>
     );
}
 
export default Department ;