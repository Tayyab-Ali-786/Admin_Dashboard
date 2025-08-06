import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";

export default function User() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    joined: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setUser({
        name: storedData.name || "",
        email: storedData.email || "",
        joined: storedData.joined || "Jan 2025",
      });
    }
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 mb-8 overflow-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">User's Page</h1>

          <h2 className="font-bold text-2xl mb-6">Profile</h2>
          <div className="border border-gray-300 bg-white rounded-lg p-5 mb-6 shadow">
            <div className="flex items-center gap-8 mb-5">
              <div className="flex justify-center items-center border border-transparent rounded-full text-2xl w-16 h-16 bg-pink-100 text-black font-bold">
                {getInitials(user.name || "NA")}
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">
                  Member since: {user.joined}
                </p>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Save Changes
            </button>
          </div>

          <h2 className="font-bold text-2xl mb-6">Recent Activities</h2>
          <div className="border border-gray-300 bg-white rounded-lg p-5 mb-6 shadow">
            <div>
              <p>
                Updated profile information on{" "}
                <span className="text-blue-500">Jan 15, 2025</span>
              </p>
              <p>
                Changed password on{" "}
                <span className="text-blue-500">Jan 10, 2025</span>
              </p>
              <p>
                Joined a new team on{" "}
                <span className="text-blue-500">Jan 5, 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
