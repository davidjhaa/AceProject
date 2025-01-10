import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";
import { useSelector } from "react-redux";
import AddProject from "./AddProject";

const Sidebar = ({ selected }) => {
    const navigate = useNavigate();
    const [openAddProject, setOpenAddProject] = useState(false);
    const defaultProjects = ["HyphenView", "HyphenMon", "cyber Ark", "Securonix"];

    const reduxProjects = useSelector((state) => state.projects.projects);
    const [projects, setProjects] = useState(defaultProjects);

    useEffect(() => {
        setProjects([...defaultProjects, ...reduxProjects]);
    }, [reduxProjects]);

    const [showProjects, setShowProjects] = useState(false);

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <>
            <div className="min-h-screen w-60 bg-gray-100 p-4 flex-shrink-0 ">
                {/* User Profile */}
                <div className="flex items-center mb-6 gap-2">
                    <button
                        onClick={() => navigate('/profile')}
                        className="w-[40px] h-[40px] rounded-lg bg-purple-500 text-white font-bold text-center"
                    >
                        V
                    </button>
                    <div>
                        <h4 className="text-lg font-semibold">Vishal</h4>
                    </div>
                </div>

                <button
                    onClick={() => setOpenAddProject(!openAddProject)}
                    className="w-full bg-gray-200 text-gray-1700 py-2 px-4 rounded-lg flex items-center mb-6"
                >
                    + Add Project
                </button>

                <nav className="mb-2">
                    <ul>
                        <li
                            onClick={() => navigate("/overview")}
                            className={`flex items-center py-2 px-4 mb-2 hover:bg-gray-200 rounded-lg cursor-pointer ${selected === "overview" ? "bg-gray-200" : ""}`}
                        >
                            <CiHome size={22} className="mr-3" />
                            <span className="text-gray-700 hover:text-gray-900">Overview</span>
                        </li>
                        <li
                            onClick={() => navigate("/dashboard")}
                            className={`flex items-center mb-2 py-2 px-4 rounded-lg hover:bg-gray-200 cursor-pointer ${selected === "dashboard" ? "bg-gray-200" : ""}`}
                        >
                            <LuLayoutDashboard size={22} className="mr-3" />
                            <span className="text-gray-700 hover:text-gray-900">Dashboard</span>
                        </li>
                        <li
                            className="flex items-center mb-2 py-2 px-4 rounded-lg hover:bg-gray-200 cursor-pointer"
                            onClick={() => setShowProjects(!showProjects)}
                        >
                            <FaRegFolder size={22} className="mr-3" />
                            <div className="text-gray-700 hover:text-gray-900">Projects</div>
                        </li>
                    </ul>
                </nav>

                <div className="ml-9 mt-[-8px] rounded-lg max-h-44 overflow-y-auto">
                    {
                        showProjects && projects.length > 0 &&
                        projects.map((project, idx) => (
                            <div key={idx} className="bg-gray-200 py-2 px-4 hover:bg-slate-800 hover:text-white cursor-pointer ">
                                {project}
                            </div>
                        ))

                    }
                </div>


                {/* Logout Button */}
                <div className="absolute bottom-8 w-full">
                    <button
                        className="flex gap-4 items-center px-4 mt-6 font-medium text-gray-500 cursor-pointer hover:text-red-700"
                        onClick={handleLogout}
                    >
                        <HiOutlineLogout className="w-6 h-6 text-red-600" />
                        <span className="text-red-600 text-2xl font-semibold">Logout</span>
                    </button>
                </div>

                {openAddProject && <AddProject setOpenAddProject={setOpenAddProject} />}
            </div>
        </>
    );
};

export default Sidebar;