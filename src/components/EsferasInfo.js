import React, { Component } from "react";
import "../style/EsferasInfo.css";
import perrito1 from '../img/perrito1.jpg';
import perrito2 from '../img/perrito2.jpg';
import perrito3 from '../img/perrito3.jpeg';


function EsferasInfo (){
    const [esfera,setEsfera] = React.useState(true);
    const [esfera1,setEsfera1] = React.useState(true);
    const [esfera2,setEsfera2] = React.useState(true);

    return[
    
        <div className="container mb-5">
            <div className="FondoEsferas row">
            <div className="reglas col-md-4">
                <div className="carde" onMouseEnter={() => setEsfera1(false)} onMouseLeave={() => setEsfera1(true)}>
                {esfera1?(<img src={perrito1} className="cardperrito2" alt="cardperrito2"/>):(<div className="tarjetatexto card"><img src={perrito1} className="cardperrito5" alt="cardperrito2"/><p className="TextoContacto">Contáctanos: <br></br> Tel:3218243219.</p></div>)}
                    </div>
                </div>

                <div className="reglas col-md-4">
                    <div className="carde" onMouseEnter={() => setEsfera2(false)} onMouseLeave={() => setEsfera2(true)}>
                    {esfera2?(<img src={perrito2} className="cardperrito2" alt="cardperrito2"/>):(<div className="tarjetatexto card"><img src={perrito2} className="cardperrito5" alt="cardperrito2"/><p className="textoTitulo">Lost Pet</p></div>)}
                     
                    </div>
                </div>
                
                <div className="reglas col-md-4">
                    <div className="carde" onMouseEnter={() => setEsfera(false)} onMouseLeave={() => setEsfera(true)}>
                        {esfera?(<img src={perrito3} className="cardperrito2" alt="cardperrito2"/>):(<div className="tarjetatexto card"><img src={perrito3} className="cardperrito5" alt="cardperrito2"/><p>Lost Pet nace por y para los peluditos.</p></div>)}
                        
                    </div>
                </div>
            </div>
        </div>
    ,<h1>{esfera}</h1>];
 }
 export default EsferasInfo;