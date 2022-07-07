import React , {Component} from "react";
import './Emp_portal.css';
import profile from '../images/profile.png';
import id from '../images/id.png';
import pass from '../images/pass.png';
import { useNavigate,Navigate} from 'react-router-dom';



const Employee = () =>{
//class Employee extends Component{
    const navigate = useNavigate();
    const navigateEmpdashboard = () =>{
        navigate('/empDashboard')
    }
    
    //render(){
        return(
            <div className="main"> 
                
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                    </div>

                    <div>
                        <h1 className="title1">Employee Login Page</h1>
                        <div>
                            <img src={id} alt="id" className="id_pass"/>
                            <input type="text" placeholder="Emp_ID" className="name"/>
                        </div>
                        <div className="second_input">
                            <img src={pass} alt="pass" className="id_pass"/>
                            <input type="text" placeholder="Password" className="name"/>
                        </div>

                        <div className="login_button">
                        <button onClick={navigateEmpdashboard}>Login</button>
                        </div>
                        <p className="instruction">
                            **Emp_ID and Password will be provided by authority
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )
    };
//}

export default Employee;