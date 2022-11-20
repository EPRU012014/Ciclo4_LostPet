import React from 'react';
import "../style/InicioSesion.css";
import perritoInicio from '../img/perritoInicio.jfif';

function InicioSesion(){
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <img src={perritoInicio} className="perris" alt="perris"/>
            </div>
            <div className="col-md-4"></div>
        </div>
        <form>
            <div className="row mt-4">
                <div className="col-4"></div>
                    <div className="col-4">
                        <input type="text" className="inputado" placeholder="Nombre de Usuario"/>
                    </div>
                <div className="col-4"></div>
        </div> 
        <div className="row mt-4">
                <div className="col-4"></div>
                    <div className="col-4">
                        <input type="password" className="inputado" placeholder="Contraseña"/>
                    </div>
                <div className="col-4"></div>
        </div>
        <div className="row mt-4">
                <div className="col-4"></div>
                    <div className="col-4">
                        <button className="btn btn-primary" placeholder="Iniciar Sesión">Iniciar Sesión</button>
                    </div>
                <div className="col-4"></div>
        </div>
        </form>
        
        
    </div>

    );
}

export {InicioSesion};