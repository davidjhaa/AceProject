import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTask } from "../redux/TaskSlice";

const EditTask = ({ setEditTask, taskData, assignedToData, reviewerData }) => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        projectName: taskData?.projectName || "",
        number: taskData?.number || "",
        summary: taskData?.summary || "",
        details: taskData?.details || "",
        status: taskData?.status || "",
        startDate: taskData?.startDate || "",
        endDate: taskData?.endDate || "",
        hours: taskData?.hours || "",
        assignedTo: assignedToData || "",
        reviewer: reviewerData || ""
    });

    const [assignedTo, setAssignedTo] = useState(assignedToData || []);
    const [reviewer, setReviewer] = useState(reviewerData || []);

    const defaultProjects = ["HyphenView", "cyber Ark", "Securonix"];

    const reduxProjects = useSelector((state) => state.projects.projects);
    const [projects, setProjects] = useState(defaultProjects);

    useEffect(() => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => ({
                ...user,
                assigned: assignedTo.includes(user.name),
                reviewer: reviewer.includes(user.name),
            }))
        );
    }, [assignedTo, reviewer]);


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
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId
                    ? {
                        ...user,
                        assigned: type === "assigned" ? !user.assigned : user.assigned,
                        reviewer: type === "reviewer" ? !user.reviewer : user.reviewer,
                    }
                    : user
            )
        );

        // Update assignedTo and reviewer based on users state
        const updatedUsers = users.map((user) =>
            user.id === userId
                ? {
                    ...user,
                    assigned: type === "assigned" ? !user.assigned : user.assigned,
                    reviewer: type === "reviewer" ? !user.reviewer : user.reviewer,
                }
                : user
        );

        setAssignedTo(updatedUsers.filter((u) => u.assigned).map((u) => u.name));
        setReviewer(updatedUsers.filter((u) => u.reviewer).map((u) => u.name));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
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

        const randomNum = Math.floor(1000 + Math.random() * 9000);
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
        <div className="max-w-3xl p-6 mt-6 bg-white shadow-lg rounded-lg border border-gray-200 overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 40px)' }}
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Edit Task</h2>

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
                                className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                        <td colSpan={2} className="px-4 py-3 text-xl font-bold text-gray-800 ">
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                        checked={user.assigned}
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
                    onClick={() => setEditTask(false)}
                    className="w-auto bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring"
                >
                    Cancel
                </button>

                <button
                    onClick={handleUpdate}
                    className="w-auto bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    update Task
                </button>
            </div>
        </div>
    );
};

export default EditTask;
