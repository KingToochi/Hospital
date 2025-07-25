import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import {baseUrl} from "../../api/baseUrl"
import axios from "axios"


const Doctors = () => {
    const {auth} = useContext(AuthContext);
    const url = baseUrl + "doctors";
    const [doctors, setDoctors] = useState([]);
    
    const getDoctors = async() => {
      try{
        const response = await axios.get(url,{
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          }
        });
        console.log(response.data);
        setDoctors(response.data?.doctors)
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(() => {
      getDoctors();
    },[]
  )

    console.log(auth)
    
    return (  
        <div>
        
        </div>

    );
}
 
export default Doctors;