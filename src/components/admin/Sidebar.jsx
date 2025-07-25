import logo from "../../assets/images/logo.jpg";
import image from "../../assets/images/chiefDoc.jpg"
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" h-auto w-full">
      <div className="flex flex-row justify-center items-center h-[70px] border-b-1 gap-[0.5rem] w-[100%]">
        <img className="w-[50px] h-[50px] rounded-[50px]" src={logo} />
        <h2 className="text-2xl font-extrabold">King's Med</h2>
      </div>
      <div className="mt-[5px] h-[150px] flex flex-col items-center justify-around w-[100%] border-b-1">
        <img className="w-[80px] h-[80px] rounded-[50px]" src={image} />
        <h2>Umoke T. K.</h2>
        <h2>Department Head</h2>
      </div>
      <ul className="flex flex-col w-[80%] h-[200px] justify-around items-center ">
        <li className="w-[50%] flex flex-row gap-[1rem] items-center"> 
          <Link to="/doctors">
            <i className="fa fa-user">Doctors</i>
          </Link></li>
        <li className="w-[50%] flex flex-row gap-[1rem] items-center">
          <Link >
            <i className="fa fa-home">Dashboard</i>
          </Link></li>
        <li className="w-[50%] flex flex-row  gap-[1rem] items-center" >
          <Link>
            <i className="fa fa-home">Clinic</i>
          </Link></li>
        <li className="w-[50%] flex flex-row  gap-[1rem] items-center" >
          <Link >
          <i className="fa fa-home">Appointment</i>
        </Link></li>
        <li className="w-[50%] flex flex-row  gap-[1rem] items-center" >
          <Link>
            <i  className="fa fa-home">Patients</i>
          </Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
