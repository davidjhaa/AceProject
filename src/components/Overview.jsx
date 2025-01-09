import React from "react";
import Sidebar from "./Sidebar";

const Overview = () => {
    return (
        <>
            <div className="w-64 fixed top-0 left-0 h-full z-10">
                <Sidebar />
            </div>
            <div className="flex min-h-screen overflow-hidden bg-gray-100">
                <div className="w-64 fixed top-0 left-0 h-full z-10">
                    <Sidebar />
                </div>
                <div className="flex-1 ml-64 bg-gray-100 p-3 overflow-y-auto">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Overview</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Task Summary */}
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-bold text-gray-700 mb-4">Task Overview</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-100 text-blue-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">0</p>
                                    <p>Assigned</p>
                                </div>
                                <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">0</p>
                                    <p>As Reviewer</p>
                                </div>
                                <div className="bg-yellow-100 text-yellow-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">0</p>
                                    <p>Created</p>
                                </div>
                                <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">0</p>
                                    <p>Overdue</p>
                                </div>
                                <div className="bg-purple-100 text-purple-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">0</p>
                                    <p>Ready to Start</p>
                                </div>
                                <div className="bg-gray-100 text-gray-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">0</p>
                                    <p>Start Soon</p>
                                </div>
                            </div>
                        </div>

                        {/* Project Summary */}
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-bold text-gray-700 mb-4">My Projects</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-indigo-100 text-indigo-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">1</p>
                                    <p>Assigned</p>
                                </div>
                                <div className="bg-pink-100 text-pink-700 p-3 rounded-lg text-center">
                                    <p className="text-3xl font-bold">0</p>
                                    <p>Marked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overview;
