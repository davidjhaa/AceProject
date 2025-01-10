import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Backend_URL = import.meta.env.VITE_Backend_URL;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 5; 
  };

  const handleLogin = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Password must be at least 5 characters long");
      return;
    }

    try { 
      if (email === "test@aceproject.com" && password === "12345") {
        toast.success("Login successful!");
        setTimeout(()=>{
          navigate("/overview");
        }, 2600)
      } else {
        toast.error("Invalid credentials, please try again");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h1>
        <div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        closeOnClick
      />
    </div>
  );
};

export default Login;
