import React from 'react';
import './Landingpage.css';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


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
            <section className='caroimgcontainer'>
                <Carousel fade>
                    <Carousel.Item>
                        <div className="d-flex justify-content-evently">
                            <div className=" carotextbox p-lg-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt quo eos temporibus, doloribus consequatur nostrum maxime quisquam perspiciatis voluptas quis beatae incidunt adipisci pariatur expedita, dolorum fugiat modi magni?</p>
                            </div>
                            <div className="portfolio-box imgcon">
                                <Image className='caroimg' fluid src='bannerpi.png' rounded></Image>
                                <div className="portfolio-layer">
                                    <h4>Web Design</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt quo eos temporibus, doloribus consequatur nostrum maxime quisquam perspiciatis voluptas quis beatae incidunt adipisci pariatur expedita, dolorum fugiat modi magni?</p>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-evently">
                            <div className=" ms-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt quo eos temporibus, doloribus consequatur nostrum maxime quisquam perspiciatis voluptas quis beatae incidunt adipisci pariatur expedita, dolorum fugiat modi magni?</p>
                            </div>
                            <div className="portfolio-box imgcon">
                                <Image className='caroimg' fluid src='image1.png' rounded></Image>
                                <div className="portfolio-layer">
                                    <h4>Web Design</h4>
                                    <p>This website is developed for. I was the part of development team.</p>
                                    <a href="#"><i className='bx bx-link-external'></i></a>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className="d-flex justify-content-evently">
                            <div className=" ms-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt quo eos temporibus, doloribus consequatur nostrum maxime quisquam perspiciatis voluptas quis beatae incidunt adipisci pariatur expedita, dolorum fugiat modi magni?</p>
                            </div>
                            <div className="portfolio-box imgcon">
                                <Image className='caroimg' fluid src='image3.png' rounded></Image>
                                <div className="portfolio-layer">
                                    <h4>Web Design</h4>
                                    <p>This website is developed for. I was the part of development team.</p>
                                    <a href="#"><i className='bx bx-link-external'></i></a>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    
                </Carousel>
            </section>
        </div>
    );
};

export default Landingpage;