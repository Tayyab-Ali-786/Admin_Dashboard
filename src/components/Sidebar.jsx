import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { ImCross } from "react-icons/im";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-screen p-4 flex flex-col shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div>
        <button className="pb-2 mb-4 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? (
            <BsList className="text-2xl" />
          ) : (
            <ImCross className="text-2xl" />
          )}
        </button>
        <ul className="space-y-12">
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
                <span className={isOpen ? "block" : "hidden"}>Dashboard</span>
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
                <span className={isOpen ? "block" : "hidden"}>Orders</span>
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
                <span className={isOpen ? "block" : "hidden"}>Overview</span>
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
                <span className={isOpen ? "block" : "hidden"}>Product</span>
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
                <span className={isOpen ? "block" : "hidden"}>Analytics</span>
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
                <span className={isOpen ? "block" : "hidden"}>Feedback</span>
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
