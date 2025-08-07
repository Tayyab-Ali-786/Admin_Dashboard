import React from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

export default function Orders() {
  const orders = [
    {
      id: 1,
      product: "Product A",
      quantity: 2,
      price: 20.0,
      status: "Shipped",
    },
    {
      id: 2,
      product: "Product B",
      quantity: 1,
      price: 15.0,
      status: "Pending",
    },
    {
      id: 3,
      product: "Product C",
      quantity: 5,
      price: 10.0,
      status: "Delivered",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to the orders page
          </h1>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Product</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{order.id}</td>
                      <td className="px-6 py-4">{order.product}</td>
                      <td className="px-6 py-4">{order.quantity}</td>
                      <td className="px-6 py-4">${order.price.toFixed(2)}</td>
                      <td className="px-6 py-4">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
