import React from "react";
import { PieChart, Pie } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

export default function PieOne() {
  return (
    <PieChart width={300} height={180}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={200}
        cy={200}
        outerRadius={100}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
}
