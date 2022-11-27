const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//   Creamos una estancia para crear y guardar la información del estudiante
let  registroSchema = new Schema(
  {
    name: {
      type: String,
    },
    nameuser:{
      type:String,
    },
    email: {
      type: String,
    },
    contraseña: {
      type: String,
    },
    edad:{
      type:Number,
    },

    telefono:{
      type: Number,

    },
  },
  {
    collection: "usuarios",
  }
);

module.exports = mongoose.model("Registro", registroSchema);
