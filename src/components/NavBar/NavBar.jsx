import React from 'react';
import logo from '../../assets/Logo-Code-2.png';

import { FaBars } from "react-icons/fa";

import './NavBar.css'

function showMenu(){
    document.getElementById('NavMobile').style.display='block';
    document.getElementById('menuMobileContainer').style.left='0';
}

function NavBar() {
    return (
        <div className="navBarContainer">

            <div className="navBarLogo">
                <img src={logo} alt="logo" />
            </div>

            <div className='mobileIcon' onClick={showMenu}>
                <FaBars />
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
