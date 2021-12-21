import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';  
import Me from './components/Me/Me.jsx';  
import WebWorks from './components/WebWorks/WebWorks.jsx';  
import DesignWorks from './components/DesignWorks/DesignWorks.jsx';  
import Contact from './components/Contact/Contact.jsx';  
import Slider from './components/Slider/Slider.jsx';  
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="TopContainer">
          <div><NavBar /></div>
          <div><Slider /></div>
      </div>

      <Me />
      <WebWorks />
      <DesignWorks />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
