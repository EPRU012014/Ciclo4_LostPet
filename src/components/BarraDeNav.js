import React, { Component } from "react";
import "../style/BarraDeNav.css";

 
export default class BarraDeNav extends Component {

render(){
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
      <a className="nav-link" aria-current="page" href="/" >LostPet</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="inicioSesion" >Iniciar Sesión</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="registro" >Registrarse</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.canalinstitucional.tv/te-interesa/como-denunciar-maltrato-animal-telefono" target="_blank">Denunciar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="adoptar">Donar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="perrito-list" >Listado de perritos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/edit-perrito/:id" >Editar perritos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
}

