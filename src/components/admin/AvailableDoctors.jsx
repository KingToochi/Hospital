import image from "../../assets/images/chiefDoc.jpg";

const AvailableDoctors = () => {
    return ( 
        <div className="flex flex-col border-[1px] border-solid border-[#d3d3d3] h-auto w-full">
            <h1 className="text-s font-bold mb-4 m-[5px]">Available Doctors</h1>
            <div className="flex flex-row">
                <div className="flex flex-row gap-[1rem] items-center h-[100px] w-[30%] m-[1rem] border-[1px] border-solid border-[#d3d3d3]">
                    <div className=" ">
                        <img className="w-[50px] h-[50px] rounded-[50px] p-[5px]" src={image} alt="" />
                    </div>
                    <div className="flex flex-col gap-[0.1rem]">
                        <h2>Umoke T. K.</h2>
                        <h2>Chief Surgeon-9yrs</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-[1rem] items-center h-[100px] w-[30%] m-[1rem] border-[1px] border-solid border-[#d3d3d3]">
                    <div className=" ">
                        <img className="w-[50px] h-[50px] rounded-[50px] p-[5px]" src={image} alt="" />
                    </div>
                    <div className="flex flex-col gap-[0.1rem]">
                        <h2>Umoke T. K.</h2>
                        <h2>Chief Surgeon-9yrs</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-[1rem] items-center h-[100px] w-[30%] m-[1rem] border-[1px] border-solid border-[#d3d3d3]">
                    <div className=" ">
                        <img className="w-[50px] h-[50px] rounded-[50px] p-[5px]" src={image} alt="" />
                    </div>
                    <div className="flex flex-col gap-[0.1rem]">
                        <h2>Umoke T. K.</h2>
                        <h2>Chief Surgeon-9yrs</h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AvailableDoctors;