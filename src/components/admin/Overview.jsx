import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";
import NewPatient from "./NewPatient";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdatePatientModal from "./patient/UpdatePatient";
const Overview = () => {
  const { auth } = useContext(AuthContext);
  const url = baseUrl + "patient";
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPatient, setCurrentPatient] = useState({});
  const navigate = useNavigate();
  const getPatients = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      console.log(response.data);
      setPatients(response.data?.patients);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePantientModal = (patient) => {
    setCurrentPatient(patient);
    setShowModal(true);
  };

  useEffect(() => {
    getPatients();
  }, []);

  const handleViewpatient = (id) => {
    navigate(`/admin/patient/${id}`);
  };

  const displayShowModal = () => {
    if (showModal) {
      return (
        <div className="fixed inset-0 bg-opacity-50 flex  justify-center z-50 overflow-y-auto mt-10 backdrop-blur ">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg relative h-[180vh] ">
            <div className="flex flex-row items-center justify-between border-b-2 border-gray-400 h-[5%]">
              <h1 className="text-gray-50 text-base">Create Patient</h1>
              <button
                onClick={() => setShowModal(false)}
                className=" text-gray-50 text-base hover:text-red-600 "
              >
                ×
              </button>
            </div>
            <NewPatient />
          </div>
        </div>
      );
    }
    return null;
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div
    className="w-full flex flex-col"
    >
      <div
      className="flex w-full justify-between px-2 my-2"
      >
        <h1 
        className="w-1/2 text-xl font-bold text-gray-700 
        lg:text-center
        "
        >
        Patients
      </h1>
        <button
        className="w-1/3 border border-gray-900 text-gray-400 hover:text-gray-700 rounded-lg mx-2
        sm:w-1/4
        lg:w-[10%]
        "
          type="button"
          onClick={handleClick}
        >
          New Patient
        </button>
      </div>
  <div className="w-full overflow-x-auto">
  <table className="min-w-full border border-gray-200">
    <thead className="bg-gray-400 text-left">
      <tr>
        <th scope="col" className="hidden lg:table-cell px-4 py-2">ID</th>
        <th scope="col" className="px-4 py-2">Name</th>
        <th scope="col" className="hidden lg:table-cell px-4 py-2">State</th>
        <th scope="col" className="hidden md:table-cell px-4 py-2">Phone Number</th>
        <th scope="col" className="px-4 py-2">Gender</th>
        <th scope="col" className="hidden lg:table-cell px-4 py-2">Blood Type</th>
        <th scope="col" className="px-4 py-2">Action</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {patients.map((patient) => (
        <tr key={patient._id}>
          {/* ID - only visible on large screens */}
          <td className="hidden lg:table-cell px-4 py-2">{patient.patientNumber}</td>

          {/* Name - always visible */}
          <td className="px-4 py-2">
            {`${patient.firstname} ${patient.lastname}`}
            <div className="hidden md:block text-sm text-gray-500">{patient.email}</div>
          </td>

          {/* State - large screens only */}
          <td className="hidden lg:table-cell px-4 py-2">{patient.status}</td>

          {/* Phone Number - visible from md and above */}
          <td className="hidden md:table-cell px-4 py-2">{patient.phone}</td>

          {/* Gender - always visible */}
          <td className="px-4 py-2">{patient.gender}</td>

          {/* Blood Type - large screens only */}
          <td className="hidden lg:table-cell px-4 py-2">{patient.genotype}</td>

          {/* Action - always visible */}
          <td className="px-4 py-2">
            <div className="flex space-x-4">
              <div className="flex items-center cursor-pointer group">
                <FontAwesomeIcon
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => handleViewpatient(patient._id)}
                  icon="fa-solid fa-eye"
                />
                <span className="hidden group-hover:inline text-sm ml-1">View</span>
              </div>

              <div className="flex items-center cursor-pointer group">
                <FontAwesomeIcon
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => handlePantientModal(patient)}
                  icon="fa-solid fa-edit"
                />
                <span className="hidden group-hover:inline text-sm ml-1">Update</span>
              </div>

              <div className="flex items-center cursor-pointer group">
                <FontAwesomeIcon
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => handleDelete(patient._id)}
                  icon="fa-solid fa-trash"
                />
                <span className="hidden group-hover:inline text-sm ml-1">Delete</span>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {displayShowModal()}
      {/* <UpdatePatientModal open={showModal} handleClose={setShowModal} patient={currentPatient} /> */}
      {showModal && currentPatient && Object.keys(currentPatient).length > 0 && (
        <UpdatePatientModal
        open={showModal}
        handleClose={setShowModal}
        patient={currentPatient}
        />
      )}

    </div>
  );
};

export default Overview;
