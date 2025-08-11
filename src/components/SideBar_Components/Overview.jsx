import React from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import Card from "../Themes/Card";

export default function Overview() {
  const orders = [
    { id: 1, text: "Total Sales", value: "$4332" },
    { id: 2, text: "New Customer", value: "5" },
    { id: 3, text: "Order Pending", value: "32" },
    { id: 4, text: "Revenue Generated", value: "$2324" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to the overview page
          </h1>

          {/* Summary cards */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {orders.map((order) => (
                <Card key={order.id} text={order.text} value={order.value} />
              ))}
            </div>
          </div>

          {/* Recent activities */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Recent Activities
            </h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id}>
                  <h3 className="text-lg font-medium text-gray-700">
                    {order.text}
                  </h3>
                  <p className="text-gray-600">{order.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
