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
            <section className='marqueesec p-5'>
                <marquee direction="">   <h4>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> hrguiahgoiaikgnhoiajhgf</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> hrguiahgoiaikgnhoiajhgf</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> hrguiahgoiaikgnhoiajhgf</span>
                <span className='mx-5'>
                    <Image style={{width:'2rem',height:"2rem"}} src='green-leaf.png'></Image> hrguiahgoiaikgnhoiajhgf</span>
                    </h4> 
                </marquee>
            </section>
            <section className='mt-1 profilecard mx-1 mx-lg-5 gap-5 '>

                <div className="garmentshirt">
                    <Image className='p-2' src='factory.png' fluid rounded></Image>
                    <h3 className='mx-3 my-2'>shsikja</h3>
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis exercitationem porro molestias ratione? Possimus molestiae nulla optio quasi consequatur quibusdam totam ipsa est, sapiente magnam maiores distinctio officiis amet!</p>
                </div>

                <div className="garmentshirt">
                    <Image className='p-2' src='bdsupremecourt.jpg' fluid rounded></Image>
                    <h3 className='mx-3 my-2'>shsikja</h3>
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis exercitationem porro molestias ratione? Possimus molestiae nulla optio quasi consequatur quibusdam totam ipsa est, sapiente magnam maiores distinctio officiis amet!</p>
                </div>

                <div className="garmentshirt">
                    <Image  className='p-2' src='buying.png' fluid rounded></Image>
                    <h3 className='mx-3 my-2'>shsikja</h3>
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis exercitationem porro molestias ratione? Possimus molestiae nulla optio quasi consequatur quibusdam totam ipsa est, sapiente magnam maiores distinctio officiis amet!</p>
                </div>

            </section>
 
        </div>
    );
};

export default Landingpage;