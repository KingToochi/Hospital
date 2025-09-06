import logo from "../../assets/images/logo.jpg";
import image from "../../assets/images/chiefDoc.jpg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div
    className="w-full max-w-screen h-auto  bg-gray-300 flex justify-between items-center py-5 px-5 gap-10
    lg:min-h-screen lg:flex-col lg:justify-start
    "
    >
      <div
      className=""
      >
        <img src={logo} alt=""
        className="w-[30px] rounded-lg
        lg:w-[80%]"
        />
      </div>

      <ul
      className="flex gap-6
      lg:flex-col"
      >
        <li
        className="w-full"
        >
          <Link to="/admin">
            <FontAwesomeIcon 
            className="text-xl text-gray-700
            sm:text-2xl
            "
            icon="fa fa-home" />
          </Link >
        </li>
        <li>
          <Link to="/admin">
            <FontAwesomeIcon 
            className="text-xl text-gray-700
            sm:text-2xl
            "
            icon="fa fa-user-injured" />
          </Link >
        </li>
        <li>
          <Link to="doctors">
            <FontAwesomeIcon 
            className="text-xl text-gray-700
            sm:text-2xl
            "
            icon="fa fa-user-doctor" />
          </Link >
        </li>
        <li>
          <Link to="nurses">
            <FontAwesomeIcon 
            className="text-xl text-gray-700
            sm:text-2xl
            "
            icon="fa fa-user-nurse" />
          </Link >
        </li>
        <li>
          <Link to="appointment">
            <FontAwesomeIcon 
            className="text-xl text-gray-700
            sm:text-2xl
            "
            icon="fa fa-calendar-check" />
          </Link >
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
