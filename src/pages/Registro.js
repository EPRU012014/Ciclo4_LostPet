import React from 'react';
import "../style/Registro.css";
import perritoInicio from "../img/perritoInicio.jfif";
import BarraDeNav from '../components/BarraDeNav';

function Registro(){
    return (
<div class="container1">
        <div class="row"><BarraDeNav/>
            <div class="col-md-4"></div>
                <div class="col-md-4">
                    <img src={perritoInicio} class="perris" alt="perris"/>
                </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h2 class="tituloregistro">Petlovers</h2>
            </div>
            <div class="col-md-4"></div>
           
        </div>
    <form>
        <div class="row mt-4">
                <div class="col-md-4"> <input type="text" class="inputado" placeholder="Nombre Completo"/></div>
                <div class="col-md-4">
                    <input type="text" class="inputado" placeholder="Nombre de Usuario"/>
                    </div>
                <div class="col-md-4"> <input type="mail" class="inputado" placeholder="Correo Electrónico"/></div>
        </div> 
        <div class="row mt-4">
                <div class="col-md-4"><input type="password" class="inputado" placeholder="Contraseña"/></div>
                <div class="col-md-4">
                <input type="number" class="inputado" placeholder="Edad"/>
                </div>
                <div class="col-md-4"><input type="number" class="inputado" placeholder="Número de contacto"/></div>
        </div>
        <div class="row mt-4">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                <button class="btn btn-primary" placeholder="Iniciar Sesión">Iniciar Sesión</button>
                </div>
                <div class="col-md-4"></div>
        </div>
    </form>       
    </div>
    
        
        
 

    );
}

export {Registro};