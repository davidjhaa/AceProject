import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTask } from "../redux/TaskSlice";


const CreateTask = ({ setShowCreateTask }) => {
  const dispatch = useDispatch();
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
  const [assignedTo, setAssignedTo] = useState([]);
  const [reviewer, setReviewer] = useState([]);

  const defaultProjects = ["HyphenView", "HyphenMon", "cyber Ark", "Securonix"];

  const reduxProjects = useSelector((state) => state.projects.projects);
  const [projects, setProjects] = useState(defaultProjects);


  useEffect(() => {
    setProjects([...defaultProjects, ...reduxProjects]);
  }, [reduxProjects]);


  const [users, setUsers] = useState([
    { id: 1, username: "anuj.garg", name: "Anuj Garg", assigned: false, reviewer: false },
    { id: 2, username: "ashish.kumar", name: "Ashish Kumar", assigned: false, reviewer: false },
    { id: 3, username: "vishal.bharti@erasmith.com", name: "Vishal Bharti", assigned: false, reviewer: false },
    { id: 4, username: "abhishek.pandit", name: "Abhishek Pandit", assigned: false, reviewer: false },
    { id: 5, username: "ajin", name: "Ajin Thankachan", assigned: false, reviewer: false },
    { id: 6, username: "ebin.jomon@erasmith.com", name: "Ebin Jomon", assigned: false, reviewer: false },
  ]);

  const handleAssignment = (userId, type) => {
    const user = users.find((u) => u.id === userId); // Find the user by ID

    if (!user) return; // Exit if the user is not found

    if (type === "assigned") {
      setAssignedTo((prevAssigned) =>
        prevAssigned.includes(user.name)
          ? prevAssigned.filter((name) => name !== user.name) // Remove by name
          : [...prevAssigned, user.name] // Add by name
      );
    }

    if (type === "reviewer") {
      setReviewer((prevReviewer) =>
        prevReviewer.includes(user.name)
          ? prevReviewer.filter((name) => name !== user.name) // Remove by name
          : [...prevReviewer, user.name] // Add by name
      );
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Validation check
    if (!task.projectName || !task.summary || !task.details || !task.status || !task.startDate || !task.endDate || !task.hours) {
      toast.error("Please fill all the required fields!");
      return;
    }

    if (isNaN(task.hours) || parseFloat(task.hours) <= 0) {
      toast.error("Please enter a valid number for hours!");
      return;
    }

    // Validate date range (start date should be before end date)
    const startDate = new Date(task.startDate);
    const endDate = new Date(task.endDate);
    if (startDate >= endDate) {
      toast.error("End date should be after the start date!");
      return;
    }

    if (assignedTo.length === 0) {
      toast.error("Please assign at least one user to the task!");
      return;
    }

    if (reviewer.length === 0) {
      toast.error("Please assign at least one reviewer for the task!");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 900);
    const savedTask = {
      ...task,
      number: task.number || randomNum,
      assignedTo,
      reviewer,
    };

    console.log("Task saved:", savedTask);
    dispatch(addTask(savedTask));
    toast.success("Task saved successfully!");
    setTimeout(() => {
      setShowCreateTask(false);
    }, 2000)
  };


  return (
    <div className="max-w-3xl p-6 mt-4 bg-white shadow-lg rounded-lg border border-gray-200 overflow-y-auto"
      style={{ maxHeight: 'calc(100vh - 40px)' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Task</h2>

      <table className="w-auto border-collapse">
        <tbody>
          {/* Project Name */}
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">Project Name</td>
            <td className="px-4 py-3">
              <select
                id="projectName"
                name="projectName"
                value={task.projectName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a project</option>
                {projects.map((project, idx) => (
                  <option key={idx} value={project}>
                    {project}
                  </option>
                ))}
              </select>
            </td>
          </tr>

          {/* Number */}
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">Number (Optional)</td>
            <td className="px-4 py-3">
              <input
                id="number"
                name="number"
                type="text"
                value={task.number}
                onChange={handleChange}
                placeholder="Leave empty to assign a random number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </td>
          </tr>

          {/* Summary */}
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">Summary</td>
            <td className="px-4 py-3">
              <input
                id="summary"
                name="summary"
                type="text"
                value={task.summary}
                onChange={handleChange}
                placeholder="Enter task summary"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </td>
          </tr>

          {/* Details */}
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">Details</td>
            <td className="px-4 py-3">
              <textarea
                id="details"
                name="details"
                value={task.details}
                onChange={handleChange}
                placeholder="Enter task details"
                cols={40}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </td>
          </tr>

          {/* Status */}
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">Status</td>
            <td className="px-4 py-3">
              <select
                id="status"
                name="status"
                value={task.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select status</option>
                <option value="todo">To do</option>
                <option value="inprogress">In Progress</option>
                <option value="inreview">In Review</option>
                <option value="completed">Completed</option>
              </select>
            </td>
          </tr>

          {/* Estimates */}
          <tr className="">
            <td colSpan={2} className="px-4 py-3 text-xl font-bold text-gray-800">
              Estimates
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">Start Date</td>
            <td className="px-4 py-3">
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={task.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              />
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">End Date</td>
            <td className="px-4 py-3">
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={task.endDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              />
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-3 text-right font-medium text-gray-700">Hours</td>
            <td className="px-4 py-3">
              <input
                id="hours"
                name="hours"
                type="number"
                value={task.hours}
                onChange={handleChange}
                placeholder="Enter estimated hours"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <p className="block text-xl font-bold text-gray-700 mb-2 mt-5">Assignments</p>

      <div className="overflow-y-auto max-h-96 mb-6 mt-6">
         <table className="min-w-full table-auto">
           <thead>
             <tr>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned</th>
               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Reviewer</th>
             </tr>
           </thead>
           <tbody>
          {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{user.username}</p>
                      <p className="text-sm text-gray-500">{user.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-1 text-center">
                  <input
                    type="checkbox"
                    checked={assignedTo.includes(user.name)}
                    onChange={() => handleAssignment(user.id, "assigned")}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-1 text-center">
                  <input
                    type="checkbox"
                    checked={reviewer.includes(user.name)}
                    onChange={() => handleAssignment(user.id, "reviewer")}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setShowCreateTask(false)}
          className="w-auto bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring"
        >
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="w-auto bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Save Task
        </button>
      </div>
    </div>


  );
};

export default CreateTask;


























// <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//   <h2 className="text-2xl font-bold mb-4">Create Task</h2>

//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-2" htmlFor="projectName">
//       Project Name
//     </label>
//     <select
//       id="projectName"
//       name="projectName"
//       value={task.projectName}
//       onChange={handleChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//     >
//       <option value="">Select a project</option>
//       {projects.map((project, idx) => (
//         <option key={idx} value={project}>
//           {project}
//         </option>
//       ))}
//     </select>
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-2" htmlFor="number">
//       Number (Optional)
//     </label>
//     <input
//       id="number"
//       name="number"
//       type="text"
//       value={task.number}
//       onChange={handleChange}
//       className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//       placeholder="Leave empty to assign a random number"
//     />
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-2" htmlFor="summary">
//       Summary
//     </label>
//     <input
//       id="summary"
//       name="summary"
//       type="text"
//       value={task.summary}
//       onChange={handleChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//       placeholder="Enter task summary"
//     />
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-2" htmlFor="details">
//       Details
//     </label>
//     <textarea
//       id="details"
//       name="details"
//       value={task.details}
//       onChange={handleChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//       placeholder="Enter task details"
//     ></textarea>
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-2" htmlFor="status">
//       Status
//     </label>
//     <select
//       id="status"
//       name="status"
//       value={task.status}
//       onChange={handleChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//     >
//       <option value="">Select status</option>
//       <option value="todo">To do</option>
//       <option value="inprogress">In Progress</option>
//       <option value="In Review">In Review</option>
//       <option value="completed">Completed</option>
//     </select>
//   </div>

//   <div className="text-xl font-bold mb-3 mt-3">Estimates</div>

//   <div className="mb-4 flex gap-3">
//     <div>
//       <label className="block text-sm font-medium mb-2" htmlFor="startDate">
//         Start Date
//       </label>
//       <input
//         id="startDate"
//         name="startDate"
//         type="date"
//         value={task.startDate}
//         onChange={handleChange}
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//       />
//     </div>
//     <div>
//       <label className="block text-sm font-medium mb-2" htmlFor="endDate">
//         End Date
//       </label>
//       <input
//         id="endDate"
//         name="endDate"
//         type="date"
//         value={task.endDate}
//         onChange={handleChange}
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//       />
//     </div>
//     <div>
//       <label className="block text-sm font-medium mb-2" htmlFor="hours">
//         Hours
//       </label>
//       <input
//         id="hours"
//         name="hours"
//         type="number"
//         value={task.hours}
//         onChange={handleChange}
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//         placeholder="Enter estimated hours"
//       />
//     </div>
//   </div>

//   <div className="overflow-y-auto max-h-96">
//     <p className="block text-sm font-medium mb-2">Assignments</p>
//     <table className="min-w-full">
//       <thead>
//         <tr>
//           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//           <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
//           <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Reviewer</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id} className="hover:bg-gray-50">
//             <td className="px-6 py-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-700">{user.username}</p>
//                   <p className="text-sm text-gray-500">{user.name}</p>
//                 </div>
//               </div>
//             </td>
//             <td className="px-6 py-4 text-center">
//               <input
//                 type="checkbox"
//                 checked={assignedTo.includes(user.name)} // Check by name
//                 onChange={() => handleAssignment(user.id, "assigned")} // Use userId for toggling
//                 className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//             </td>
//             <td className="px-6 py-4 text-center">
//               <input
//                 type="checkbox"
//                 checked={reviewer.includes(user.name)} // Check by name
//                 onChange={() => handleAssignment(user.id, "reviewer")} // Use userId for toggling
//                 className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>

//   <div className="flex justify-between mt-6">
//     <button
//       onClick={()=>setShowCreateTask(false)}
//       className="w-auto bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring"
//     >
//       cancel
//     </button>

//     <button
//       onClick={handleSave}
//       className="w-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//     >
//       Save Task
//     </button>
//   </div>

//   <ToastContainer autoClose={2500} hideProgressBar={true} />
// </div>