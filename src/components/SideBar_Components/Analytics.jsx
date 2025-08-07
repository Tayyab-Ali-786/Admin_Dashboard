import React from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

export default function Product() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to the analytics page
          </h1>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <p className="text-gray-600">
              This is where you place your main content, such as charts, tables,
              or other components you want to display on the dashboard. Add more
              sections or components as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
