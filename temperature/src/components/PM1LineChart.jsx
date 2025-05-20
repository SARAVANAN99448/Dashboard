import React, { useEffect, useState, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const fullData = [
  { time: '00:00', pm1: 12 },
  { time: '01:00', pm1: 11 },
  { time: '02:00', pm1: 10 },
  { time: '03:00', pm1: 9 },
  { time: '04:00', pm1: 8 },
  { time: '05:00', pm1: 7 },
  { time: '06:00', pm1: 6 },
  { time: '07:00', pm1: 8 },
  { time: '08:00', pm1: 10 },
  { time: '09:00', pm1: 12 },
  { time: '10:00', pm1: 13 },
  { time: '11:00', pm1: 14 },
  { time: '12:00', pm1: 15 },
  { time: '13:00', pm1: 16 },
  { time: '14:00', pm1: 17 },
  { time: '15:00', pm1: 18 },
  { time: '16:00', pm1: 17 },
  { time: '17:00', pm1: 16 },
  { time: '18:00', pm1: 15 },
  { time: '19:00', pm1: 14 },
  { time: '20:00', pm1: 13 },
  { time: '21:00', pm1: 12 },
  { time: '22:00', pm1: 11 },
  { time: '23:00', pm1: 10 },
  { time: 'Day 2 00:00', pm1: 9 },
  { time: 'Day 2 01:00', pm1: 10 },
  { time: 'Day 2 02:00', pm1: 11 },
  { time: 'Day 2 03:00', pm1: 12 },
  { time: 'Day 2 04:00', pm1: 13 },
  { time: 'Day 2 05:00', pm1: 14 },
];

const PM1LineChart = () => {
  const [animatedData, setAnimatedData] = useState([]);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Add the first data point immediately
    setAnimatedData([fullData[0]]);
    indexRef.current = 1;

    intervalRef.current = setInterval(() => {
      setAnimatedData((prev) => {
        if (indexRef.current >= fullData.length) {
          clearInterval(intervalRef.current);
          return prev;
        }
        const newData = [...prev, fullData[indexRef.current]];
        indexRef.current++;
        return newData;
      });
    }, 60000); 

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-1/2 max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Your PM1 average: good
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={animatedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            interval={2}
            angle={-45}
            textAnchor="end"
            height={70}
          />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pm1"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={true}
        
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PM1LineChart;
