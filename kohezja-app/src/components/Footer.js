import React from 'react';
import APP_COLORS from '../config/colors';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer-container' style={{backgroundColor: APP_COLORS.mainPurple}}>
             <h3> Stopka </h3>
        </div>
    )

}

export default Footer;