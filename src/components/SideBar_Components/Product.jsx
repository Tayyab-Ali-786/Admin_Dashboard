import React, { useEffect, useState } from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import { CheckCircle } from "lucide-react";

// Toast component for displaying brief notifications
const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-4 bg-gray-800 text-white rounded-lg shadow-xl flex items-center space-x-3 animate-slide-up">
      <CheckCircle className="text-green-400" size={20} />
      <span>{message}</span>
    </div>
  );
};

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

  // State for the search term.
  const [product, setProduct] = useState("");
  // State for the filtered list of products.
  const [filteredProduct, setFilterProduct] = useState(products);
  // State to control the toast.
  const [toastMessage, setToastMessage] = useState(null);

  // useEffect to perform the filtering logic when the search term changes.
  useEffect(() => {
    const result = products.filter((p) =>
      p.text.toLowerCase().includes(product)
    );
    setFilterProduct(result);
  }, [product]);

  // Handler for the search input field.
  function handlechange(e) {
    setProduct(e.target.value.toLowerCase());
  }

  // Handler for showing the toast notification.
  const handleOrderConfirmation = () => {
    setToastMessage("Your order is confirmed!");
    // Automatically hide the toast after 3 seconds.
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <style>
        {`
          @keyframes slide-up {
            from {
              transform: translateY(100%) translateX(-50%);
            }
            to {
              transform: translateY(0) translateX(-50%);
            }
          }
          .animate-slide-up {
            animation: slide-up 0.5s ease-out forwards;
          }
        `}
      </style>
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to the product page
          </h1>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex justify-center items-center">
              <label className="font-bold text-2xl mr-4">Search</label>
              <input
                className="border border-solid border-black rounded-lg h-10 min-w-3/5 pl-3"
                type="search"
                placeholder="search here"
                onChange={handlechange}
              />
            </div>
          </div>

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
                {filteredProduct.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={handleOrderConfirmation}
                    >
                      {product.id}
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={handleOrderConfirmation}
                    >
                      {product.text}
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={handleOrderConfirmation}
                    >
                      {product.value}
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={handleOrderConfirmation}
                    >
                      {product.Processor}
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={handleOrderConfirmation}
                    >
                      {product.GraphicsCard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
