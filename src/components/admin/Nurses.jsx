import { useState, useEffect, useContext } from "react";
import { baseUrl } from "../../api/baseUrl";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
import NewNurse from "./NewNurse";


const Nurses = () => {
    const {auth} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)
    const [nurses, setNurses] = useState([])
    const url = baseUrl + "nurse"
    const getNurses = async() => {
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            });
            console.log(response.data);
            setNurses(response.data?.nurses)
        }
        catch(error){
        console.log(error);
      }
    }

    useEffect(() => {
      getNurses()
    },[])

    const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true)

  }

  const displayShowModal = () => {
  if (showModal) {
    return (
      <div className="absolute inset-0 bg-opacity-50 flex justify-center z-50 overflow-y-hidden  mt-10 backdrop-blur ">
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg relative h-[180vh] ">
          <div
          className="flex flex-row items-center justify-between border-b-2 border-gray-400 h-[5%]"
          >
            <h1 className="text-gray-50 text-base">Create Nurse</h1>
            <button
            onClick={() => setShowModal(false)}
            className=" text-gray-50 text-base hover:text-red-600 "
            >
              ×
            </button>
          </div >
          <NewNurse />
        </div>
      </div>
    );
  }
  return null;
};

    return (
        <div>
        <h1>Nurses</h1>

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
              {nurses.map((nurse) => 
              
                <tr className="hover:bg-gray-200 cursor-pointer" key={nurse.email}>
                  <th className="px-2 py-4 font-normal text-gray-900 text-center" >
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {nurse.email}
                      </div>
                    </div>
                  </th>

                  <th className="flex gap-3 px-2 py-4 font-normal text-gray-900 text-center">
                    <div className="text-sm">
                      <div className="font-medium capitalize text-gray-700">
                        {`${nurse.firstname} ${nurse.lastname}`}
                      </div>
                      <div className="text-gray-400">{nurse.email}</div>
                    </div>
                  </th>
                  <td className="px-2 py-4 text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold font-green-600">
                      <span className="h-1.5 w-2 rounded-full bg-green-600"></span>
                      {nurse.status}
                    </span>
                  </td>
                  <td className="px-2 py-4 text-center">{nurse.phone}</td>
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
            type="button" onClick={handleClick}>New Nurse</button>
        </div>
        {displayShowModal()}
      </div>
    )
}
 
export default Nurses;
