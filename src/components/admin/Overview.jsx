import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import {baseUrl} from "../../api/baseUrl"
import axios from "axios"
import NewPatient from "./NewPatient";
const Overview = () => {
    const {auth} = useContext(AuthContext);
    const url = baseUrl + "patient";
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const getPatients = async() => {
      try{
        const response = await axios.get(url,{
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          }
        });
        console.log(response.data);
        setPatients(response.data?.patients)
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(() => {
      getPatients();
    },[]
  )

    // console.log(auth)
  // const displayShowModal = () => {
  //   if (showModal === true) {
  //     return <NewPatient />
  //   } 
  //   else {
  //     return null
  //   }
  
  // }

  const displayShowModal = () => {
  if (showModal) {
    return (
      <div className="fixed inset-0 bg-opacity-50 flex  justify-center z-50 overflow-y-auto mt-10 backdrop-blur">
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 w-full max-w-lg relative h-[180vh]">
          <div
          className="flex flex-row items-center justify-between border-b-2 border-gray-900 h-[5%]"
          >
            <h1>Create New Patient</h1>
            <button
            onClick={() => setShowModal(false)}
            className=" text-gray-600 hover:text-red-600 text-xl"
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
    setShowModal(true)
  }

  
  

    return (
      <div>
        <h1 className="text-center font-medium capitalize text-gray-700">Patients</h1>
        <div className="flex justify-end items-center mx-2 my-2 ">
          <button
            className="flex justify-center items-center w-[150px] font-medium capitalize text-gray-700 flex border-1 border-gray-300 rounded-lg cursor-pointer py-2  "
            type="button" onClick={handleClick}>New Patient</button>
        </div>

        <div className="border rounded-lg border-gray-900 dark:border-gray-400 h-auto mb-4">
          <table className="w-full border-collapse bg-white text-left text-gray-900">
            <thead className="bg-gray-300">
              <tr>
                <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  ID
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  Name
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  State
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  Phone Number
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  Gender
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  blood Type
                </th>
                <th scope="col" className="px-4 py-4 hidden md:flex border-t border-gray-100">
                  {" "}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {patients.map((patient) => 
              
                <tr className="hover:bg-gray-200 cursor-pointer" key={patient.id}>
                  <th className="px-2 py-4 font-normal text-gray-900 text-center" >
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {patient.patientNumber}
                      </div>
                    </div>
                  </th>

                  <th className="flex gap-3 px-2 py-4 font-normal text-gray-900 text-center justify-center">
                    <div className="text-sm text-center">
                      <div className="font-medium capitalize text-gray-700 text-center">
                        {`${patient.firstname} ${patient.lastname}`}
                      </div>
                      <div className="text-gray-400">{patient.email}</div>
                    </div>
                  </th>
                  <td className="px-2 py-4 text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold font-green-600">
                      <span className="h-1.5 w-2 rounded-full bg-green-600"></span>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-2 py-4 text-center">{patient.phone}</td>
                  <td className="px-2 py-4 text-center">{patient.gender}</td>
                  <td className="px-2 py-4 text-center">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        {patient.bloodGroup}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        {patient.genotype}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:flex">
                    <div className="flex justify-end gap-4">

                    </div>
                  </td>
                </tr>

              
              
              )}
            </tbody>
          </table>
        </div>
        {displayShowModal()}
        
      </div>
  );

}
 
export default Overview;

