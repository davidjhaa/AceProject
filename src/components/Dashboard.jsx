import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Column from "./Column";
import { useSelector } from "react-redux";
import { CiFilter } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";

const Dashboard = () => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);

  const [tasks, setTasks] = useState([
    {
      projectName: "HyphenView",
      number: "1001",
      summary: "Design the homepage layout for the project.",
      details: "This task includes creating wireframes and mockups for the homepage.",
      status: "todo",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
      hours: 12,
      assignedTo: ["John Doe", "Alice Green"],
      reviewer: ["Sam Lee"]
    },
    {
      projectName: "Hyphen Mon",
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
      projectName: "Hyphen Diag",
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
      projectName: "CyberArk",
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
      projectName: "Securonix",
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
      projectName: "CyberArk",
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
      projectName: "Hyphen",
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
      projectName: "securonix",
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

  const reduxTasks = useSelector((state) => state.tasks);

  const handleEditTask = (taskNumber) => {
    const selectedTask = tasks.find((task) => task.number === taskNumber);
    if (selectedTask) {
      setEditTask(true);
      setEditTaskData(selectedTask);
    }
  };

  useEffect(() => {
    if (reduxTasks) {
      setTasks((prevTasks) => {
        const existingTaskNumbers = prevTasks.map((task) => task.number);
        const newTasks = reduxTasks.filter(
          (task) => !existingTaskNumbers.includes(task.number)
        );
        return [...newTasks, ...prevTasks];
      });
    }
  }, [reduxTasks]);


  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-60 fixed top-0 left-0 h-full z-10 shadow-lg">
        <Sidebar selected={"dashboard"} />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-gray-100 p-3 overflow-hidden">
        <div className="flex justify-between items-center p-1 rounded-lg">
          <div className="flex gap-6">
            <button className="flex bg-gray-400 py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white">
              <CiFilter size={22} />
              Filter
            </button>
            <button className="flex bg-gray-400 py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white">
              <MdSort size={22} />
              Sort
            </button>
          </div>
          <div className="flex gap-4">

            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              onClick={() => setShowCreateTask(!showCreateTask)}
            >
              + Create Task
            </button>
          </div>
        </div>

        {showCreateTask && <CreateTask setShowCreateTask={setShowCreateTask} />}

        {editTask && (
          <EditTask
            setEditTask={setEditTask}
            taskData={editTaskData}
            assignedToData={editTaskData.assignedTo}
            reviewerData={editTaskData.reviewer}
          />
        )}

        {!showCreateTask && !editTask &&
          <div className="flex gap-4 mt-3">
            <Column
              title="To-do"
              tasks={tasks.filter((task) => task.status === "todo")}
              onClick={handleEditTask}
            />
            <Column
              title="In Progress"
              tasks={tasks.filter((task) => task.status === "inprogress")}
              onClick={handleEditTask}
            />
            <Column
              title="Completed"
              tasks={tasks.filter((task) => task.status === "completed")}
              onClick={handleEditTask}
            />
          </div>
        }

      </div>
    </div>
  );
};

export default Dashboard;
