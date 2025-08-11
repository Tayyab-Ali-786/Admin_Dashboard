import React from "react";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white px-8 py-3 flex justify-between items-center shadow-lg border-b border-gray-800">
      {/* Logo */}
      <div className="font-bold text-2xl tracking-wide flex items-center gap-2">
        <NavLink
          to="/home"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Admin Panel
        </NavLink>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-1.5 border border-gray-700 shadow-inner focus-within:border-blue-500 transition">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white placeholder-gray-400 w-48 text-sm"
        />
        <span className="text-gray-400 text-lg">🔍</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 items-center font-medium">
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `relative transition-colors duration-200 ${
              isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
            }`
          }
        >
          User
          {({ isActive }) =>
            isActive && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 rounded-full"></span>
            )
          }
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `relative transition-colors duration-200 ${
              isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
            }`
          }
        >
          Settings
          {({ isActive }) =>
            isActive && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 rounded-full"></span>
            )
          }
        </NavLink>
      </div>
    </div>
  );
}
