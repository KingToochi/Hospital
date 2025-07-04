import Data, { totalPatients, patientData } from "./Patientsdata";
import Appointment from "./Appointments";

const HeroSection = () => {
    return ( 
        <div className="flex flex-row w-[100%] h-auto">
            <div className="w-[30%] h-[100px]">
                <div className="flex flex-row gap-[1rem] justify-flex-start m-[5px]" >
                    <i className="fa fa-home"></i>
                    <div className="flex flex-col">
                        <h2>{totalPatients}</h2>
                        <h2>Patients</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-[5rem] justify-around m-[5px] w-full">
                    <h2 className="text-[12px]">This month</h2>
                    <Data />
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;