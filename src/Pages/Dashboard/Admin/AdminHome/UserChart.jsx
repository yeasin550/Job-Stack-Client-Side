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

const data = [
  {
    name: "Sat",
    pv: 12,
  },
  {
    name: "Sun",
    pv: 8,
  },
  {
    name: "Mon",
    pv: 9,
  },
  {
    name: "Tues",
    pv: 6,
  },
  {
    name: "Wed",
    pv: 9,
  },
  {
    name: "	Thurs",
    pv: 5,
  },
  {
    name: "Fri",
    pv: 8,
  }
];

export default function UserChart() {
  return (
    <div className="chat-shadow rounded-lg ">
      <h1 className="text-2xl font-bold m-4">User Chart</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#09867E" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
