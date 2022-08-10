import React , {Component} from "react";
import './Home.css';
import email from '../images/email.jpg';
import call from '../images/call.jpg';
import location from '../images/location.jpg';
import { Outlet, Link } from "react-router-dom";



//const Header = () => {
class Home extends Component{

   render(){
    return (
       
            <div >

                <div className="head" >
                <h2 className="title"> KUSHIARA INTERNATIONAL CONVENTION HALL</h2>

                <div className="inline">
                
                <Link className="b1" to="/gallery" style={{ textDecoration: 'none' }}> 
                Kushiara_Gallery </Link>
                <Link className="b2" to="/emp_portal" style={{ textDecoration: 'none' }}> 
                Emp_portal </Link>
                <Link className="b2" to="/wholeseller" style={{ textDecoration: 'none' }}> 
                Wholeseller_portal </Link>
                <Link className="b2" to="/admin" style={{ textDecoration: 'none' }}> 
                Admin_portal </Link>

                
                </div>
                </div>
                
                <div className="img1">
                    <img  src={require('../images/k1.png')} style={{width:'100%'}}/>

                </div>
                <div className="about">
                    <p className="header2">Kushiara International Convention Hall </p>
                    <p className="paragraph"> Kushiara International Convention Hall is located on Chondipul, Dakshin Surma, 
                        Sylhet and invites you to a welcoming atmosphere in which 
                        privacy and luxury are all important. The classic combination 
                        of warm colours and traditional features help create an intimate
                         and restful environment in which our staff will ensure you 
                         experience a truly exceptional stay. Our luxury hall comes 
                         with breathtaking greenery and scenery, which can be ideal 
                         if you require a wedding venue. We can guarantee that you and 
                         your guests will receive first class service and our full
                          attention to ensure that yours is truly a day to remember!</p>
                </div>
                <div className="address">
                    <h2>Contact</h2>
              
                <h3>kushiara.ich@gmail.com</h3>
                
                <h3>+8801777827778</h3>
                
                <h3>Chonddipul Point, Dakhsin Surma, Sylhet-3100, Bangladesh</h3>
                </div>
            </div>

        
    )
   }
};

export default Home;