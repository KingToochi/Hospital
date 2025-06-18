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
    <div className="bg-sky-50 flex flex-col h-auto gap-[5rem] items-center w-[50%] m-auto">
      <ToastContainer />
      <div className="flex flex-col items-center gap-[3rem]">
        <img className="rounded-[50px] mt-[50px]" src={logo} alt="logo" />
        <h2>LOG IN</h2>
      </div>
      <form
        className="flex flex-col gap-[3rem] w-full mb-10"
        onSubmit={handleSubmit(login)}
      >
        <label className="flex w-[80%] gap-[0.5rem] border-b-2 items-center m-auto">
          <i className="fa fa-user"></i>
          <input
            className="w-[97.5%] border-0 focus:outline-none"
            type="email"
            name="email"
            placeholder="Email Adddress"
            {...register("email", { required: true })}
          />
        </label>
        {errors.email && <p className="text-red-400">email is required</p>}

        <label className="flex w-[80%] gap-[0.5rem] border-b-2 items-center m-auto">
          <i className="fa fa-lock"></i>
          <input
            className="w-[97.5%] border-0 focus:outline-none"
            type="password"
            name="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
        </label>
        {errors.email && <p className="text-red-400">password is required</p>}

        <button
          className="border-2 rounded-[10px] w-[20%] m-auto bg-white cursor-pointer"
          type="submit"
        >
          {loading ? "Loggin in..." : "Login"}
        </button>
        <label className="flex ml-[50px]">
          <input type="checkbox" checked="defaultChecked" name="remember" />{" "}
          Remember me
          <span className="ml-[250px]">
            Forgot <Link href="#">password?</Link>
          </span>
        </label>
      </form>
    </div>
  );
};

export default Login;
