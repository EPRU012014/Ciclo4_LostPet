const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let perritoSchema = new Schema(
  {
    nombreP: {
      type: String,
    },
    raza: {
      type: String,
    },
    genero: {
        type: String,
      },
      edad: {
        type: Number,
      },
      esterilizado: {
        type: String,
      },
      numerocontacto: {
        type: Number,
    },
  },
  {
    collection: "perritos",
  }
);

module.exports = mongoose.model("Perrito", perritoSchema);