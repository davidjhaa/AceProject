import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Column from "./Column";
import { CiFilter } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import CreateTask from './CreateTask';

const Dashboard = () => {
    const[showCreateTask, setShowCreateTask] = useState(false);
  const [tasks] = useState([
    {
      id: 1,
      title: "Design Development",
      description: "At the beginning of the design development process...",
      tags: ["Product", "Design"],
      users: ["User1", "User2"],
      comments: 6,
      status: "todo",
    },
    {
      id: 2,
      title: "Feedback",
      description: "Throughout the design development process...",
      tags: ["Feedback"],
      users: ["User1", "User2", "User3"],
      comments: 2,
      status: "inprogress",
    },
    {
      id: 3,
      title: "Components",
      description: "Depending on the nature of the design...",
      tags: ["Product", "Design"],
      users: ["User2", "User3"],
      comments: 2,
      status: "completed",
    },
  ]);
  

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-3">
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
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                onClick={() => setShowCreateTask(!showCreateTask)}
            >
              + Create Task
            </button>
          </div>
        </div>
        {showCreateTask ? <CreateTask /> : 
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
        }
      </div>
    </div>
  );
};

export default Dashboard;
