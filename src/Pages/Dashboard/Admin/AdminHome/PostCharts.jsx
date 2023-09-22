// // import React from "react";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// // } from "recharts";

// // const data = [
// //   {
// //     name: "Sat",
// //     pv: 400,
// //      uv: 4000,
// //     amt: 2400,
   
// //   },
// //   {
// //     name: "Sun",
// //     pv: 268,
// //      uv: 4000,
// //     amt: 2400,
// //   },
// //   {
// //     name: "Mon",
// //     pv: 316,
// //      uv: 4000,
// //     amt: 2400,
// //   },
// //   {
// //     name: "Thu",
// //     pv: 236,
// //      uv: 4000,
// //     amt: 2400,
// //   },
// //   {
// //     name: "Wed",
// //     pv: 279,
// //      uv: 4000,
// //     amt: 2400,
// //   },
// //   {
// //     name: "Tue",
// //     pv: 319,
// //      uv: 4000,
// //     amt: 2400,
// //   },
// //   {
// //     name: "Fri",
// //     pv: 255,
// //      uv: 4000,
// //     amt: 2400,
// //   },
// // ];

// // export default function PostChart() {
// //   return (
// //     <div className="chat-shadow p-2 rounded-lg">
// //       <h1 className="text-2xl font-bold mb-4">Post Chart</h1>
// //       <BarChart
// //         width={500}
// //         height={300}
// //         data={data}
// //         margin={{
// //           top: 5,
// //           right: 30,
// //           left: 20,
// //           bottom: 5,
// //         }}
// //         barSize={20}
// //       >
// //         <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
// //         <YAxis />
// //         <Tooltip />
// //         <Legend />
// //         <CartesianGrid strokeDasharray="3 3" />
// //         <Bar dataKey="pv" fill="#0096FF" background={{ fill: "#eee" }} />
// //       </BarChart>
// //     </div>
// //   );
// // }

// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Sat",
//     pv: 223,
//     uv: 400,
//   },
//   {
//     name: "Sun",
//     pv: 368,
//   },
//   {
//     name: "Mon",
//     pv: 296,
//   },
//   {
//     name: "Tues",
//     pv: 236,
//   },
//   {
//     name: "Wed",
//     pv: 289,
//   },
//   {
//     name: "	Thurs",
//     pv: 250,
//   },
//   {
//     name: "Fri",
//     pv: 368,
//   },
// ];

// export default function PostChart() {


//   return (
//     <div className="chat-shadow rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Post Chart</h1>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart
//           width={500}
//           height={300}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//           data={data}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" stackId="a" fill="#0F52BA" />
//           <Bar dataKey="amt" stackId="a" fill="#40E0D0" />
//           <Bar dataKey="uv" stackId="a" fill="#B6D0E2" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
//   }
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sat", value: 4 },
  { name: "Sun", value: 3 },
  { name: "Mon", value: 5 },
  { name: "Tues", value: 3 },
  { name: "Wed", value: 4 },
  { name: "Thurs", value: 2 },
  { name: "Fri", value: 4 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="chat-shadow rounded-lg ">
      <h1 className="text-2xl font-bold m-4">Post Chart</h1>
      <ResponsiveContainer width={400} height={400}>
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#09867E"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
