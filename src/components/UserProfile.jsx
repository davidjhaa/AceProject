import React, { useState } from "react";
import Sidebar from "./Sidebar";

const UserProfile = () => {
  const [form, setForm] = useState({
    name: "Vishal Bharti",
    location: "India",
    email: "vishaljhaa4u@gmail.com",
    phone: "978536547",
    address: "Sector-49, Noida, UP",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved Details:", form);
    alert("Profile details saved successfully!");
  };

  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed top-0 left-0 h-full z-10">
        <Sidebar />
      </div>
      <div className="flex-1 ml-64 bg-gray-100 p-3 overflow-y-auto">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
          {/* Header */}
          <h2 className="text-xl font-bold mb-8">Edit Profile</h2>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Location
              </label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
              </select>

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Address
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Change Password */}
            <div>
              <h3 className="text-lg font-bold mb-4">Change Password</h3>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />

            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8">
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
