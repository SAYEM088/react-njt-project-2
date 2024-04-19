import React from 'react';
import { Image } from 'react-bootstrap';
import './Landingcard.css'
const Landingcard = () => {
    return (
        <div>
             <section className='sectionbg'>
                <div className='mt-1 profilecard mx-1 mx-lg-5 gap-5 '>
                <div className="garmentshirt">
                    <Image className='p-2' src='factory.png' fluid rounded></Image>
                    <h3 className='mx-3 my-2'>Manager</h3>
                    <p className='p-3'>HR & Compliance <br /> Haque Apparels & Textile Ltd. Bangladesh</p>
                </div>

                <div className="garmentshirt">
                    <Image className='p-2' src='bdsupremecourt.jpg' fluid rounded></Image>
                    <h3 className='mx-3 my-2'>Advocate</h3>
                    <p className='p-3'>The Honorable Bangladesh Supreme Court <br />
                    Civil & Criminal</p>
                </div>

                <div className="garmentshirt">
                    <Image  className='p-2 garmentimg' src='trainer.png' fluid rounded></Image>
                    <h3 className='mx-3 my-2'>Trainer</h3>
                    <p className='p-3'>Soft Skills trainer at UCEP Bangladesh</p>
                </div>
                </div>
            </section>
 
        </div>
    );
};

export default Landingcard;