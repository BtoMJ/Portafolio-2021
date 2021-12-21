import React from 'react';
import img1 from '../../assets/design/logos/bajio.png';
import img2 from '../../assets/design/logos/cajas.png';
import img3 from '../../assets/design/logos/falcokids.png';
import img4 from '../../assets/design/logos/corvetsuelas.jpg';
import img5 from '../../assets/design/logos/SMM.png';
import img6 from '../../assets/design/varios/10.jpg';
import img7 from '../../assets/design/varios/luis.jpg';
import img8 from '../../assets/design/varios/concord.jpg';
import img9 from '../../assets/design/varios/botellas.jpg';
import img10 from '../../assets/design/varios/aula.jpg';
import img11 from '../../assets/design/animacion/1.png';
import img12 from '../../assets/design/animacion/2.png';
import img13 from '../../assets/design/animacion/3.png';
import img14 from '../../assets/design/animacion/4.png';
import img15 from '../../assets/design/animacion/5.png';
import './DesignWorks.css';

function DesignWorks() {

    var intFrameWidth = window.innerWidth;

    return (
        <div className="designWorksContainer" id="designWorks">
             <div className="designWorksInfo">
                <div className="designWorksTitle"><h1>Trabajos de Diseño</h1></div>

                <div className="designWorksData">

                    <div className="designWorksSubTitle"><h2>Logotipos</h2></div> 
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front2">
                                <h2>BAJÍO SHOES</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header2">
                                        <img src={img1} alt="Trabajos Diseño" className="pp2" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Negocio</h4>
                                        <p>Empresa de fabricación de calzado urbano y deportivo, 
                                           para toda la familia, venta por mayoreo. 
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
                            <div className="card__face card__face--front2">
                                <h2>CAJAS Y SINTÉTICOS</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header2">
                                        <img src={img2} alt="Trabajos Diseño" className="pp2" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Peletería</h4>
                                        <p>Insumos para la fabricación de calzado, así como para tu
                                           venta y distribución (cajas, cintas adhesivas, etc). 
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
                            <div className="card__face card__face--front2">
                                <h2>FALCO</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header2">
                                        <img src={img3} alt="Trabajos Diseño" className="pp2" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Calzado</h4>
                                        <p>Fábrica de calzado deportivo para niños, 
                                           especializado en tenis para correr y urbano. 
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
                            <div className="card__face card__face--front2">
                                <h2>CORVET SUELAS</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header2">
                                        <img src={img4} alt="Trabajos Diseño" className="pp2" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Hulera</h4>
                                        <p>Fábrica de suelas para calzado en distintos materiales, 
                                           como EVA, Phytlon, TR entre otros. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className={intFrameWidth <= 991 ? "invisible":"card"} data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front2">
                                <h2>CROMÁTICA</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header2">
                                        <img src={img5} alt="Trabajos Diseño" className="pp2" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Capacitaciones</h4>
                                        <p>Instituto de actualización de conocimientos 
                                           especializados en neurociencias aplicadas. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* ------------------------------------- FIN 1------------------------------------- */}

                    <div className="designWorksSubTitle"><h2>Publicidad</h2></div> 
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front2">
                                <h2>FOTOMONTAJES</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img6} alt="Trabajos Diseño" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Sport Corvet</h4>
                                        <p>Edición de fotografías para montajes y creación de posters 
                                           para redes sociales en distintas medidas. 
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
                            <div className="card__face card__face--front2">
                                <h2>INVITACIONES</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img7} alt="Trabajos Diseño" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Cumpleaños</h4>
                                        <p>Invitaciones de cumpleaños personalizadas, 
                                           a gusto del cliente por tema. 
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
                            <div className="card__face card__face--front2">
                                <h2>CATÁLOGOS</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img8} alt="Trabajos Diseño" className="ppCard" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Concord</h4>
                                        <p>Catálogo de productos para su distribución impresa y digital, 
                                           toma y edición fotográfica incluida. 
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
                            <div className="card__face card__face--front2">
                                <h2>ESTADOS DE WHATSAPP</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img9} alt="Trabajos Diseño" className="ppCard" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Navidad</h4>
                                        <p>Baner con promoción de productos para estados de Whatsapp, 
                                            pueden ser estáticos o animados a la necesidad del cliente. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className={intFrameWidth <= 991 ? "invisible":"card"} data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front2">
                                <h2>TEMPLATES</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img10} alt="Trabajos Diseño" className="ppCard" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Auladiser</h4>
                                        <p>Diseño de plantillas para envío masivo de correos, 
                                           información de cursos, promociones y próximas aperturas. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -----------------------------------FIN 2--------------------------------------- */}

                    <div className="designWorksSubTitle"><h2>Animación</h2></div> 
                    <div className="card" data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front2">
                                <h2>ESTADOS DE FACEBOOK</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img11} alt="Trabajos Diseño" className="pp2" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Skin Care</h4>
                                        <p>Edición de fotografías para creación de baners animados
                                           para redes sociales como Facebook, Instagram o Whatsapp. 
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
                            <div className="card__face card__face--front2">
                                <h2>POSTALES</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img12} alt="Trabajos Diseño" className="pp3" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Sport Corvet</h4>
                                        <p>Postales animadas para redes sociales de agradecimiento o 
                                           temáticas según la temporada. 
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
                            <div className="card__face card__face--front2">
                                <h2>SERVICIOS</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img13} alt="Trabajos Diseño" className="pp3" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Phoenix</h4>
                                        <p>Catálogo de servicios o presentación de negocio en redes sociales, 
                                           duración corta pero con sonido. 
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
                            <div className="card__face card__face--front2">
                                <h2>PRESENCIA DE MARCA</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img14} alt="Trabajos Diseño" className="pp3" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Ultra Sport</h4>
                                        <p>Baner con promoción de marca para estados de Whatsapp, 
                                            Facebook o Instagram a la necesidad del cliente. 
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className={intFrameWidth <= 991 ? "invisible":"card"} data-tilt>
                        <div className="card__inner" >
                            <div className="card__face card__face--front2">
                                <h2>PRODUCTOS</h2>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div class="card__header">
                                        <img src={img15} alt="Trabajos Diseño" className="pp" />
                                    </div>
                                    <div class="card__body">
                                        <h4>Tenis Chilos</h4>
                                        <p>Baner con promoción de productos para estados de Whatsapp, 
                                            Facebook o Instagram a la necesidad del cliente.
                                        </p>
                                        {/* <a className="LinkWebSite" href="#" target="_blank">visitar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -----------------------------------FIN 2--------------------------------------- */}
                </div>

             </div>
        </div>
    )
}

export default DesignWorks
