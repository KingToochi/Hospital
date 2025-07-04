import Appointment from "./Appointments";
import AvailableDoctors from "./AvailableDoctors";
import HeroSection from "./HeroSection";

const Section = () => {
    return ( 
        <div>
            <HeroSection />
            <AvailableDoctors />
            <Appointment />
        </div>
     );
}
 
export default Section;