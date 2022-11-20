import React, { Component } from "react";
import "../style/ListaAdopcion.css";
import perrito2 from '../img/perrito2.jpg'
import tarjeta1 from '../img/tarjeta1.jpg'
import tarjeta2 from '../img/tarjeta2.jpg'
import tarjeta3 from '../img/tarjeta3.jpeg'
import tarjeta4 from '../img/tarjeta4.png'
import tarjeta5 from '../img/tarjeta5.jpeg'
import tarjeta6 from '../img/tarjeta6.jpg'

const InfoPerrito1 = [   
    {text: 'Ruben'}, 
    {text: 'Labrador'}, 
    {text: 'Macho'}, 
    {text: '2 años'}, 
    {text: 'Esterilizado: Sí'}, 
    {text: '3151230192'}
];

const InfoPerrito2 = [   
    {text: 'Armando'}, 
    {text: 'Pug'}, 
    {text: 'Macho'}, 
    {text: '3 años'}, 
    {text: 'Esterilizado: Sí'}, 
    {text: '3151333192'}
];

const InfoPerrito3 = [   
    {text: 'Carlos'}, 
    {text: 'Pitbull'}, 
    {text: 'Macho'}, 
    {text: '4 años'}, 
    {text: 'Esterilizado: No'}, 
    {text: '3151222192'}
];

const InfoPerrito4 = [   
    {text: 'Tendor'}, 
    {text: 'Pastor Alemán'}, 
    {text: 'Macho'}, 
    {text: '6'}, 
    {text: 'Esterilizado: Sí'}, 
    {text: '3151234444'}
];

const InfoPerrito5 = [   
    {text: 'Carmensa'}, 
    {text: 'Dalmata'}, 
    {text: 'Macho'}, 
    {text: '3 meses'}, 
    {text: 'Esterilizado: Sí'}, 
    {text: '3222230192'}
];

const InfoPerrito6 = [   
    {text: 'Poseidon'}, 
    {text: 'BullTerrier'}, 
    {text: 'Macho'}, 
    {text: '8 meses'}, 
    {text: 'Esterilizado: No'}, 
    {text: '3151234467'}
];

function ListadoAdopcion (){
    const [perro1,setPerro1] = React.useState(true);
    const [perro2,setPerro2] = React.useState(true);
    const [perro3,setPerro3] = React.useState(true);
    const [perro4,setPerro4] = React.useState(true);
    const [perro5,setPerro5] = React.useState(true);
    const [perro6,setPerro6] = React.useState(true);

    const onClickAdoptar = () => {
        alert('A tu correo te hemos enviado la información necesaria para seguir con el proceso de adopción');
    };
    
        return (
            <div className="container">
                <div className="row arras ">
                    <div className='col-md-4'>
                            <div className="card1" onMouseEnter={() => setPerro1(false)} onMouseLeave={() => setPerro1(true)}>
                            {perro1?(<img src={tarjeta1} className="doggurmets" alt="doggurmets"/>):(InfoPerrito1.map(InfoPerrito1 => (  <p className="Datos">{InfoPerrito1.text}</p>)))}
                            <button className="btn btn-dark btn-sm" onClick={onClickAdoptar} placeholder="Iniciar Sesión">Adoptar perro</button>
                            </div>
                    </div>
                    <div className='col-md-4'>
                    <div className="card1" onMouseEnter={() => setPerro2(false)} onMouseLeave={() => setPerro2(true)}>
                            {perro2?(<img src={tarjeta2} className="doggurmets" alt="doggurmets"/>):(InfoPerrito2.map(InfoPerrito2 => (  <p className="Datos">{InfoPerrito2.text}</p>  )))}
                            <button className="btn btn-dark btn-sm" onClick={onClickAdoptar} placeholder="Iniciar Sesión">Adoptar perro</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className="card1" onMouseEnter={() => setPerro3(false)} onMouseLeave={() => setPerro3(true)}>
                            {perro3?(<img src={tarjeta3} className="doggurmets" alt="doggurmets"/>):(InfoPerrito3.map(InfoPerrito3 => (  <p className="Datos">{InfoPerrito3.text}</p>  )))}
                            <button className="btn btn-dark btn-sm" onClick={onClickAdoptar} placeholder="Iniciar Sesión">Adoptar perro</button>
                        </div>
                    </div>
                </div>
                <div className="row arras ">
                    <div className='col-md-4'>
                    <div className="card1" onMouseEnter={() => setPerro4(false)} onMouseLeave={() => setPerro4(true)}>
                            {perro4?(<img src={tarjeta4} className="doggurmets" alt="doggurmets"/>):(InfoPerrito4.map(InfoPerrito4 => (  <p className="Datos">{InfoPerrito4.text}</p>  )))}
                            <button className="btn btn-dark btn-sm" onClick={onClickAdoptar} placeholder="Iniciar Sesión">Adoptar perro</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card1" onMouseEnter={() => setPerro5(false)} onMouseLeave={() => setPerro5(true)}>
                            {perro5?(<img src={tarjeta5} className="doggurmets" alt="doggurmets"/>):(InfoPerrito5.map(InfoPerrito5 => (  <p className="Datos">{InfoPerrito5.text}</p>  )))}
                            <button className="btn btn-dark btn-sm" onClick={onClickAdoptar} placeholder="Iniciar Sesión">Adoptar perro</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card1" onMouseEnter={() => setPerro6(false)} onMouseLeave={() => setPerro6(true)}>
                            {perro6?(<img src={tarjeta6} className="doggurmets" alt="doggurmets"/>):(InfoPerrito6.map(InfoPerrito6 => (  <p className="Datos">{InfoPerrito6.text}</p>  )))}
                            <button className="btn btn-dark btn-sm" onClick={onClickAdoptar} placeholder="Iniciar Sesión">Adoptar perro</button>
                        </div>
                    </div>
                </div>
              
                
            </div>
            
        );
 }
 export default ListadoAdopcion;



