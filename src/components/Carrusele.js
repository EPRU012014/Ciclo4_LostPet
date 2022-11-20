import React, { Component } from "react";
import "../style/Carrusele.css";
import adopcion1 from '../img/adopcion1.jpg';
import adopcion2 from '../img/adopcion2.jpg';
import adopcion3 from '../img/adopcion3.jpg';



export default class Carrusele extends Component {

  render(){
    return (
        
        <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={adopcion1} className="d-block w-100" alt="Adopcion1"/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className="texto1">Nuestro amor por los peluditos nos da vida</h3>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={adopcion2} className="d-block w-100" alt="adopcion2"/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className="texto1">Unir peluditos y personas nos encanta</h3>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={adopcion3} className="d-block w-100" alt="adopcion3"/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className="texto1">Hogar es nuestra insignia</h3>
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
} }