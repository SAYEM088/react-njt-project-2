import React from 'react';
import './Landingpage.css';
import { Image } from 'react-bootstrap';


const Landingpage = () => {
    return (
        <div>
            <div className="landcontainer d-lg-flex  justify-content-around justify-content-lg-evently m-5 ">
                <div className="ms-4">
                    <h5>Hi,</h5>
                    <h3>I am </h3>
                    <h1><span>Nisrat Jahan Talukder</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum earum cumque possimus asperiores mollitia unde corrupti assumenda, magnam et voluptas debitis commodi nihil illo excepturi corporis reiciendis a necessitatibus similique!</p>
                </div>
                <div className="mt-5 p-lg-5 ms-3 ms-lg-5 imgcon ">
                    <Image src='advimg.png' style={{ width: '80%', height: '80%' }} fluid roundedCircle></Image>
                </div>
            </div>
            <div className="">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                           
                        </div>
                        <div className="carousel-item d-block w-100">
                        <Image src='advimg.png'></Image>
                        </div>
                        <div className="carousel-item">
                        <Image src='advimg.png'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;