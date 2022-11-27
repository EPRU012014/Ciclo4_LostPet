import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class RegistroTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteRegistro = this.deleteRegistro.bind(this);
  }

  deleteRegistro() {
    axios
      .delete(
        "http://localhost:4000/users/delete-registro/" + this.props.obj._id
      )
      .then((res) => {
        console.log("User successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.nameuser}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.contraseña}</td>
        <td>{this.props.obj.edad}</td>
        <td>{this.props.obj.telefono}</td>
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-registro/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deleteRegistro} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}