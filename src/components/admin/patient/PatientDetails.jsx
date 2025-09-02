import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../context/AuthProvider";
import { baseUrl } from "../../../api/baseUrl";
import axios from "../../../api/axios";


const  PatientDetails= () => {
    const [patient, setPatient] = useState({});
    const {auth} = useContext(AuthContext)
    const {id} = useParams();
    const url = `${baseUrl}patient/${id}`;
   
    const getPatientDetails = async () => {
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`,
                }
            })
            setPatient(response.data?.patient);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching patient details:", error);
        }
    }


  useEffect(() => {
    getPatientDetails();
  }, [id]);

  return (
    <div
    className="flex flex-col items-start p-4 bg-gray-100 min-h-screen"
    >
        <h1 
       className="text-2xl font-bold  text-gray-800 mb-4" 
        >Patient Details</h1>
        <div
        className="flex flex-col text-xl text-gray-700 bg-white p-6 rounded-lg shadow-md w-full max-w-2xl gap-4"
        >

            <div className="flex gap-6">
                <h2 className="text-xl text-gray-700 font-semibold">Name:</h2> <span>{patient.firstname} {patient.lastname}</span>
            </div>
            <div className="flex gap-6">
                <h2 className="text-xl text-gray-700 font-semibold">Date Of Birth:</h2> <span>{patient.dateOfBirth}</span>
            </div>
            <div>Email Address: {patient.email}</div>
            <div>Gender: {patient.gender}</div>
            <div>Genotype: {patient.genotype}</div>
            <div>Blood Group: {patient.bloodGroup}</div>  
            <div>Phone Number: {patient.phone}</div>
            <div>Address: {patient.address}</div>
            <div>Medical History: {patient.medicalHistory}</div>
            <div>Allergies: {patient.allergies}</div>
        </div>
    
    </div>
  )
};

export default PatientDetails;
