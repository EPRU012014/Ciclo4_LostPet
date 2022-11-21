const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//   Creamos una estancia para crear y guardar la información del estudiante
let  registroSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    contraseña: {
      type: String,
    },

    telefono:{
      type: String,

    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("Registro", registroSchema);
