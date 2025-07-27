import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthProvider";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";

const Appointment = () => {
  const { auth } = useContext(AuthContext);
  const url = baseUrl + "appointment";
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      console.log(response.data);
      setAppointments(response.data?.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Appointments</h1>

      <div className="border rounded-lg border-gray-900 dark:border-gray-400 h-auto mb-4">
        <table className="w-full border-collapse bg-white text-left text-gray-900">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-4 font-medium text-center">ID</th>
              <th className="px-4 py-4 font-medium text-center">Patient</th>
              <th className="px-4 py-4 font-medium text-center">Medical History</th>
              <th className="px-4 py-4 font-medium text-center">Reason</th>
              <th className="px-4 py-4 font-medium text-center">Doctor</th>
              <th className="px-4 py-4 hidden md:table-cell"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {appointments.map((appointment) => (
              <tr
                className="hover:bg-gray-200 cursor-pointer"
                key={appointment.patient.patientNumber}
              >
                <td className="px-2 py-4 text-center">
                  <div className="text-sm font-medium text-gray-700">
                    {appointment.patient.patientNumber}
                  </div>
                </td>

                <td className="px-2 py-4 text-center">
                  <div className="text-sm">
                    <div className="font-medium capitalize text-gray-700">
                      {`${appointment.patient.firstname} ${appointment.patient.lastname}`}
                    </div>
                  </div>
                </td>

                <td className="px-2 py-4 text-center">
                  {appointment.patient.medicalHistory}
                </td>

                <td className="px-2 py-4 text-center">
                    {appointment.reason}
                </td>

                <td className="px-2 py-4 text-center">
                  <div className="font-medium capitalize text-gray-700">
                    {`${appointment.doctor.firstname} ${appointment.doctor.lastname}`}
                  </div>
                </td>

                <td className="px-6 py-4 hidden md:table-cell">
                  <div className="flex justify-end gap-4">
                    {/* Optional action buttons */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
