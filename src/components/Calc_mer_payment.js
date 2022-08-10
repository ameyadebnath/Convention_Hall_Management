import React , {Component} from "react";
import './Calc_mer_payment.css';

import { useNavigate,Navigate} from 'react-router-dom';



const Calc_mer_payment = () =>{
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
                        <h1 className="title1">Payment Calculation of Merchant</h1>
                        <div>
                            
                            <input type="text" placeholder="Merchant_ID" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Paid_Amount" className="name"/>
                        </div>
                        <div className="second_input">
                            <input type="text" placeholder="Due_Amount" className="name"/>
                        </div>
                        
                        <div className="submit_button">
                        <button onClick={navigateAdminDashboard}>Update_Transaction</button>
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
        )
    };
//}

export default Calc_mer_payment;