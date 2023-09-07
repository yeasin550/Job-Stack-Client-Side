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
    name: "Jan",
    pv: 50,
    uv: 400,
  },
  {
    name: "Feb",
    pv: 218,
  },
  {
    name: "Mar",
    pv: 156,
  },
  {
    name: "Apr",
    pv: 236,
  },
  {
    name: "May",
    pv: 160,
  },
  {
    name: "Jun",
    pv: 208,
  },
  {
    name: "Jul",
    pv: 300,
  },
  {
    name: "Aug",
    pv: 250,
  },
  {
    name: "Sep",
    pv: 290,
  },
  {
    name: "Oct",
    pv: 350,
  },
  {
    name: "Nov",
    pv: 300,
  },
  {
    name: "Dec",
    pv: 200,
  },
];
export default function JobapplyChats() {
    return (
      <div className="chat-shadow p-2 rounded-lg px-20">
        <h1 className="text-2xl font-bold mb-4">JobApply Chart</h1>
        <LineChart
          width={900}
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
    );
}
