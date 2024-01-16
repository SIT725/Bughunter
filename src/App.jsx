import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from "./view/Home";
import CreateIssue from "./view/CreateIssue";
import LogIn from "./view/LogIn";
import SignUp from "./view/SignUp";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./controller/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CreateIssue" element={<CreateIssue/>} />
            <Route exact path="/login" element={<LogIn/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
