import React, { useState } from "react";

const UserProfile = () => {
  const [form, setForm] = useState({
    name: "Vishal Bharti",
    location: "India",
    email: "vishal@gmail.com",
    phone: "978536547",
    address: "813 Howard Street, Oswego NY, 13126, USA",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: {
      orderConfirmation: true,
      orderStatusChanged: false,
      orderDelivered: true,
      emailNotification: true,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (key) => {
    setForm((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }));
  };

  const handleSave = () => {
    console.log("Saved Details:", form);
    alert("Profile details saved successfully!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
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
              Store Name
            </label>
            <input
              type="text"
              name="storeName"
              value={form.storeName}
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
              Currency
            </label>
            <select
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="US Dollar ($)">US Dollar ($)</option>
              <option value="Euro (€)">Euro (€)</option>
              <option value="Indian Rupee (₹)">Indian Rupee (₹)</option>
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

            {/* Notifications */}
            <h3 className="text-lg font-bold mt-8 mb-4">Notifications</h3>
            {Object.keys(form.notifications).map((key) => (
              <div className="flex items-center justify-between mb-4" key={key}>
                <span className="text-sm text-gray-600">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </span>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={form.notifications[key]}
                    onChange={() => handleNotificationChange(key)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            ))}
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
  );
};

export default UserProfile;
