import React , {Component} from "react";
import './Add_emp.css';

import { useNavigate,Navigate} from 'react-router-dom';



const Add_merchant = () =>{
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
                        <h1 className="title1">Adding Data of New Merchant</h1>
                        <div>
                            
                            <input type="text" placeholder="Merchant_name" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Merchant_ID" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Merchant's_Login_password" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Wholeseller/Flower_Merchant/Decorator?" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Merchant_Contact_No" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Shop_Address" className="name"/>
                        </div>
                        
                        <div className="submit_button">
                        <button onClick={navigateAdminDashboard}>Add_merchant</button>
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
        )
    };
//}

export default Add_merchant;