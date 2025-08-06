import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile saved successfully!");
  };

  // Save password to localStorage (just for demo; not secure)
  const savePassword = () => {
    localStorage.setItem("userPassword", JSON.stringify(passwords));
    alert("Password updated (demo only — not secure)");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopBar />

        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <p className="text-gray-700 mb-6">
              Manage your settings here. You can customize various aspects of
              the application, such as user preferences, notifications, and
              more.
            </p>

            {/* Profile Settings */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Profile Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    placeholder="Enter your name"
                    onChange={handleProfileChange}
                    className="border border-blue-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    placeholder="Enter your email"
                    onChange={handleProfileChange}
                    className="border border-blue-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={saveProfile}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>

            {/* Password Settings */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner mt-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Password Settings
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm text-gray-600">
                    Previous Password
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={passwords.oldPassword}
                    placeholder="Enter your previous password"
                    onChange={handlePasswordChange}
                    className="border border-blue-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm text-gray-600">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwords.newPassword}
                    placeholder="Enter new password"
                    onChange={handlePasswordChange}
                    className="border border-blue-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={savePassword}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Save Password
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
