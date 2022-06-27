import React from 'react';
import "./style.css"

const Footer = () => {
    var imageName = require('./herb.png')

    return (
        <>
            <div className='herbe'><img src={imageName} /></div>
        <div className='footer'>
            <p>footer</p>
        </div>
        </>
    );
};

export default Footer;