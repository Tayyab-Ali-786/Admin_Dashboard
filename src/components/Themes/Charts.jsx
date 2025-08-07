import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const data = [
    { name: "Jan", sales: 12000 },
    { name: "Feb", sales: 19000 },
    { name: "Mar", sales: 3000 },
    { name: "Apr", sales: 5000 },
    { name: "May", sales: 20000 },
    { name: "Jun", sales: 30000 },
  ];

  return (
    <div className="p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Analytics Dashboard
      </h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Monthly Sales</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
