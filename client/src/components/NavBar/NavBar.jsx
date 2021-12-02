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
                <a href="/">home</a>
                <a href="#me">about me</a>
                <a href="#webWorks">web</a>
                <a href="#designWorks">design</a>
                <a href="#services">services</a>
                <a href="#contact">contact</a>
            </div>
            
        </div>
    )
}

export default NavBar
