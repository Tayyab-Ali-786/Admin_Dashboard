import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineDeliveryDining, MdAnalytics } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";
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

  const linkBaseClasses =
    "flex items-center gap-2 px-2 py-2 rounded-md transition-all duration-200 ease-in-out";
  const hoverClasses =
    "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400";

  return (
    <div
      className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-screen p-4 flex flex-col shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle button */}
      <div>
        <button
          className="pb-2 mb-4 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? (
            <BsList className="text-2xl" />
          ) : (
            <ImCross className="text-2xl" />
          )}
        </button>

        {/* Menu items */}
        <ul className="space-y-3">
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `${linkBaseClasses} ${
                  isActive
                    ? "bg-blue-500 text-white font-bold"
                    : "text-gray-700 dark:text-gray-300"
                } ${hoverClasses}`
              }
            >
              <RxDashboard className="text-lg" />
              <span className={isOpen ? "block" : "hidden"}>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                `${linkBaseClasses} ${
                  isActive
                    ? "bg-blue-500 text-white font-bold"
                    : "text-gray-700 dark:text-gray-300"
                } ${hoverClasses}`
              }
            >
              <MdOutlineDeliveryDining className="text-lg" />
              <span className={isOpen ? "block" : "hidden"}>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/overview"}
              className={({ isActive }) =>
                `${linkBaseClasses} ${
                  isActive
                    ? "bg-blue-500 text-white font-bold"
                    : "text-gray-700 dark:text-gray-300"
                } ${hoverClasses}`
              }
            >
              <GrOverview className="text-lg" />
              <span className={isOpen ? "block" : "hidden"}>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `${linkBaseClasses} ${
                  isActive
                    ? "bg-blue-500 text-white font-bold"
                    : "text-gray-700 dark:text-gray-300"
                } ${hoverClasses}`
              }
            >
              <AiFillProduct className="text-lg" />
              <span className={isOpen ? "block" : "hidden"}>Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/analytics"}
              className={({ isActive }) =>
                `${linkBaseClasses} ${
                  isActive
                    ? "bg-blue-500 text-white font-bold"
                    : "text-gray-700 dark:text-gray-300"
                } ${hoverClasses}`
              }
            >
              <MdAnalytics className="text-lg" />
              <span className={isOpen ? "block" : "hidden"}>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/feedback"}
              className={({ isActive }) =>
                `${linkBaseClasses} ${
                  isActive
                    ? "bg-blue-500 text-white font-bold"
                    : "text-gray-700 dark:text-gray-300"
                } ${hoverClasses}`
              }
            >
              <FaRegCommentDots className="text-lg" />
              <span className={isOpen ? "block" : "hidden"}>Feedback</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
