import React from 'react';

const TaskCard = ({ task }) => {
  const { projectName, summary, status, assignedTo, reviewer } = task;

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden border border-gray-200">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{projectName}</h3>
        <p className="text-sm text-gray-600 mt-2">{summary}</p>

        {/* Task Status */}
        <div className={`mt-3 px-3 py-1 inline-block text-sm font-medium rounded-full 
          ${status === 'todo' ? 'bg-yellow-200 text-yellow-800' : 
            status === 'inprogress' ? 'bg-blue-200 text-blue-800' :
            status === 'completed' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
          {status}
        </div>

        {/* Assigned Users */}
        <div className="mt-3">
          <span className="font-semibold text-gray-800">Assigned To: </span>
          <div className="flex gap-2">
            {assignedTo.length > 0 ? assignedTo.map((user, idx) => (
              <span key={idx} className="text-xs text-gray-600">{user}</span>
            )) : <span className="text-xs text-gray-400">Not Assigned</span>}
          </div>
        </div>

        {/* Reviewer Users */}
        <div className="mt-2">
          <span className="font-semibold text-gray-800">Reviewer: </span>
          <div className="flex gap-2">
            {reviewer.length > 0 ? reviewer.map((user, idx) => (
              <span key={idx} className="text-xs text-gray-600">{user}</span>
            )) : <span className="text-xs text-gray-400">Not Assigned</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
