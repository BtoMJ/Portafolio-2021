import React from 'react';
import './Me.css';

function Me() {
    return (
        <div className="meContainer" id="me">
            <div className="meContainerInfo">
                <div className="meInfo">
                    <h1>Hello World !</h1>
                    <h3>Mi nombre es Daniel Mena</h3>
                    <p>
                        Soy un desarrollador fullstack mexicano, diseñador gráfico y amante de la tecnología.<br /><br />
                        Full Stack orientado al Front-end con un excelente gusto para combinar colores en interfaces gráficas,
                        siempre dispuesto a conocer nuevas tecnologías, aceptar desafíos e incrementar mi stack de habilidades 
                        tanto tecnológicas como softs skills.<br /><br />
                        Empático y con gusto por trabajar en grupo aportando ideas, escuchando y resolviendo problemas.
                    </p>
                </div>
                <div className="meImage"></div>
            </div>
        </div>
    )
}

export default Me
