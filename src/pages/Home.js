import React from "react";
import "../style/App.css";
import "../style/Home.css"
import BarraDeNav from "../components/BarraDeNav";
import Carrusele from "../components/Carrusele";
import EsferasInfo from "../components/EsferasInfo";
import LinkPolitica from "../components/LinkPolitica";
import ListadoAdopcion from "../components/ListadoAdopcion";
import { InicioSesion } from "../pages/InicioSesion";
import { Registro } from "../pages/Registro";

const InfoPerritos = [
  { text: "Nombre del perro" },
  { text: "Raza" },
  { text: "Género" },
  { text: "Edad" },
  { text: "Esterilizado" },
  { text: "Contacto" },
];

function Home() {
  return (
    
    <div class="container1">
      
      <BarraDeNav />

      <EsferasInfo />
      <h1 className="TextoInicial">
        Luchamos por defender a los peluditos, y aquí en LostPet los escuchamos
      </h1>
      <Carrusele />

      <LinkPolitica />

      <ListadoAdopcion/>
    </div>
  
  );
}

export {Home};
