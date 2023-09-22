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
    pv: 2,
  },
  {
    name: "Sun",
    pv: 6,
  },
  {
    name: "Mon",
    pv: 9,
  },
  {
    name: "Tues",
    pv: 3,
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
  },
];
export default function JobapplyChats() {
  return (
    <div className="chat-shadow rounded-lg ">
      <h1 className="text-2xl font-bold m-4">JobApply Chart</h1>
      <ResponsiveContainer width="100%" height={300}>
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
         </ResponsiveContainer>
      </div>
  );
}
