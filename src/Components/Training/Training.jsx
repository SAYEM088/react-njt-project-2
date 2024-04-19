import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Training.css';
const Training = () => {
    return (
        <div>
            <section className='career'>
                <div className="">
                <div className=""></div>
                   
                   
                </div>
            </section>
            {/* carosol */}
            <section className='carosoul  d-none d-md-block'>
                <Carousel fade data-bs-theme="light">
                    <Carousel.Item >
                        <div className="projectimg1">
                            <div className="textboxx">
                                <h2 className="">
                                    CSR Audit in China
                                </h2>
                                <p>
                                    During CSR training we visited one of our suppliers in <span className="span-textcolor"> Xiamen city, China</span>. The director of the company
                                    narrated to us the internal policy and labor practice. It was a leather factory and most of the
                                    employees were local.
                                </p>
                            </div>
                            <div className="portfolio-box imgcon">
                                <Image fluid src='image3.png' rounded></Image>
                                <div className="portfolio-layer">
                                    <h4>CSR Audit in China</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="projectimg1">
                            <div className="textboxx">
                                <h2 className="slide-heading">
                                    Workers training program on <br /> Sexual harassment-free working Environment</h2>
                                <p>
                                    It was a day-long program with workers in Blue Planet Knitwear Ltd. After the training session, we
                                    selected the committee members among the workers and established an active committee as per the high
                                    court verdict.
                                    As a consequence with the help of top management, we were able to make a <span className="span-textcolor"> sexual harassment-free</span>
                                    working environment in this company. Now it became an effective and trusted committee. At present,
                                    the worker gets more flexibility and mantel peace to serve themselves.
                                </p>
                            </div>
                            <div className="portfolio-box imgcon">
                                <Image fluid src='image1.png' rounded></Image>
                                <div className="portfolio-layer">
                                    <h4> Workers training program on Sexual harassment-free working Environment</h4>
                                   
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="projectimg1">
                            <div className="textboxx">
                                <h1 className="slide-heading">
                                    Picture with my Colleagues
                                </h1>
                                <p>
                                    In April 2017 I got an ample opportunity, I joined Takko Fashion Ltd. as an <span className="span-textcolor">Auditor of Social
                                        Compliance</span> . Takko Fashion is one of the most popular brands of Garman. Accordingly the rules and
                                    system of the company I got a chance to go for training in china. On 1st July 2017, I went to Xiamen
                                    city in china. The team from India, Bangladesh, Vietnam, China, and Garman employee attended the
                                    Training program. The trainer also came from German. It was a great achievement for me to learn some
                                    new skills. It was a wonderful time to explore myself. The training was like a tool to design my
                                    career.
                                </p>
                            </div>
                            <div className="portfolio-box imgcon">
                                <Image fluid src='bannerpi.png' rounded></Image>
                                <div className="portfolio-layer">
                                    <h4> Picture with my Colleagues</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
            {/* this section will be hide for larger device */}
            <section className='d-block d-sm-none'>
                <div className="projectimg">
                    <div className="portfolio-box imgcon">
                        <Image fluid src='' rounded></Image>
                        <div className="portfolio-layer">
                            <h4>CSR Audit in China 2017</h4>
                            <p>During CSR training we visited one of our suppliers in Xiamen city, China.</p>
                        </div>
                    </div>
                    <div className="portfolio-box imgcon">
                        <Image fluid src='' rounded></Image>
                        <div className="portfolio-layer">
                            <h4>Picture with my Colleagues</h4>
                            <p>On 1st July 2017, I went to Xiamen
                                    city in china. The team from India, Bangladesh, Vietnam, China, and Garman employee attended the
                                    Training program.</p>
                        </div>
                    </div>
                    <div className="portfolio-box imgcon">
                        <Image fluid src='' rounded></Image>
                        <div className="portfolio-layer">
                            <h4>Workers training program on Sexual harassment-free working Environment</h4>
                            <p>It was a day-long program with workers in Blue Planet Knitwear Ltd.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Training;