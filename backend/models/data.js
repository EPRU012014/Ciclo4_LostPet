const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//   Creamos una estancia para crear y guardar la información del usuario, 
//en este caso se puede hacer modificaciones de
// ser necesario
let  registroSchema = new Schema(
  {
    id:{
        type: Number,
    },
    name: {
      type: String,
    },
    nameuser:{
      type: String,
    },
    email: {
      type: String,
    },
    dir: {
      type: String,
    },
    contraseña: {
        type:String,
    },
    edad:{
      type:Number,
    },
    telefono:{
        type:Number,

    }

  },
  {
    collection: "usuarios",
  }
);
module.exports = mongoose.model("Registro", registroSchema);