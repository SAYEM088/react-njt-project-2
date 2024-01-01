import React from 'react';
import { Image } from 'react-bootstrap';

import './About.css'
import Education from '../Education/Education';
const About = () => {
    return (
        <div>
             <p className="m-lg-2 m-2 p-3 py-sm-3 ">I accomplished my education in law and also a master's in
            Sociology.
            I am pretty experienced in social compliance in the Readymade garments sector. Therefore I have more than 12
            years of experience in this field. I learned HR & Social compliance tasks from the root. I trained Top
            management employees, mid-level employees, and also workers in more than 40 factories. In view of the fact
            that I visited more than 100 factories for social compliance audits and also visited the factories during
            the pandemic for ensuring health & safety hazards. For encourages the worker to maintain safety issues
            properly.</p>
            {/* education section */}
            <Education/>
        </div>
    );
};

export default About;