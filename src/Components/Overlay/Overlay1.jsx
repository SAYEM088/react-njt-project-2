import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Image } from 'react-bootstrap';

const Overlay1 = () => 
{
    const renderTooltip = (props) => 
    (
        <Tooltip id="button-tooltip" {...props}>
          Visiting Card
        </Tooltip>
    );

    
    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip} 
        >
            <Image style={{ width: '25rem', height: "15rem" }} src='advcard.png' fluid rounded></Image>
        </OverlayTrigger>
    );
}

export default Overlay1;