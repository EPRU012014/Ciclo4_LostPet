import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import EditPerrito from "./Editar-perrito";

export default class PerritoTableRow extends Component {
  constructor(props) {
    super(props);
    this.deletePerrito = this.deletePerrito.bind(this);
  }

  deletePerrito() {
    axios
      .delete(
        "http://localhost:4000/perritos/delete-perrito/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Perrito successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.nombreP}</td>
        <td>{this.props.obj.raza}</td>
        <td>{this.props.obj.genero}</td>
        <td>{this.props.obj.edad}</td>
        <td>{this.props.obj.esterilizado}</td>
        <td>{this.props.obj.numerocontacto}</td>
        <td>
          <Link
            className="edit-link"
            path={"edit-perrito/:id"}
            to={"/edit-perrito/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deletePerrito} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
