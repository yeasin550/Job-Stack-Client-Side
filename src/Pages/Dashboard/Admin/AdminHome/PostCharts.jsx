// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const data = [
//   {
//     name: "Sat",
//     pv: 400,
//      uv: 4000,
//     amt: 2400,
   
//   },
//   {
//     name: "Sun",
//     pv: 268,
//      uv: 4000,
//     amt: 2400,
//   },
//   {
//     name: "Mon",
//     pv: 316,
//      uv: 4000,
//     amt: 2400,
//   },
//   {
//     name: "Thu",
//     pv: 236,
//      uv: 4000,
//     amt: 2400,
//   },
//   {
//     name: "Wed",
//     pv: 279,
//      uv: 4000,
//     amt: 2400,
//   },
//   {
//     name: "Tue",
//     pv: 319,
//      uv: 4000,
//     amt: 2400,
//   },
//   {
//     name: "Fri",
//     pv: 255,
//      uv: 4000,
//     amt: 2400,
//   },
// ];

// export default function PostChart() {
//   return (
//     <div className="chat-shadow p-2 rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Post Chart</h1>
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//         barSize={20}
//       >
//         <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Bar dataKey="pv" fill="#0096FF" background={{ fill: "#eee" }} />
//       </BarChart>
//     </div>
//   );
// }

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
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
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 3890,
    pv: 6800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 5300,
    amt: 4100,
  },
  {
    name: "Sep",
    uv: 4390,
    pv: 3800,
    amt: 6500,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 4490,
    pv: 5300,
    amt: 3100,
  },
  {
    name: "Dec",
    uv: 4490,
    pv: 6300,
    amt: 4100,
  },
];

export default function PostChart() {


  return (
    <div className="chat-shadow p-4 rounded-lg px-20">
      <h1 className="text-2xl font-bold mb-4">Post Chart</h1>
      <BarChart
        width={800}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#0F52BA" />
        <Bar dataKey="amt" stackId="a" fill="#40E0D0" />
        <Bar dataKey="uv" stackId="a" fill="#B6D0E2" />
      </BarChart>
    </div>
  );
  }

