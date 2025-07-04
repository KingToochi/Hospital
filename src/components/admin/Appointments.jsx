import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Appointment = () => {
    const doctorAppointment = [
        { date: "2025-07-01", No: 15 },
        { date: "2025-07-02", No: 20 },
        { date: "2025-07-03", No: 18 },
    ];

    // Calculate total appointments
    const totalAppointments = doctorAppointment.reduce((total, item) => {
        return total + item.No;
    }, 0);

    return ( 
        <div className="container w-full border-[1px] border-solid border-[#d3d3d3] p-4">
            <h2>Total Appointments: {totalAppointments}</h2>

            <BarChart width={1000} height={300} data={doctorAppointment}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="No" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Appointment;
