import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
