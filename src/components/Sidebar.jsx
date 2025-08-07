import React from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";


export default function Sidebar() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-screen p-4 flex flex-col shadow-lg transition-all duration-300 ease-in-out w-64">
      <div className="mb-6 pb-4 ">
        <ul className="space-y-4">
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold text-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold text-lg"
              }
            >
              <p className="flex items-center gap-2">
                <RxDashboard />
                Dashboard
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold text-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold text-lg"
              }
            >
              <p className="flex items-center gap-2">
                <MdOutlineDeliveryDining />
                Orders
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/overview"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold text-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold text-lg"
              }
            >
              <p className="flex items-center gap-2">
                <GrOverview />
                Overview
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold text-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold text-lg"
              }
            >
              <p className="flex items-center gap-2">
                <AiFillProduct />
                Product
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/analytics"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold text-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold text-lg"
              }
            >
              <p className="flex items-center gap-2">
                <MdAnalytics />
                Analytics
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/feedback"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold text-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold text-lg"
              }
            >
              <p className="flex items-center gap-2">
                <FaRegCommentDots />
                Feedback
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
