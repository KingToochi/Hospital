import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../context/AuthProvider";
import { baseUrl } from "../../../api/baseurl";
import axios from "axios";


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
        }t
    }

    useEffect(() => {
        getPatientDetails();
    }, [id]);

    return (  
        <div>
            Patient details
        </div>
    );
}
 
export default PatientDetails;