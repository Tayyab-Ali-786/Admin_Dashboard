import React, { useState } from "react";
import TopBar from "../TopBar"; // Assuming TopBar is in the parent directory
import Sidebar from "../Sidebar"; // Assuming Sidebar is in the parent directory

export default function Orders() {
  // Sample order data - you can add, remove, or change these objects
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customer: "Alice Johnson",
      date: "2025-07-28",
      total: 120.5,
      status: "Delivered",
    },
    {
      id: "ORD002",
      customer: "Bob Williams",
      date: "2025-07-29",
      total: 250.0,
      status: "Processing",
    },
    {
      id: "ORD003",
      customer: "Charlie Brown",
      date: "2025-07-29",
      total: 75.25,
      status: "Pending",
    },
  ]);

  // This function would handle viewing an order (e.g., open a modal, navigate to details page)
  const handleViewOrder = (orderId) => {
    console.log("View order:", orderId);
    // Add your view logic here
  };

  // This function would handle deleting an order
  const handleDeleteOrder = (orderId) => {
    console.log("Delete order:", orderId);
    // Update the orders state to remove the deleted order
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 p-6 overflow-auto bg-white">
          {/* Page heading */}
          <h1 className="text-2xl font-bold mb-4">Order Management</h1>

          {/* Orders Table */}
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table Header */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleViewOrder(order.id)}
                          className="text-blue-600 hover:text-blue-800 mr-2"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(order.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
