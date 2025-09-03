import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const url = `${baseUrl}login`;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const login = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post(url, data, {
        headers: { "content-type": "application/json" },
        withCredentials: true,
      });
      //  console.log(response.data)
      setAuth(response.data);
      toast.success("Logged in successfully");
      const role = response.data.role;
      setTimeout(() => {
        switch (role) {
          case "Admin":
            navigate("/admin");
            break;
          case "Doctor":
            navigate("/doctor");
            break;
          case "Patient":
            navigate("/patient");
            break;
          case "Nurse":
            navigate("/nurse");
            break;
          default:
            navigate("/unauthorized");
            break;
        }
      }, 2000);
    } catch (error) {
      console.log(error);
      switch (error.status) {
        case 401:
          toast.error("Invalid credentials");
          break;
        case 400:
          toast.error("Login data required");
          break;
        default:
          toast.error("Something Went Wrong.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 max-w-lg w-full transform transition-transform duration-300 hover:scale-105">
      <ToastContainer />
      <div className="flex flex-col gap-6 items-center">
        <img className="rounded-[50%] w-[100px]" src={logo} alt="logo" />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">LOGIN</h2>
      </div>
      <form
        className="flex flex-col space-y-6"
        onSubmit={handleSubmit(login)}
      >
        <label className="w-full flex items-center space-x-4 border border-gray-300 rounded-xl focus-within:border-blue-500 transition-colors duration-200 p-3">
          <FontAwesomeIcon className="text-3xl" icon="fa fa-user" />
          <input
            className="w-full h-auto p-1 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none placeholder-gray-400 text-base sm:text-lg"
            type="email"
            name="email"
            placeholder="Email Adddress"
            {...register("email", { required: true })}
          />
        </label>
        {errors.email && <p className="text-red-400">email is required</p>}

        <label className="w-full flex items-center space-x-4 border border-gray-300 rounded-xl focus-within:border-blue-500 transition-colors duration-200 p-3">
          <FontAwesomeIcon className="text-3xl" icon="fa fa-lock" />
          <input
            className="w-full h-auto p-1 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none placeholder-gray-400 text-base sm:text-lg"
            type="password"
            name="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
        </label>
        {errors.email && <p className="text-red-400">password is required</p>}

        <button
         className="w-full mt-4 py-3 font-semibold rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          {loading ? "Loggin in..." : "Login"}
        </button>
        <div className="flex flex-col sm:flex-row sm:justify-between text-gray-50 items-center text-sm mt-4 text-gray-600" >
          <label className="flex items-center text-gray-50 space-x-2">
            <input 
            className="form-checkbox text-blue-600 rounded-md"
            type="checkbox" checked="defaultChecked" name="remember" />{" "}
            Remember me
          </label>
          <span className="mt-2 text-gray-50 sm:mt-0">
            Forgot <Link href="#">password?</Link>
          </span>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
