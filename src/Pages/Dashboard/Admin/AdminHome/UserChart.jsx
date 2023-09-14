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
  }
];

export default function UserChart() {
  return (
    <div className="chat-shadow rounded-lg ">
      <h1 className="text-2xl font-bold mb-4">User Chart</h1>
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
          <Bar dataKey="pv" fill="#413ea0" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}




// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import './styles.css'

// export default function UserChart() {
//   const data = [
//     {
//       impressoes: 200,
//       cliques: 100,
//     },
//     {
//       impressoes: 450,
//       cliques: 390,
//     },
//     {
//       impressoes: 1650,
//       cliques: 1157,
//     },
//     {
//       impressoes: 3594,
//       cliques: 3410,
//     },
//   ];

//   return (
//     <div className="App">
//       <h1>Olá</h1>
//       <ResponsiveContainer height={300}>
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="8 8" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="impressoes"
//             strokeWidth={3}
//             stroke="#AD4335"
//           />
//           <Line
//             type="monotone"
//             dataKey="cliques"
//             strokeWidth={3}
//             stroke="#004FAC"
//             activeDot={{ r: 8 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./styles.css";

// export default function UserChart() {
//   const data = [
//     {
//       name: "A",
//       impressoes: 200,
//       cliques: 100,
//     },
//     {
//       name: "B",
//       impressoes: 450,
//       cliques: 390,
//     },
//     {
//       name: "C",
//       impressoes: 1650,
//       cliques: 1157,
//     },
//     {
//       name: "D",
//       impressoes: 3594,
//       cliques: 3410,
//     },
//   ];

//   return (
//     <div className="App">
//       <h1>Olá</h1>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart
//           data={data}
          
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="impressoes"
//             strokeWidth={3}
//             stroke="#AD4335"
//           />
//           <Line
//             type="monotone"
//             dataKey="cliques"
//             strokeWidth={3}
//             stroke="#004FAC"
//             activeDot={{ r: 8 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
