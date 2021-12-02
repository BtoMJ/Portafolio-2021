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
                        Soy un desarrollador fullstack y diseñador gráfico 
                    </p>
                </div>
                <div className="meImage"></div>
            </div>
        </div>
    )
}

export default Me
