import React from 'react';
import logo from '../../assets/Logo-Code-2.png';
import './NavBar.css'

function NavBar() {
    return (
        <div className="navBarContainer">
            <div className="navBarLogo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navBarMenu">
                <a href="/">inicio</a>
                <a href="#me">sobre mí</a>
                <a href="#webWorks">web</a>
                <a href="#designWorks">diseño</a>
                <a href="#contact">contacto</a>
            </div>
        </div>
    )
}

export default NavBar
