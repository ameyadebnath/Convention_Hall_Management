import React , {Component} from "react";
import './Employee_dashboard.css';
import Home from "./Home";
import { Outlet, Link } from "react-router-dom";

class EmpDashboard extends Component{

   render(){
    return (
       
            <div >

                <div className="main" >
                <h2 className="title"> Employee Dashboard</h2>
                </div>
                <Link className="abc" to="/" style={{ textDecoration: 'none' }}> Back_To_Home</Link>
                
                
                <div>
                    <h1>emp_id:</h1>
                    <h1>Name:</h1>
                    <h1>Age:</h1>
                    <h1>Mobile_No:</h1>
                    <h1>Address:</h1>
                    <h1>Joining Date:</h1>
                    <h1>Position:</h1>
                    <h1>Monthly Salary:</h1>
                    <h1>Due salary(optional)</h1>
                </div>
            </div>

        
    )
   }
};

export default EmpDashboard;