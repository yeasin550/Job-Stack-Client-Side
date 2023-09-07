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
    pv: 400,
    uv: 10,
  },
  {
    name: "Fed",
    pv: 368,
    uv: 10,
  },
  {
    name: "Mar",
    pv: 256,
  },
  {
    name: "Api",
    pv: 346,
  },
  {
    name: "May",
    pv: 299,
  },
  {
    name: "Jun",
    pv: 329,
  },
  {
    name: "Jul",
    pv: 365,
  },
  {
    name: "Aug",
    pv: 265,
  },
  {
    name: "Sep",
    pv: 375,
  },
  {
    name: "Oct",
    pv: 215,
  },
  {
    name: "Nov",
    pv: 315,
  },
  {
    name: "Dec",
    pv: 365,
  },
];

export default function JobChats() {
  return (
    <div className="chat-shadow py-10 rounded-lg px-20">
      <h1 className="text-2xl font-bold mb-4">Job Chart</h1>
      <BarChart
        width={900}
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
        <Bar dataKey="pv" fill="#088F8F" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
}
