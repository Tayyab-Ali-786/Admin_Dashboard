import React from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

export default function Overview() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />

        <div className="p-6 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold">Total Orders</h3>
              <p className="text-2xl">128</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold">Pending Orders</h3>
              <p className="text-2xl">5</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold">Account Balance</h3>
              <p className="text-2xl">$345.50</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold">Last Login</h3>
              <p className="text-2xl">Aug 5, 2025</p>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Order #12456</span>
                <span>Status: Delivered</span>
              </li>
              <li className="flex justify-between">
                <span>Order #12457</span>
                <span>Status: Processing</span>
              </li>
              <li className="flex justify-between">
                <span>Order #12458</span>
                <span>Status: Cancelled</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
