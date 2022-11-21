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
    email: {
      type: String,
    },
    dir: {
      type: String,
    },
    password: {
        type:String,
    },
    telefono:{
        type:String,

    }

  },
  {
    collection: "users",
  }
);
module.exports = mongoose.model("Registro", registroSchema);