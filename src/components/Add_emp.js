import React , {Component} from "react";
import './Add_emp.css';

import { useNavigate,Navigate} from 'react-router-dom';



const Add_emp = () =>{
//class Wholeseller extends Component{
    const navigate = useNavigate();
    const navigateAdminDashboard = () =>{
        navigate('/AdminDashboard')
    }
    //render(){
        return(
            <div className="main"> 
                
            <div className="sub-main">
                <div>
                   

                    <div>
                        <h1 className="title1">Adding Data of New Employee</h1>
                        <div>
                            
                            <input type="text" placeholder="Emp_name" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Emp_ID" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Employee's_Login_password" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Emp_Position" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Emp_Age" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Emp_Salary" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Emp_Contact_No" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Emp_Address" className="name"/>
                        </div>
                        <div className="submit_button">
                        <button onClick={navigateAdminDashboard}>Add_employee</button>
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
        )
    };
//}

export default Add_emp;