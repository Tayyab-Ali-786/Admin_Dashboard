import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/orders", label: "Orders", icon: "📦" },
  { to: "/overview", label: "Overview", icon: "📊" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white h-screen p-4 flex flex-col shadow-lg
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 p-2 rounded-lg hover:bg-gray-700 focus:outline-none transition"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <span
          className={`inline-block transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          {isOpen ? "✕" : "☰"}
        </span>
      </button>

      {/* Navigation Links */}
      <ul className="flex-1">
        {navItems.map((item) => (
          <li key={item.to} className="mb-2 group relative">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors ${
                  isOpen ? "justify-start" : "justify-center"
                } ${isActive ? "bg-gray-700 text-blue-400 font-bold" : ""}`
              }
            >
              <span className={`text-lg w-6 h-6 flex-shrink-0 ${isOpen ? "mr-2" : ""}`}>
                {item.icon}
              </span>
              <span
                className={`transition-all duration-200 overflow-hidden whitespace-nowrap ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
            {/* Tooltip for closed sidebar */}
            {!isOpen && (
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 shadow">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
