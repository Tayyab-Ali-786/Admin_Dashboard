import React from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

export default function Dashboard1() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to the Dashboard
          </h1>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <p className="text-gray-600">
              This is where you place your main content, such as charts, tables,
              or other components you want to display on the dashboard. Add more
              sections or components as needed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-32 bg-pink-400 border border-gray-200 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-md transition-shadow duration-200">
              <p className="font-semibold text-lg text-white">Active Users</p>
              <p className="text-sm text-white/80">1,234</p>
            </div>
            <div className="h-32 bg-blue-400 border border-gray-200 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-md transition-shadow duration-200">
              <p className="font-semibold text-lg text-white">Revenue</p>
              <p className="text-sm text-white/80">$56,789</p>
            </div>
            <div className="h-32 bg-green-400 border border-gray-200 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-md transition-shadow duration-200">
              <p className="font-semibold text-lg text-white">Working Hours</p>
              <p className="text-sm text-white/80">4,320 hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
