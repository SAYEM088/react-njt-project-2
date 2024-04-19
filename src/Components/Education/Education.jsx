import React from 'react';
import { Image } from 'react-bootstrap';
import './Education.css'
const Education = () => {
    return (
        <div>
            <div className="mx-1 mx-lg-5 px-1 px-lg-5">
                <div className="eduname">
                    <div className="edubox">
                        <div className="row">
                            <div className="col imgdiv1"><Image style={{ width: '60%' }} src='g-cap.png' fluid></Image></div>
                            <div className="col-8 ">
                                <h4 className='pt-3'>Master of Laws <br /> (LLM)</h4>
                            </div>
                        </div>
                        
                        <p className='mb-5 mt-4 py-5'>from Northern University Bangladesh with the score 3.29</p>
                       <div className="yeardiv">
                       <h4>in 2020</h4>
                       </div>
                    </div>
                    <div className="edubox">
                        <div className="row">
                            <div className="col imgdiv1"> <Image style={{ width: '60%' }} src='g-cap.png' fluid></Image></div>
                            <div className="col-8 ">
                                <h3 className='pt-3'>Bachelor of law  <br /> (LLB)</h3>
                            </div>
                        </div>
                        
                        <p className='mb-5 mt-4 py-5'>from Metropolish Ideal Law Collage the score 2nd division</p>
                       <div className="yeardiv">
                       <h4>in 2013</h4>
                       </div>
                    </div>
                    <div className="edubox">
                        <div className="row">
                            <div className="col imgdiv1"> <Image style={{ width: '60%' }} src='g-cap.png' fluid></Image></div>
                            <div className="col-8 ">
                                <h3 className='pt-3'>Masters of arts  <br /> (MA)</h3>
                            </div>
                        </div>
                        
                        <p className='mb-5 mt-4 py-5'>from Tejgaw College in Social Science the score 2nd division</p>
                       <div className="yeardiv">
                       <h4>in 2011</h4>
                       </div>
                    </div>
                    <div className="edubox">
                        <div className="row">
                            <div className="col imgdiv1"> <Image style={{ width: '60%' }} src='g-cap.png' fluid></Image></div>
                            <div className="col-8 ">
                                <h3 className='pt-3'>Graduation </h3>
                            </div>
                        </div>
                        
                        <p className='mb-5 mt-4 pe-3 py-4'>from Panchpir Degree College at Panchpir , Ulipur, Kurigram. Score obtain 2nd division from the Arts Department</p>
                       <div className="yeardiv">
                       <h4>in 2009</h4>
                       </div>
                    </div>
                    <div className="edubox">
                        <div className="row">
                            <div className="col imgdiv1"> <Image style={{ width: '60%' }} src='g-cap.png' fluid></Image></div>
                            <div className="col-8 ">
                                <h4 className='pt-3'>Higher Secondary Certificate  <br /> (HSC)</h4>
                            </div>
                        </div>
                        
                        <p className='mb-5 mt-4 pe-2 py-4'>from Panchpir Degree College at Panchpir , Ulipur, Kurigram. Score obtain 2.60 in from the Arts department</p>
                       <div className="yeardiv">
                       <h4>in 2004</h4>
                       </div>
                    </div>
                    <div className="edubox">
                        <div className="row">
                            <div className="col imgdiv1"> <Image style={{ width: '60%' }} src='g-cap.png' fluid></Image></div>
                            <div className="col-8 ">
                                <h4 className='pt-3'>Secondary School Certificate  <br /> (SSC) </h4>
                            </div>
                        </div>
                        
                        <p className='mb-5 mt-4 pe-2 py-4'>from Bottali Girls' School at halabot, najimkhan, Rajarhat, Kurigram. Score 2.19 from the science department </p>
                       <div className="yeardiv">
                       <h4>in 2002</h4>
                       </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Education;