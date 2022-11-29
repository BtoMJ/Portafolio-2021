import React, {useState} from 'react';

import {FaArrowCircleUp} from 'react-icons/fa';

import './Scroll.css'

export default function Scroll() {

    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false);
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    <div>
    <button id='top' className='goToTop'>
        <FaArrowCircleUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
    </button>

    </div>
  )
}


  