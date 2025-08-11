import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import StatGrids from "../components/StatGrids";
import TopBar from "../components/TopBar";
import Widget from "../components/Widget";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-2 p-5 bg-white overflow-auto">
          <StatGrids />
        </main>
      </div>
    </div>
  );
}
