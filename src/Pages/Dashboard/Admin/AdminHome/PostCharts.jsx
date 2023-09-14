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

export default function PostChart() {


  return (
    <div className="chat-shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Post Chart</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
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
      </ResponsiveContainer>
    </div>
  );
  }

