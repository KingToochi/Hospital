import Data, { totalPatients, patientData } from "./Patientsdata";
import Appointment from "./Appointments";

const HeroSection = () => {
    return ( 
        <div className="flex flex-row w-[100%] h-auto justify-around">
            <div className="w-[30%] h-[100px] border-[1px] border-solid border-[#d3d3d3] rounded-[10px] m-[5px] p-[10px] h-[150px]">
                <div className="flex flex-row gap-[1rem] justify-flex-start m-[5px] items-center" >
                    <i className="fa fa-home border-[1px] border-black rounded-[50%]"></i>
                    <div className="flex flex-col">
                        <h2>{totalPatients}</h2>
                        <h2>Patients</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-[5rem] justify-around m-[10px] w-full items-center">
                    <h2 className="text-[12px]">This month</h2>
                    <Data />
                </div>
            </div>

             <div className="w-[30%] h-[100px] border-[1px] border-solid border-[#d3d3d3] rounded-[10px] m-[5px] p-[10px] h-[150px]">
                <div className="flex flex-row gap-[1rem] justify-flex-start m-[5px] items-center" >
                    <i className="fa fa-home border-[1px] border-black rounded-[50%]"></i>
                    <div className="flex flex-col">
                        <h2>{totalPatients}</h2>
                        <h2>Patients</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-[5rem] justify-around m-[10px] w-full items-center">
                    <h2 className="text-[12px]">This month</h2>
                    <Data />
                </div>
            </div>

             <div className="w-[30%] h-[100px] border-[1px] border-solid border-[#d3d3d3] rounded-[10px] m-[5px] p-[10px] h-[150px]">
                <div className="flex flex-row gap-[1rem] justify-flex-start m-[5px] items-center" >
                    <i className="fa fa-home border-[1px] border-black rounded-[50%]"></i>
                    <div className="flex flex-col">
                        <h2>{totalPatients}</h2>
                        <h2>Patients</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-[5rem] justify-around m-[10px] w-full items-center">
                    <h2 className="text-[12px]">This month</h2>
                    <Data />
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;