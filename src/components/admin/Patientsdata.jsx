import { LineChart, Line, Tooltip} from 'recharts';

// ✅ Export the data
export const patientData = [
    { date: "2025-07-01", patients: 120 },
    { date: "2025-07-02", patients: 150 },
    { date: "2025-07-03", patients: 130 },
];

// ✅ Export the total
export const totalPatients = patientData.reduce((total, item) => total + item.patients, 0);

const Data = () => {
    return (
        <div className="container">
            <LineChart width={100} height={50} data={patientData}>
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="patients"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                />
            </LineChart>
        </div>
    );
};

export default Data;
