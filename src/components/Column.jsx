// import React from "react";
// import TaskCard from "./TaskCard.jsx";

// const Column = ({ title, tasks }) => (
//   <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-md cursor-pointer">
//     <h2 className="text-xl font-bold mb-4">{title}</h2>
//     <div className="flex flex-col gap-4">
//       {tasks.map((task) => (
//         <TaskCard key={task.id} task={task} />
//       ))}
//     </div>
//   </div>
// );

// export default Column;

import React from "react";
import TaskCard from "./TaskCard.jsx";

const Column = ({ title, tasks, onClick }) => (
  <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-md cursor-pointer">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <div key={task.number} onClick={() => onClick(task.number)}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  </div>
);

export default Column;
