import React from 'react';
import "../style/Adopcion.css"
import perritoInicio from '../img/perritoInicio.jfif';
import BarraDeNav from '../components/BarraDeNav';

function Adopcion(){
    return (
<div class="container">
    <BarraDeNav/>
        <div class="row">
                <div class="col-md-12">
                   <h3 class="tituloadopcion"> Para subir la información de un perro que quieras dejar en adopción completa los siguientes campos:</h3>
                </div>
            
        </div>
        <div class="row mt-4 mb-4">
            <div class="col-md-6">
                <h4 class="tituloadopcion"> Sube una imagen del perro: </h4>
            </div>
            <div class="col-md-4">
                <input type="file" class="inputado" placeholder="Imagen del Perro" accept=".jpg,.jpeg,.png" required/>
            </div>
            <div class="col-md-4">
               
            </div>
            
           
        </div>
    <form>
        <div class="row mt-4">
                <div class="col-md-4"> <input type="text" class="inputado" placeholder="Nombre del Perro"/></div>
                <div class="col-md-4">
                    <input type="text" class="inputado" placeholder="Raza"/>
                    </div>
                <div class="col-md-4"> <input type="text" class="inputado" placeholder="Género"/></div>
        </div> 
        <div class="row mt-4">
                <div class="col-md-4"><input type="number" class="inputado" placeholder="Edad"/></div>
                <div class="col-md-4">
                    <input type="text" class="inputado" placeholder="Esterilizado (sí o no)"/>
                </div>
                <div class="col-md-4"><input type="number" class="inputado" placeholder="Número de contacto"/></div>
        </div>
        <div class="row mt-4">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                <button class="btn btn-primary" placeholder="Subir Información">Subir Información</button>
                </div>
                <div class="col-md-4"></div>
        </div>
    </form>
        
        
    </div>
        


    );
}

export {Adopcion};