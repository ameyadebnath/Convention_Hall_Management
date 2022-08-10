import React from 'react';
import k1 from '../images/k1.png';
import k2 from '../images/k2.png';
import k3 from '../images/k3.png';
import k4 from '../images/k4.png';
import k5 from '../images/k5.jpg';
import k6 from '../images/k6.jpg';
import './Gallery.css';
import { Outlet, Link } from "react-router-dom";


//const Gallery = () =>{
function Gallery(){

    let data =[
        {
            id:1,
            imgSrc: k6,
        },
       
        {
            id:2,
            imgSrc: k2,
        },
        {
            id:3,
            imgSrc: k3,
        },
        {
            id:4,
            imgSrc: k4,
        },
        {
            id:5,
            imgSrc: k5,
        },
        {
            id:6,
            imgSrc: k1,
        },
        
    ]

    return(
        <>
        <div>
        <h2 className="title"> KUSHIARA INTERNATIONAL CONVENTION HALL</h2>
        </div>
        <div className='abc'>
            
            <Link  to="/" style={{ textDecoration: 'none' }}> Back_To_Home</Link>

        </div>
        <div className="Gallery">
            {data.map((item,index)=>{
                return(
                    <div className='pics' key={index}>
                        <img src={item.imgSrc} style={{width:'84%',padding:"2% 8% 3% 8%"}}/>
                    </div>
                )
            }
            )}
        </div>
        </>
    )
}

export default Gallery;