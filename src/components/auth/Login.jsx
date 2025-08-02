import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/baseurl";
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
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="w-[70%] flex flex-col gap-10 items-center font-[roboto] bg-gray-300 px-4 py-4 ">
      <ToastContainer />
      <div className="flex flex-col gap-6 items-center">
        <img className="rounded-[50%] w-[100px]" src={logo} alt="logo" />
        <h2 className="text-2xl font-bold text-gray-600">LOGIN</h2>
      </div>
      <form
        className="flex flex-col items-center gap-20"
        onSubmit={handleSubmit(login)}
      >
        <label className="w-full border-2 rounded-lg border-gray-600 h-[50px] flex gap-2 items-center">
          <FontAwesomeIcon className="text-3xl" icon="fa fa-user" />
          <input
            className="w-full h-[45px] p-2 text-3xl bg-gray-300"
            type="email"
            name="email"
            placeholder="Email Adddress"
            {...register("email", { required: true })}
          />
        </label>
        {errors.email && <p className="text-red-400">email is required</p>}

        <label className="w-full border-2 rounded-lg border-gray-600 h-[50px] flex gap-2 items-center">
          <FontAwesomeIcon className="text-3xl" icon="fa fa-lock" />
          <input
            className="w-full h-[45px] p-2 text-3xl bg-gray-300"
            type="password"
            name="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
        </label>
        {errors.email && <p className="text-red-400">password is required</p>}

        <button
          className="w-[150px] text-2xl font-bold border-2 rounded-lg border-gray-600"
          type="submit"
        >
          {loading ? "Loggin in..." : "Login"}
        </button>
        <label className="">
          <input 
          className="text-xl font-semibold"
          type="checkbox" checked="defaultChecked" name="remember" />{" "}
          Remember me
          <span className="ml-[250px] text-xl font-semibold">
            Forgot <Link href="#">password?</Link>
          </span>
        </label>
      </form>
      </div>
    </div>
  );
};

export default Login;
