import React from "react";
import image from "../components/images/image1.png";
import Charts1 from "../components/Themes/Charts1";

export default function StatGrid() {
  const stats = [
    {
      title: "Users",
      value: "1,200",
      change: "+5%",
      desc: "Active this month",
      color: "bg-blue-500",
    },
    {
      title: "Orders",
      value: "350",
      change: "+8%",
      desc: "Completed this week",
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: "$12,450",
      change: "+12%",
      desc: "Compared to last month",
      color: "bg-yellow-500",
    },
    {
      title: "Growth",
      value: "12%",
      change: "-3%",
      desc: "Monthly performance",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stat Cards - CORRECTED */}
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} rounded-xl shadow-md p-6 text-white`}
        >
          <h3 className="text-lg font-semibold">{stat.title}</h3>
          <p className="text-3xl font-bold mt-1">{stat.value}</p>
          <div className="mt-2">
            <span
              className={`text-sm font-semibold ${
                stat.change.startsWith("+") ? "text-green-300" : "text-red-300"
              }`}
            >
              {stat.change}
            </span>
            <p className="text-gray-200 text-sm">{stat.desc}</p>
          </div>
        </div>
      ))}

      {/* Image Section */}
      <div className="bg-gray-200 rounded-xl shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-2 flex justify-center items-center">
        <img
          src={image}
          alt="random"
          className="rounded-lg max-h-56 object-contain"
        />
      </div>

      {/* Chart Section */}
      <div className="bg-gray-200 rounded-xl shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-2">
        <Charts1 />
      </div>
    </div>
  );
}
