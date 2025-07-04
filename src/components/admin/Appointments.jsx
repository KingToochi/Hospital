import { LineChart, Line, CartesianGrid, Tooltip, Legend } from 'recharts';

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
        <div className="container">

            <LineChart width={600} height={300} data={doctorAppointment}>
                {/* Optional: remove grid too if you want an even cleaner look */}
                {/* <CartesianGrid strokeDasharray="3 3" /> */}

                {/* Axes removed */}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="No" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
        </div>
    );
};

export default Appointment;
