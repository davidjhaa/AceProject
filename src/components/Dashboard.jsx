import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Column from "./Column";
import { CiFilter } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import CreateTask from "./CreateTask";

const Dashboard = () => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [tasks] = useState([
    {
      projectName: "Project A",
      number: "1001",
      summary: "Design the homepage layout for the project.",
      details: "This task includes creating wireframes and mockups for the homepage.",
      status: "todo", // Possible values: "todo", "inprogress", "completed"
      startDate: "2023-01-01",
      endDate: "2023-01-10",
      hours: 12,
      assignedTo: ["John Doe", "Alice Green"],
      reviewer: ["Sam Lee"]
    },
    {
      projectName: "Project B",
      number: "1002",
      summary: "Implement authentication system.",
      details: "Develop login, registration, and password recovery functionalities.",
      status: "inprogress",
      startDate: "2023-01-05",
      endDate: "2023-01-20",
      hours: 24,
      assignedTo: ["Jane Smith"],
      reviewer: ["James Brown"]
    },
    {
      projectName: "Project C",
      number: "1003",
      summary: "Write documentation for the API.",
      details: "Create comprehensive documentation for the backend API and its endpoints.",
      status: "completed",
      startDate: "2022-12-01",
      endDate: "2022-12-15",
      hours: 30,
      assignedTo: ["John Doe"],
      reviewer: ["Mary Johnson"]
    },
    {
      projectName: "Project D",
      number: "1004",
      summary: "Setup database schema for the new app.",
      details: "Design and implement the database schema for the app's core features.",
      status: "todo",
      startDate: "2023-02-01",
      endDate: "2023-02-10",
      hours: 16,
      assignedTo: ["Alice Green"],
      reviewer: ["Sam Lee"]
    },
    {
      projectName: "Project E",
      number: "1005",
      summary: "Create the dashboard UI components.",
      details: "Design and implement UI components for the dashboard page.",
      status: "inprogress",
      startDate: "2023-01-15",
      endDate: "2023-02-01",
      hours: 20,
      assignedTo: ["Bob White"],
      reviewer: ["Lily Adams"]
    },
    {
      projectName: "Project F",
      number: "1006",
      summary: "Refactor legacy codebase.",
      details: "Clean up and refactor old code to make it more maintainable.",
      status: "completed",
      startDate: "2022-11-01",
      endDate: "2022-12-01",
      hours: 40,
      assignedTo: ["James Brown"],
      reviewer: ["Lily Adams"]
    },
    {
      projectName: "Project G",
      number: "1007",
      summary: "Set up the continuous integration pipeline.",
      details: "Configure a CI pipeline using GitHub Actions for automated testing.",
      status: "todo",
      startDate: "2023-02-15",
      endDate: "2023-02-25",
      hours: 10,
      assignedTo: ["Sarah Lee"],
      reviewer: ["Bob White"]
    },
    {
      projectName: "Project H",
      number: "1008",
      summary: "Optimize database queries for performance.",
      details: "Review and optimize slow queries in the database to improve performance.",
      status: "inprogress",
      startDate: "2023-02-01",
      endDate: "2023-02-10",
      hours: 15,
      assignedTo: ["John Doe", "Sarah Lee"],
      reviewer: ["James Brown"]
    }
  ]);

  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed top-0 left-0 h-full z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-gray-100 p-3 overflow-y-auto">
        <div className="flex justify-between items-center p-1 rounded-lg">
          <span></span>
          <div className="flex gap-4">
            <button className="flex bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
              <CiFilter size={22} />
              Filter
            </button>
            <button className="flex bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
              <MdSort size={22} />
              Sort
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              onClick={() => setShowCreateTask(!showCreateTask)}
            >
              + Create Task
            </button>
          </div>
        </div>

        {showCreateTask ? (
          <CreateTask />
        ) : (
          <div className="flex gap-4 mt-3">
            <Column
              title="To-do"
              tasks={tasks.filter((task) => task.status === "todo")}
            />
            <Column
              title="In Progress"
              tasks={tasks.filter((task) => task.status === "inprogress")}
            />
            <Column
              title="Completed"
              tasks={tasks.filter((task) => task.status === "completed")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
