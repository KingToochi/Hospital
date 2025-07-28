import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import {baseUrl} from "../../api/baseUrl"
import axios from "axios"


const Doctors = () => {
    const {auth} = useContext(AuthContext);
    const url = baseUrl + "doctor";
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
     // console.log('use effect ran')
    },[]
  )

  const handleClick = (e) => {
    e.preventDefault();

  }
  

    return (  
        <div>
        <h1>Doctors</h1>

        <div className="border rounded-lg border-gray-900 dark:border-gray-400 h-auto mb-4">
          <table className="w-full border-collapse bg-white text-left text-gray-900">
            <thead className="bg-gray-300">
              <tr>
                <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  Email
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  Name
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  Status
                </th>
                 <th scope= "col"
                className="px-4 py-4 font-medium text-center text-gray-900">
                  Phone Number
                </th>
                <th scope="col" className="px-4 py-4 hidden md:flex border-t border-gray-100">
                  {" "}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {doctors.map((doctor) => 
              
                <tr className="hover:bg-gray-200 cursor-pointer" key={doctor.email}>
                  <th className="px-2 py-4 font-normal text-gray-900 text-center" >
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {doctor.email}
                      </div>
                    </div>
                  </th>

                  <th className="flex gap-3 px-2 py-4 font-normal text-gray-900 text-center">
                    <div className="text-sm">
                      <div className="font-medium capitalize text-gray-700 flex bg-blue-300 text-center">
                        {`${doctor.firstname} ${doctor.lastname}`}
                      </div>
                      <div className="text-gray-400">{doctor.email}</div>
                    </div>
                  </th>
                  <td className="px-2 py-4 text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold font-green-600">
                      <span className="h-1.5 w-2 rounded-full bg-green-600"></span>
                      {doctor.status}
                    </span>
                  </td>
                  <td className="px-2 py-4 text-center">{doctor.phone}</td>
                  <td className="px-6 py-4 hidden md:flex">
                    <div className="flex justify-end gap-4">

                    </div>
                  </td>
                </tr>

              
              
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center mx-2 my-2 ">
          <button
            className="flex justify-center items-center w-[150px] font-medium capitalize text-gray-700 flex border-1 border-gray-300 rounded-lg cursor-pointer py-2  "
            type="button" onClick={handleClick}>New Doctor</button>
        </div>
      </div>

    );
}
 
export default Doctors;