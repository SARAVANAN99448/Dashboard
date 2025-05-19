import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', temperature: 20, humidity: 40 },
  { time: '02:00', temperature: 22, humidity: 42 },
  { time: '04:00', temperature: 24, humidity: 45 },
  { time: '06:00', temperature: 23, humidity: 43 },
  { time: '08:00', temperature: 25, humidity: 50 },
  { time: '10:00', temperature: 26, humidity: 52 },
  { time: '12:00', temperature: 27, humidity: 55 },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature (°C)" />
        <Line type="monotone" dataKey="humidity" stroke="#007bff" name="Humidity (%)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;