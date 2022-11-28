import React, {useState} from 'react';

import {FaArrowCircleUp} from 'react-icons/fa';

import './Scroll.css'

export default function Scroll() {

    var intFrameWidth = window.innerWidth;

    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > intFrameWidth){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    <div>
    <button className='goToTop'>
        <FaArrowCircleUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
    </button>

    </div>
  )
}


  