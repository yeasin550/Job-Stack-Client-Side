import React, { PureComponent } from "react";
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

const data = [
  {
    name: "Sat",
    pv: 223,
    uv: 400,
  },
  {
    name: "Sun",
    pv: 368,
  },
  {
    name: "Mon",
    pv: 296,
  },
  {
    name: "Tues",
    pv: 236,
  },
  {
    name: "Wed",
    pv: 289,
  },
  {
    name: "	Thurs",
    pv: 250,
  },
  {
    name: "Fri",
    pv: 368,
  },
];
export default function JobapplyChats() {
  return (
    <div className="chat-shadow rounded-lg ">
      <h1 className="text-2xl font-bold mb-4">JobApply Chart</h1>
      <div className="">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#0000FF"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
