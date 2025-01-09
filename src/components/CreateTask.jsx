import React, { useState } from "react";

const CreateTask = () => {
  const [task, setTask] = useState({
    projectName: "",
    number: "",
    summary: "",
    details: "",
    status: "",
    startDate: "",
    endDate: "",
    hours: "",
  });
  const [users, setUsers] = useState([
    { id: 1, username: "abhishek.pandit", name: "Abhishek Pandit", assigned: false, reviewer: false },
    { id: 2, username: "ajin", name: "Ajin Thankachan", assigned: false, reviewer: false },
    { id: 3, username: "anuj.garg", name: "Anuj Garg", assigned: false, reviewer: false },
    { id: 4, username: "ashish.kumar", name: "Ashish Kumar", assigned: false, reviewer: false },
    { id: 5, username: "vishal.bharti@erasmith.com", name: "Vishal Bharti", assigned: false, reviewer: false },
    { id: 6, username: "ebin.jomon@erasmith.com", name: "Ebin Jomon", assigned: false, reviewer: false },
  ]);

  const handleCheckboxChange = (id, field) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, [field]: !user[field] } : user
      )
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number
    const savedTask = {
      ...task,
      number: task.number || randomNum,
    };

    console.log("Task saved:", savedTask);
    // Add your save logic here (e.g., send to an API)
    alert("Task saved successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Task</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="projectName">
          Project Name
        </label>
        <select
          id="projectName"
          name="projectName"
          value={task.projectName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="">Select a project</option>
          <option value="Project A">Project A</option>
          <option value="Project B">Project B</option>
          <option value="Project C">Project C</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="number">
          Number (Optional)
        </label>
        <input
          id="number"
          name="number"
          type="text"
          value={task.number}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Leave empty to assign a random number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="summary">
          Summary
        </label>
        <input
          id="summary"
          name="summary"
          type="text"
          value={task.summary}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter task summary"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="details">
          Details
        </label>
        <textarea
          id="details"
          name="details"
          value={task.details}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter task details"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="">Select status</option>
          <option value="Not Started">To do</option>
          <option value="In Progress">In Progress</option>
          <option value="In Review">In Review</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="mb-4 flex gap-3">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={task.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="endDate">
            End Date
          </label>
          <input
            id="endDate"
            name="endDate"
            type="date"
            value={task.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="hours">
            Hours
          </label>
          <input
            id="hours"
            name="hours"
            type="number"
            value={task.hours}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter estimated hours"
          />
        </div>
      </div>

      <div className="overflow-y-auto max-h-96">
        <p className="block text-sm font-medium mb-2">Assignments</p>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-sm font-medium text-gray-700">User</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Assigned</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Reviewer</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{user.username}</p>
                      <p className="text-sm text-gray-500">{user.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <input
                    type="checkbox"
                    checked={user.assigned}
                    onChange={() => handleCheckboxChange(user.id, "assigned")}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  <input
                    type="checkbox"
                    checked={user.reviewer}
                    onChange={() => handleCheckboxChange(user.id, "reviewer")}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Save Task
      </button>
    </div>
  );
};

export default CreateTask;
