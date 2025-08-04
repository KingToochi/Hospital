import { useState } from "react";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../api/baseUrl";
import useAuth from "../../hooks/UseAuth";

const NewNurse = () => {
  const { auth } = useAuth();
  const url = `${baseUrl}nurse`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleNurse = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleNurse)}
      className="grid sm:grid-cols-2 gap-6 px-2 py-2 bg-gray-900"
    >
      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="fname">
          First Name
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="fname"
          placeholder="Enter Your First Name"
          {...register("firstname", { required: "first name required!" })}
        />
        {errors.firstname && (
          <p className="text-red-300 mb-2">{errors.firstname.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="lname">
          Last Name
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="lname"
          placeholder="Enter Your Last Name"
          {...register("lastname", { required: "Last Name required!" })}
        />
        {errors.lastname && (
          <p className="text-red-300 mb-2">{errors.lastname.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="email">
          Email Address
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="email"
          id="email"
          placeholder="Enter Your Email Address"
          {...register("email", { required: "email required!" })}
        />
        {errors.email && (
          <p className="text-red-300 mb-2">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="phone"
          placeholder="Enter Your Phone Number"
          {...register("phone", { required: "Phone Number required!" })}
        />
        {errors.phone && (
          <p className="text-red-300 mb-2">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col col-span-2">
        <label
          className="text-base font-medium text-white"
          htmlFor="station"
        >
          Station
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="station"
          placeholder="Enter Your Station"
          {...register("station", {
            required: "Station required!",
          })}
        />
        {errors.station && (
          <p className="text-red-300 mb-2">{errors.station.message}</p>
        )}
      </div>
      <div className="col-span-2 flex justify-center">
        <button
          className="w-[30%] border-2 border-gray-100 rounded-lg px-1 py-1 text-gray-50 "
          type="submit"
        >
          Add Nurse
        </button>
      </div>
    </form>
  );
};

export default NewNurse;
