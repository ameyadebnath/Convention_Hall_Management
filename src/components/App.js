import React from "react";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Gallery from "./Gallery";
import Home from "./Home"
import Employee from "./Emp_portal";
import Wholeseller from "./Wholeseller_portal";
import Admin from "./Admin_portal";
import EmpDashboard from "./Employee_dashboard";
import WholesellerDashboard from "./Wholeseller_dashboard";
import AdminDashboard from "./Admin_dashboard";


function App() {
  return (
    /*<>
    <Home/>
    </>*/
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/emp_portal" element={<Employee/>}/>
      <Route path="/wholeseller" element={<Wholeseller/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/empDashboard" element={<EmpDashboard/>}/>
      <Route path="/WhsDashboard" element={<WholesellerDashboard/>}/>
      <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 