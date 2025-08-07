import React from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

export default function Product() {
    const products = [
      {
        id: 1,
        text: "Dell Precision",
        GraphicsCard: "Quaddro T2000",
        Processor: "Intel Core i7-11850H",
        value: "$100",
      },
      {
        id: 2,
        text: "Dell Latitude",
        GraphicsCard: "Intel Iris Xe",
        Processor: "Intel Core i5-1135G7",
        value: "$200",
      },
      {
        id: 3,
        text: "HP Victus",
        GraphicsCard: "RTX 3050",
        Processor: "AMD Ryzen 7 5800H",
        value: "$300",
      },
      {
        id: 4,
        text: "Lenovo ThinkPad",
        GraphicsCard: "NVIDIA GeForce MX450",
        Processor: "Intel Core i7-1165G7",
        value: "$400",
      },
      {
        id: 5,
        text: "Asus ROG Zephyrus",
        GraphicsCard: "RTX 3070",
        Processor: "AMD Ryzen 9 5900HX",
        value: "$1,200",
      },
      {
        id: 6,
        text: "Acer Predator Helios",
        GraphicsCard: "RTX 3060",
        Processor: "Intel Core i9-11900H",
        value: "$900",
      },
      {
        id: 7,
        text: "MSI GS65 Stealth",
        GraphicsCard: "RTX 3080",
        Processor: "Intel Core i9-11980HK",
        value: "$1,500",
      },
    ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to the product page
          </h1>

          {/* Product Table */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Product Name</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Processor</th>
                  <th className="px-6 py-3">Graphics Card</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{product.id}</td>
                    <td className="px-6 py-4">{product.text}</td>
                    <td className="px-6 py-4">{product.value}</td>
                    <td className="px-6 py-4">{product.Processor}</td>
                    <td className="px-6 py-4">{product.GraphicsCard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
