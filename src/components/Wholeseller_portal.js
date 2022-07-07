import React , {Component} from "react";
import './Wholeseller_portal.css';
import profile from '../images/profile.png';
import id from '../images/id.png';
import pass from '../images/pass.png';
import { useNavigate,Navigate} from 'react-router-dom';



const Wholeseller = () =>{
//class Wholeseller extends Component{
    const navigate = useNavigate();
    const navigatewholeseller = () =>{
        navigate('/WhsDashboard')
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
                        <h1 className="title1">Merchant's Login Page</h1>
                        <div>
                            <img src={id} alt="id" className="id_pass"/>
                            <input type="text" placeholder="Whs_ID" className="name"/>
                        </div>
                        <div className="second_input">
                            <img src={pass} alt="pass" className="id_pass"/>
                            <input type="text" placeholder="Password" className="name"/>
                        </div>

                        <div className="login_button">
                        <button onClick={navigatewholeseller}>Login</button>
                        </div>
                        <p className="instruction">
                            **Whs_ID and Password will be provided by authority
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )
    };
//}

export default Wholeseller;