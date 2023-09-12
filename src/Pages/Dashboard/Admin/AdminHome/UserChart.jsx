import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 223,
    uv: 400,
  },
  {
    name: "Feb",
    pv: 368,
  },
  {
    name: "Mar",
    pv: 296,
  },
  {
    name: "Apr",
    pv: 236,
  },
  {
    name: "May",
    pv: 289,
  },
  {
    name: "Jun",
    pv: 250,
  },
  {
    name: "Jul",
    pv: 368,
  },
  {
    name: "Aug",
    pv: 215,
  },
  {
    name: "Sep",
    pv: 315,
  },
  {
    name: "Oct",
    pv: 195,
  },
  {
    name: "Nov",
    pv: 315,
  },
  {
    name: "Dec",
    pv: 215,
  },
];

export default function UserChart() {
  return (
    <div className="chat-shadow p-2 rounded-lg px-20 overflow-x-scroll">
      <h1 className="text-2xl font-bold mb-4">User Chart</h1>
      <BarChart
        width={800}
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
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#413ea0" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
}
