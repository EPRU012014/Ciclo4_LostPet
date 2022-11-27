let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Registro
let registroSchema = require("../models/Registro");

// CREAR Registro
router.route("/Registro").post((req, res, next) => {
  registroSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
 // LEER Registro
 router.route("/").get((req, res, next) => {
  registroSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener Registro
router.route("/edit-registro/:id").get((req, res, next) => {
  registroSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});


// Actualizar Registro
router.route("/update-registro/:id").put((req, res, next) => {
  registroSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Registro actualizado satisfactoriamente !");
      }
    }
  );
});

// BORRAR Registro de Usuario
router.route("/delete-registro/:id").delete((req, res, next) => {
  registroSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = router;