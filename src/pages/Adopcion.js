import React, { Component } from "react";
import axios from "axios";
import "../style/Adopcion.css";
import BarraDeNav from "../components/BarraDeNav";

export default class CrearPerro extends Component {
  constructor(props) {
    super(props);

    this.onChangeNombreDelPerro = this.onChangeNombreDelPerro.bind(this);
    this.onChangeRaza = this.onChangeRaza.bind(this);
    this.onChangeGenero = this.onChangeGenero.bind(this);
    this.onChangeEdad = this.onChangeEdad.bind(this);
    this.onChangeEsterilizado = this.onChangeEsterilizado.bind(this);
    this.onChangeNumeroContacto = this.onChangeNumeroContacto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombreP: "",
      raza: "",
      genero: "",
      edad: "",
      esterilizado: "",
      numerocontacto:"",
    };
  }

  onChangeNombreDelPerro(e) {
    this.setState({ nombreP: e.target.value });
  }
  onChangeRaza(e) {
    this.setState({ raza: e.target.value });
  }
  onChangeGenero(e) {
    this.setState({ genero: e.target.value });
  }
  onChangeEdad(e) {
    this.setState({ edad: e.target.value });
  }
  onChangeEsterilizado(e) {
    this.setState({ esterilizado: e.target.value });
  }
  onChangeNumeroContacto(e) {
    this.setState({ numerocontacto: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const perritoObject = {
      nombreP: this.state.nombreP,
      raza: this.state.raza,
      genero: this.state.genero,
      edad: this.state.edad,
      esterilizado: this.state.esterilizado,
      numerocontacto: this.state.numerocontacto,
    };

    axios
      .post("http://localhost:4000/perritos/adoptar", perritoObject)
      .then((res) => console.log(res.data));

    this.setState({
      nombreP: "",
      raza: "",
      genero: "",
      edad: "",
      esterilizado: "",
      numerocontacto: "",
    });
  }

  render() {
    return (
      <div class="container1">
        <BarraDeNav />
        <div class="row">
          <div class="col-md-12">
            <h3 class="tituloadopcion">
              {" "}
              Para subir la información de un perro que quieras dejar en
              adopción completa los siguientes campos:
            </h3>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col-md-6">
            <h4 class="tituloadopcion"> Sube una imagen del perro: </h4>
          </div>
          <div class="col-md-4">
            <input
              type="file"
              class="inputado"
              placeholder="Imagen del Perro"
              accept=".jpg,.jpeg,.png"
              required
            />
          </div>
          <div class="col-md-4"></div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div class="row mt-4">
            <div class="col-md-4">
              {" "}
              <input
                type="text"
                class="inputado"
                value={this.state.nombreP}
                onChange={this.onChangeNombreDelPerro}
                placeholder="Nombre del Perro"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="inputado"
                value={this.state.raza}
                onChange={this.onChangeRaza}
                placeholder="Raza"
              />
            </div>
            <div class="col-md-4">
              {" "}
              <input
                type="text"
                class="inputado"
                onChange={this.onChangeGenero}
                value={this.state.genero}
                
                placeholder="Género"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4">
              <input
                type="number"
                class="inputado"
                value={this.state.edad}
                onChange={this.onChangeEdad}
                placeholder="Edad"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="inputado"
                value={this.state.esterilizado}
                onChange={this.onChangeEsterilizado}
                placeholder="Esterilizado (sí o no)"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="inputado"
                value={this.state.numerocontacto}
                onChange={this.onChangeNumeroContacto}
                placeholder="Número de contacto"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <button
                type="submit"
                class="btn btn-primary"
                placeholder="Subir Información"
              >
                Subir Información
              </button>
            </div>
            <div class="col-md-4"></div>
          </div>
        </form>
      </div>
    );
  }
}
