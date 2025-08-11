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
  const [products, setProducts] = useState([]);
  // Fetch data from the API
  async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // Call getData on component mount
  useEffect(() => {
    getData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  // Filter products based on search term
  useEffect(() => {
    const result = products.filter((p) =>
      p.title ? p.title.toLowerCase().includes(searchTerm.toLowerCase()) : false
    );
    setFilteredProducts(result);
  }, [searchTerm, products]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const handleOrderConfirmation = () => {
    setToastMessage("Your order is confirmed!");
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
                className="border border-solid border-black rounded-lg h-10 min-w-[60%] pl-3"
                type="search"
                placeholder="Search here"
                onChange={handleChange}
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
                  <th className="px-6 py-3">Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
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
                      {product.title || "N/A"}
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={handleOrderConfirmation}
                    >
                      ${product.price?.toFixed(2) || "N/A"}
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={handleOrderConfirmation}
                    >
                      {product.category || "N/A"}
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
