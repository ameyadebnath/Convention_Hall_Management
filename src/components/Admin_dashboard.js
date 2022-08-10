import React , {Component} from "react";
import './Admin_dashboard.css';
import Home from "./Home";
import { Outlet, Link } from "react-router-dom";
import Add_emp from "./Add_emp";
import Calc_mer_payment from "./Calc_mer_payment";

class AdminDashboard extends Component{

   render(){
    return (
        
            <div >

                <div className="main" >
                <h2 className="title"> Admin Dashboard</h2>
                </div>
                <div className="inline">
                    
                <Link className="first" to="/" style={{ textDecoration: 'none' }}> Back_To_Home</Link>
                <Link className="second" to="/Add_emp" style={{ textDecoration: 'none' }}> Add_New_Employee</Link>
              
                <Link className="second" to="/Add_merchant" style={{ textDecoration: 'none' }}> Add_New_Merchant</Link>
            
                <Link className="second" to="/Calc_mer_payment" style={{ textDecoration: 'none' }}> Calculate_Payment_Of_Merchant</Link>

                </div>
                <div className="allemp">
                    <p className="allemptitle">All Employee status</p>
                    <table className="table" >
                        <tr>
                            <th>Emp_id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Contact No</th>
                            <th>Address</th>
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>AMEYA</td>
                            <td>22</td>
                            <td>Chef</td>
                            <td>20,000</td>
                            <td>01716202230</td>
                            <td>house 25,Topobon R/A,Sylhet</td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>Pronob</td>
                            <td>25</td>
                            <td>Waiter</td>
                            <td>18,000</td>
                            <td>01716202250</td>
                            <td>house 23,Akhalia R/A,Sylhet</td>
                        </tr>
                    </table>

                </div>

                <div className="allmer">
                    <p className="allemptitle">All Merchant status</p>
                    <table className="table2" >
                        <tr>
                            <th>Merchant_id</th>
                            <th>Wholeseller/Flower_Merchant/Decorator</th>
                            <th>Name</th>
                            <th>Contact No</th>
                            <th>Shop_Address</th>
                            <th>Total Payment Received</th>
                            <th>Total Due(Tk)</th>
                        </tr>
                        <tr>
                            <td>2001</td>
                            <td>Flower_Merchant</td>
                            <td>Alif</td>
                            <td>01912202230</td>
                            <td>Shop_No 25,Modina Market,Sylhet</td>
                            <td>50,000</td>
                            <td>12,000</td>
                        </tr>
                        <tr>
                        <td>2002</td>
                            <td>Decorator</td>
                            <td>Nihal</td>
                            <td>01822392430</td>
                            <td>Shop_No 30,Pollobi ,Sylhet</td>
                            <td>40,000</td>
                            <td>8,000</td>
                        </tr>
                    </table>
                </div>
            </div>

    )
   }
};

export default AdminDashboard;