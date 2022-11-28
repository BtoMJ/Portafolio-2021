import React from 'react';

import { FaRegTimesCircle } from "react-icons/fa";

import './NavMobile.css';

function hideMenu(){
    setTimeout(()=>{
        document.getElementById('NavMobile').style.left='100vw';
    },2000)
}

export default function NavMobile() {
  return (
    <div className='menuMobileContainer'>

        <div className='menuMobile'>
            <div id='closeIcon' className='closeIcon' onClick={hideMenu}>
                <FaRegTimesCircle />
            </div>   
            <div><a href="/">inicio</a></div>
            <div><a href="#me" onClick={hideMenu}>sobre mí</a></div>
            <div><a href="#webWorks" onClick={hideMenu}>web</a></div>
            <div><a href="#designWorks" onClick={hideMenu}>diseño</a></div>
            <div><a href="#contact" onClick={hideMenu}>contacto</a></div>
        </div>

    </div>
  )
}
