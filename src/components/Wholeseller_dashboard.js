import React , {Component} from "react";
import './Employee_dashboard.css';
import Home from "./Home";
import { Outlet, Link } from "react-router-dom";

class WholesellerDashboard extends Component{

   render(){
    return (
       
            <div >

                <div className="main" >
                <h2 className="title"> Merchant's Dashboard</h2>
                </div>
                <Link className="abc" to="/" style={{ textDecoration: 'none' }}> Back_To_Home</Link>
                
                
                <div>
                    <h1>Merchant_id:</h1>
                    <h1>Name:</h1>
                    <h1>Mobile_No:</h1>
                    <h1>Address:</h1>
                    <h1>Starting Date:</h1>
                    <h1>Total payment Till now:</h1>
                    <h1>Due Paymnet:</h1>
                </div>
            </div>

        
    )
   }
};

export default WholesellerDashboard;