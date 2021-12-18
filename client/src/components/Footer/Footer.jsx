import React from 'react';
import './Footer.css';
import git from '../../assets/redes/git.png';
import linkedin from '../../assets/redes/linkedin.png';
import twitter from '../../assets/redes/twitter.png';
import whatsapp from '../../assets/redes/whatsapp.png';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerMe">
                 &copy; Todos los derechos reservados Daniel Mena 2021
            </div>
            
            <div className="footerSocialMedia">
                <div className="footerRed">
                    <a href="https://github.com/BtoMJ" target="_blank" rel="noreferrer">
                        <img src={git} alt="GitHub" className="hvr-grow-shadow"/>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-full-stack/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="Linkedin" className="hvr-grow-shadow"/></a>
                    <a href="https://twitter.com/DanielO1384" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="Twitter" className="hvr-grow-shadow"/>
                    </a>
                    <a href="https://wa.me/524761037311" target="_blank" rel="noreferrer">
                        <img src={whatsapp} alt="Whatsapp" className="hvr-grow-shadow"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
