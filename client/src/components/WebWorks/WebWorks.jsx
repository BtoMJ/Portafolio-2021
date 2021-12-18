import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import img1 from '../../assets/web/comodi.png';
import img2 from '../../assets/web/guamen.png';
import img3 from '../../assets/web/Ten.png';
import img4 from '../../assets/web/buro.png';
import img5 from '../../assets/web/yutex.jpg';
import img6 from '../../assets/web/tarjetaaby.png';
import img8 from '../../assets/web/clima.png';
import img9 from '../../assets/web/movies.png';
import img10 from '../../assets/web/countries.png';
import img12 from '../../assets/web/drops.png';
import './WebWorks.css';

function WebWorks() {

    const element = document.querySelectorAll(".card");
    VanillaTilt.init(element);

    // let card = document.querySelectorAll(".card");
    // card.addEventListener("click", function () {
    //     card.style.transform = 'rotateY(180deg)'
    // });
    // const card = document.querySelector(".card");

    // element.addEventListener("click", () => {
  
    //     showDog = !showDog
    //     if (showDog === true) {
    //         element.style.transform = 'rotateY(180deg)'
    //     } else {
    //       dogPic.style.display = "none"
    //     }
      
    //     button.innerText = buttonStates[button.innerText]
        
    //   })

    
    // function flipped(){
    //     // card.classList.toggle('is-flipped');
    // const card = document.querySelector(".card__inner");
    // card.style.transform = 'rotateY(180deg)'
    // };

    // function flippedBack() {
    // // card.classList.toggle('is-flipped');
    // const card = document.querySelector(".card__face");
    // card.style.transform = 'rotateY(180deg)'
    // };
    // card.addEventListener("click", function (e) {
    // card.classList.toggle('is-flipped');
    // });

    return (
        <div className="webWorksContainer" id="webWorks">
            <div className="webWorksInfo">
                <div className="webWorksTitle"><h1>Trabajos Web</h1></div>

                <div className="webWorksData">

                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>COMODI</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img1} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Escuela de Moda</h4>
                                        <p>Instituto de enseñanza de confección de ropa, 
                                           ubicada en la ciudad de León, Guanajuato. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>GUAMEN</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img2} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Asociación</h4>
                                        <p>Grupo de ayuda a personas con esclerosis múltiple, 
                                           ubicada en la ciudad de León, Guanajuato. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>TEN SUSHI</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img3} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Restaurante</h4>
                                        <p>Comida japonesa con gran variedad de platillos, 
                                           ubicada en la ciudad de León, Guanajuato. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>BURÓ DIGITAL</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img4} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Negocio</h4>
                                        <p>Establecimiento que brinda servicios digitales, 
                                           ubicada en la ciudad de León, Guanajuato. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>YUTEX</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img5} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Empresa</h4>
                                        <p>Venta de insumos para fabricación de calzado, 
                                           ubicada en San Francisco del Rincón, Guanajuato. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>TARJETA DIGITAL</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img6} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Consultora</h4>
                                        <p>Tarjeta de contacto digital para consultora de belleza, 
                                           solo versión para smartphone. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>WEATHER APP</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img8} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>App de Clima</h4>
                                        <p>Proyecto para buscar clima en cualquier ciudad del mundo, 
                                           consume una API para los datos. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>MOVIES APP</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img9} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Películas y Series</h4>
                                        <p>App para buscar películas y series y agregarlas a favoritos y 
                                           conocer sus detalles. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>COUNTRIES APP</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img10} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Paises del Mundo</h4>
                                        <p>App para consultar cualquier país del mundo con su bandera, 
                                           extensión territorial, población, etc. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front">
                                <h2>DROPS APP</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img12} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Calzado de Moda</h4>
                                        <p>Ecommerce para compra de calzado urbano y deportivo de moda, 
                                           responsivo y con panel de administración. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}

                </div>

            </div>
        </div>
    )
}

export default WebWorks