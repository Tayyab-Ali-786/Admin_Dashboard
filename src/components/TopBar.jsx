import React from "react";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="font-bold text-2xl tracking-wide">
        <NavLink to="/home" className="hover:text-blue-400 transition">
          Admin Panel
        </NavLink>
      </div>
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-gray-800 rounded-md px-3 py-2 border border-gray-700">
        <input
          type="text"
          placeholder="Search bar"
          className="bg-transparent outline-none text-white placeholder-gray-400 w-40"
        />
        <span className="text-gray-400 text-sm">🔍</span>
      </div>
      {/* Navigation Links */}
      <div className="flex gap-6 items-center font-semibold">
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `hover:text-blue-400 transition ${
              isActive ? "text-blue-400" : "text-white"
            }`
          }
        >
          User
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `hover:text-blue-400 transition ${
              isActive ? "text-blue-400" : "text-white"
            }`
          }
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
}
