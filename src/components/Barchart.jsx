import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Barchart = ({ topics }) => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart data={topics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total"
          fill="#82ca9d"
          name="Total Number Of Quiz In Each Topic"
          barSize={50}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
