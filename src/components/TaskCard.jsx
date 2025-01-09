// TaskCard.js
import React from "react";

const TaskCard = ({ task }) => (
  <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
    <h3 className="font-semibold text-lg">{task.title}</h3>
    <p className="text-sm text-gray-600 mt-2">{task.description}</p>
    <div className="mt-2 flex flex-wrap gap-2">
      {task.tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-4 flex justify-between text-sm text-gray-500">
      <span>Users: {task.users.join(", ")}</span>
      <span>{task.comments} comments</span>
    </div>
  </div>
);

export default TaskCard;