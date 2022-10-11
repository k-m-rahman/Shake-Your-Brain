import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Linechart = ({ topics }) => {
  console.log(topics);

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart data={topics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          strokeWidth={3}
          name="Total Number Of Quiz In Each Topic"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Linechart;
