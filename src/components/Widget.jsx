import React from "react";

export default function Widgets() {
  const activities = [
    "User John Doe signed up",
    "Order #4321 placed",
    "Payment from Jane Smith processed",
    "Product Dell Precision added",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-3">
        {activities.map((act, index) => (
          <li key={index} className="text-gray-600">
            • {act}
          </li>
        ))}
      </ul>
    </div>
  );
}
