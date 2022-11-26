import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import PerritoTableRow from "./PerritoTableRow";
import BarraDeNav from '../components/BarraDeNav';

export default class PerritoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perritos: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/perritos/")
      .then((res) => {
        this.setState({
          perritos: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.perritos.map((res, i) => {
      return <PerritoTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <BarraDeNav />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre del perro</th>
              <th>Raza del perro</th>
              <th>Genero</th>
              <th>Edad</th>
              <th>Esterilizado</th>
              <th>Numero de contacto</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
