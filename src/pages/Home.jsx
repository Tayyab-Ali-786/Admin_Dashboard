import React from "react";
import Sidebar from "../components/Sidebar";
import StatGrids from "../components/StatGrids";
import TopBar from "../components/TopBar";
import Widget from "../components/Widget";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Top Navigation Bar */}
      <TopBar />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 bg-gray-100 overflow-auto">
          <StatGrids />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Widget />
            <Widget />
          </div>
        </main>
      </div>
    </div>
  );
}
