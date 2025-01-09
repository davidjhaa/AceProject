import { useState } from "react";
import { addProject } from '../redux/ProjectSlice'
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProject({ setOpenAddProject }) {
    const dispatch = useDispatch();
    const [project, setproject] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const handleAdd = () => {
        dispatch(addProject(project));
        toast.success("Project Added")
    };

    const handleAdded = () => {
        setConfirm(false);
        setEmail('');
    };

    return (
        <div className="fixed inset-0 w-full h-full bg-gray-600 bg-opacity-70 z-50">
            <div className="min-w-[450px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8">
                <div className="min-w-[300px]">
                    <p className="text-sm font-semibold pl-2">Add Project</p>
                    <input
                        className="w-full border border-gray-200 h-8 bg-white text-gray-600 text-base rounded-md py-3 px-4 my-4 outline-none"
                        type="text"
                        value={project}
                        onChange={(e) => setproject(e.target.value)}
                        placeholder="Enter the Project name"
                    />
                    <div className="flex gap-4 mt-2">
                        <button
                            className="w-full border border-red-600 text-red-600 py-2 rounded-md bg-transparent text-sm font-semibold tracking-wide cursor-pointer"
                            onClick={() => setOpenAddProject(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="w-full text-white bg-teal-600 py-2 rounded-md text-sm font-semibold tracking-wide cursor-pointer"
                            onClick={() => handleAdd()}
                        >
                            Add Project
                        </button>
                    </div>
                </div>

            </div>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default AddProject;
