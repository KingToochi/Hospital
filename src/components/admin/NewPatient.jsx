import { useState } from "react";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../api/baseUrl";
import useAuth from "../../hooks/UseAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePost from "../../hooks/usePost";

const NewPatient = () => {
  const { auth } = useAuth();
  const url = `${baseUrl}patient`;
  const [loading, setLoading] = useState(false);
  const post = usePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const newPatient = async(data) => {
    setLoading(true);
    try {
      const response = await post(url, data, auth.accessToken);
      console.log(response?.data);
      toast.success("Patient added successfully");
      reset();
    }
    catch (error) {
      console.error("Error adding patient:", error);
      toast.error("Failed to add patient");
    }
    finally {
      setLoading(false);
    }
  }
  const handlePatient = (data) => {
    newPatient(data);
  }


  return (
    <form
      onSubmit={handleSubmit(handlePatient)}
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

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="gender">
          Gender
        </label>
        <select
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50 bg-gray-900"
          {...register("gender", { required: "Gender required" })}
          id="gender"
        >
          <option disabled hidden selected>
            select Gender
          </option>
          <option>Male</option>
          <option>Female</option>
        </select>

        {errors.gender && (
          <p className="text-red-300 mb-2">{errors.gender.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-base font-medium text-white"
          htmlFor="dateOfBirth"
        >
          Date of Birth
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="date"
          id="dateOfBirth"
          {...register("dateOfBirth", { required: "Date of Birth required!" })}
        />
        {errors.dateOfBirth && (
          <p className="text-red-300 mb-2">{errors.dateOfBirth.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="weight">
          Weight
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="weight"
          placeholder="Enter Your Weight in Kg"
          {...register("weight", { required: "Weight required!" })}
        />
        {errors.weight && (
          <p className="text-red-300 mb-2">{errors.weight.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="height">
          Height
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="height"
          placeholder="Enter Your Height in Kg"
          {...register("height", { required: "Height required!" })}
        />
        {errors.height && (
          <p className="text-red-300 mb-2">{errors.height.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-base font-medium text-white"
          htmlFor="emergencyContact"
        >
          Emergency Contact
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="emergencyContact"
          placeholder="Enter Your Emergency Contact"
          {...register("emergencyContact", {
            required: "Emergency Contact required!",
          })}
        />
        {errors.emergencyContact && (
          <p className="text-red-300 mb-2">{errors.emergencyContact.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="address">
          Address
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="address"
          placeholder="Enter Your Address"
          {...register("address", { required: "Address required!" })}
        />
        {errors.address && (
          <p className="text-red-300 mb-2">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-base font-medium text-white"
          htmlFor="bloodGroup"
        >
          Blood Group
        </label>
        <select
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50 bg-gray-900"
          {...register("bloodGroup", { required: "Blood Group required" })}
          id="bloodGroup"
        >
          <option selected hidden disabled>
            select Blood Group
          </option>
          <option>O+</option>
          <option>O-</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>
        {errors.bloodGroup && (
          <p className="text-red-300 mb-2">{errors.bloodGroup.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="genotype">
          Genotype
        </label>
        <select
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50 bg-gray-900"
          {...register("genotype", { required: "Genotype required" })}
          id="genotype"
        >
          <option selected hidden disabled>
            select Genotype
          </option>
          <option>AA</option>
          <option>AS</option>
          <option>SS</option>
          <option>AC</option>
          <option>CC</option>
          <option>SC</option>
        </select>
        {errors.genotype && (
          <p className="text-red-300 mb-2">{errors.genotype.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-base font-medium text-white" htmlFor="status">
          Patient Status
        </label>
        <select 
        className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50 bg-gray-900"
        id="status" 
        {...register("status",{required: "Status Required"})}
        >
          <option selected hidden disabled>Select Status</option>
          <option>Check up</option>
          <option>Consultation</option>

        </select>
        {errors.status && (
          <p className="text-red-300 mb-2">{errors.status.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-base font-medium text-white"
          htmlFor="patientNumber"
        >
          Patient Number
        </label>
        <input
          className="border-2 border-gray-100 w-full rounded-lg px-1 py-1 text-gray-50"
          type="text"
          id="patientNumber"
          placeholder="Enter Your Patient Number"
          {...register("patientNumber", {
            required: "Patient Number required!",
          })}
        />
        {errors.patientNumber && (
          <p className="text-red-300 mb-2">{errors.patientNumber.message}</p>
        )}
      </div>

      <div className="col-span-2">
        <label
          className="text-base font-medium text-white"
          htmlFor="medicalHistory"
        >
          Medical History
        </label>
        <textarea
          className="border-2 border-gray-100 w-full h-[30vh] rounded-lg px-1 py-1 text-gray-50 bg-gray-900"
          id="medicalHistory"
          placeholder="Enter your Medical History"
          {...register("medicalHistory", {
            required: "Medical History required!",
          })}
        />
        {errors.medicalHistory && (
          <p className="text-red-300 mb-2">{errors.medicalHistory.message}</p>
        )}
      </div>

      <div className="col-span-2 flex justify-center">
        <button 
        disabled = {loading}
       className="w-[30%] border-2 border-gray-100 rounded-lg px-1 py-1 text-gray-50 "
      type="submit">{loading ?" loading...": "Add Patient"}</button>
      </div>
    </form>
  );
};

export default NewPatient;
