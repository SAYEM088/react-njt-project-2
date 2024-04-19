import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from '../Contact/Contact'
import Overlay1 from '../Overlay/Overlay1'
import './Contactbtn.css'
const Contactbtn = () => {
    return (
        <div>
            <div className="contan">
                <div className="">
                <Overlay1></Overlay1>
                </div>
            </div>
            <section className="footer">
            <div className="contact1">
                <div className="phone">
                    <div className=""> <Image style={{width:'35px',height:'35px'}} src='phone.png'></Image></div>
                    <div className=""><h2>Contact Me</h2></div>
                </div>
                <h5>+8801741654335</h5>
                <a href="nusratj2011@gmail.com">nusratj2011@gmail.com</a>
            </div>
            <div className="contact1">
                <div className="phone">
                    <div className=""> <Image style={{width:'35px',height:'35px'}} src='location.png'></Image></div>
                    <div className=""><h2>Judge Court Chamber</h2></div>
                </div>
                <h6>Dhaka Bar Annex Building 2 <br /> 8th Floor Room No: 9016</h6>
                
            </div>
            </section>
            
        </div>
    );
};

export default Contactbtn;