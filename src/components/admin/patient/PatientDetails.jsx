

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../context/AuthProvider";
import { baseUrl } from "../../../api/baseUrl";
import axios from "../../../api/axios";

const PatientDetails = () => {
  const [patient, setPatient] = useState({});
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const url = `${baseUrl}patient/${id}`;

  const getPatientDetails = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      setPatient(response.data?.patient);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  useEffect(() => {
    getPatientDetails();
  }, [id]);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen py-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Patient Details
      </h1>

      {/* Card */}
      <div className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Name
            </h2>
            <p className="text-gray-900 mt-1">
              {patient?.firstname} {patient?.lastname}
            </p>
          </div>

          {/* DOB */}
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Date of Birth
            </h2>
            <p className="text-gray-900 mt-1">{patient?.dateOfBirth}</p>
          </div>

          {/* Email */}
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Email
            </h2>
            <p className="text-gray-900 mt-1">{patient?.email}</p>
          </div>

          {/* Gender */}
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Gender
            </h2>
            <p className="text-gray-900 mt-1">{patient?.gender}</p>
          </div>

          {/* Genotype */}
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Genotype
            </h2>
            <p className="text-gray-900 mt-1">{patient?.genotype}</p>
          </div>

          {/* Blood Group */}
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Blood Group
            </h2>
            <p className="text-gray-900 mt-1">{patient?.bloodGroup}</p>
          </div>

          {/* Phone */}
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Phone
            </h2>
            <p className="text-gray-900 mt-1">{patient?.phone}</p>
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Address
            </h2>
            <p className="text-gray-900 mt-1">{patient?.address}</p>
          </div>

          {/* Medical History */}
          <div className="sm:col-span-2">
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Medical History
            </h2>
            <p className="text-gray-900 mt-1">{patient?.medicalHistory}</p>
          </div>

          {/* Allergies */}
          <div className="sm:col-span-2">
            <h2 className="text-sm sm:text-base font-semibold text-gray-700">
              Allergies
            </h2>
            <p className="text-gray-900 mt-1">{patient?.allergies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
