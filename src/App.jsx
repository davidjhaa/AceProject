import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Overview from "./components/Overview";
import UserProfile from "./components/UserProfile";


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element = {<Dashboard />} />
      <Route path="/overview" element = {<Overview />} />
      <Route path="/profile" element = {<UserProfile />} />
    </Routes>
  </Router>
);

export default App;