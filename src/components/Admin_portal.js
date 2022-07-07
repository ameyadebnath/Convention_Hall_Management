import React , {Component} from "react";
import './Admin_portal.css';
import profile from '../images/profile.png';
import id from '../images/id.png';
import pass from '../images/pass.png';
import { useNavigate,Navigate} from 'react-router-dom';


const Admin = () =>{
//class Admin extends Component{
    const navigate = useNavigate();
    const navigateAdmin = () =>{
        navigate('/AdminDashboard')
    }
    
   // render(){
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
                        <h1 className="title1">Admin's Login Page</h1>
                        <div>
                            <img src={id} alt="id" className="id_pass"/>
                            <input type="text" placeholder="M_ID" className="name"/>
                        </div>
                        <div className="second_input">
                            <img src={pass} alt="pass" className="id_pass"/>
                            <input type="text" placeholder="Password" className="name"/>
                        </div>

                        <div className="login_button">
                        <button onClick={navigateAdmin}>Login</button>
                        </div>
                        <p className="instruction">
                            **ManagerId,pass was provided from developer
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )
    };
//}

export default Admin;