import React from 'react';
import './Landingpage.css';
import { Image } from 'react-bootstrap';
import Landingcard from '../Landingcard/Landingcard';



const Landingpage = () => {
    return (
        <div>
            <div className="landcontainer d-lg-flex  justify-content-around justify-content-lg-evently m-5 ">
                <div className="ms-4">
                    <h4>Hi,</h4>
                    <h3>I am </h3>
                    <h1><span>Nisrat Jahan Talukder</span></h1>
                    <p>I am Nisrat Jahan Talukder. I am a lawyer of the Honorable supreme court in Bangladesh. I practice in Civil & criminal both sides. I have quite a knowledge of Bangladesh Labor Law 2006, Bangladesh Shorm Bidhimala,2015. Environmental laws 1995 relevant to the RMG sector in Bangladesh.</p>
                </div>
                <div className="mt-5 p-lg-5 ms-3 ms-lg-5 imgcon ">
                    <Image src='' style={{ width: '80%', height: '80%' }} fluid roundedCircle></Image>
                </div>
            </div>
            <section className='marqueesec p-5'>
                <marquee direction="">   <h4>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> Advocate</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> Manager</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image>Trainer</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> </span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> </span>
                    <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> Advocate</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> Manager</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image>Trainer</span>
                    </h4> 
                </marquee>
            </section>
           <Landingcard/>
        </div>
    );
};

export default Landingpage;