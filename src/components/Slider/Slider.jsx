import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function Slider() {
    
    
    return (
        <div className="SliderContainer">
            <Carousel controls={false} fade={false} className="Carousel" >
                <Carousel.Item>
                    <div className="Slider">
                        <div className="Middle">
                            <div className="MiddleInfo">
                                <h1>Desarrollos a medida</h1>
                                <p>Creo exactamente lo que necesitas, funcional y con un agradable diseño moderno.</p>
                                <button className="SliderButton">+ info</button>
                            </div>
                        </div>
                        <div className="Middle">
                            <div className="MiddleImage1"></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="Slider">
                        <div className="Middle">
                            <div className="MiddleInfo">
                                <h1>Diseños Únicos</h1>
                                <p>No verás tu diseño en ninguna parte, todo se crea, nada de plantillas de la web.</p>
                                <button className="SliderButton">+ info</button>
                            </div>
                        </div>
                        <div className="Middle">
                            <div className="MiddleImage2"></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="Slider">
                        <div className="Middle">
                            <div className="MiddleInfo">
                                <h1>Muchas Herramientas</h1>
                                <p>Tengo un amplio stack de tecnologías listo para ofrecerte calidad en cada desarrollo.</p>
                                <button className="SliderButton">+ info</button>
                            </div>
                        </div>
                        <div className="Middle">
                            <div className="MiddleImage3"></div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}



export default Slider
