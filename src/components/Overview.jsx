import React from "react";
import Sidebar from "./Sidebar";

const Overview = () => {
    return (
        <div className="bg-gray-100">
            <div className="w-60 fixed top-0 left-0 h-full z-10 shadow-lg">
                <Sidebar selected= {"overview"}/>
            </div>
            <div className="bg-gray-100 p-6 flex-1 ml-64 overflow-y-auto min-h-screen">
                <div className="">
                    <h1 className="text-2xl font-bold mb-6">Overview</h1>

                    {/* Task  Section */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {[
                            { label: "Assigned", count: 8, color: "bg-orange-100", icon: "📄" },
                            { label: "As Reviewer", count: 2, color: "bg-blue-100", icon: "👀" },
                            { label: "Assigned or as Reviewer", count: 10, color: "bg-purple-100", icon: "📎" },
                            { label: "Marked", count: 4, color: "bg-yellow-100", icon: "⭐" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`${item.color} rounded-lg shadow-md p-4 flex items-center gap-4`}
                            >
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <h3 className="text-lg font-medium">{item.label}</h3>
                                    <p className="text-2xl font-bold">{item.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Time and Project Overview */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-medium mb-2">My Time</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-xl">⏰ Time Clock</span>
                                <span className="text-lg font-bold bg-gray-200 py-1 px-3 rounded-md">
                                    00:00:00
                                </span>
                            </div>
                            <p className="text-gray-600 mt-2">Total Hours for this Week: <span className="font-bold">0</span></p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-medium mb-2">My Projects</h3>
                            <ul className="list-none space-y-2">
                                <li className="flex justify-between">
                                    <span>📂 Assigned</span>
                                    <span className="font-bold">8</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>⭐ Marked</span>
                                    <span className="font-bold">4</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
