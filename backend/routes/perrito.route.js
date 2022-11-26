let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

  let perritoSchema = require("../models/Perrito");

  // CREAR un Perro
router.route("/adoptar").post((req, res, next) => {
    perritoSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  // LEER Perro
  router.route("/").get((req, res, next) => {
    perritoSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

  // Obtener un Perro
router.route("/edit-perrito/:id").get((req, res, next) => {
    perritoSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });


  // Actualizar Perro
router.route("/update-perrito/:id").put((req, res, next) => {
    perritoSchema.findByIdAndUpdate(
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
          console.log("Perrito actualizado satisfactoriamente !");
        }
      }
    );
  });

  // BORRAR Perro
router.route("/delete-perrito/:id").delete((req, res, next) => {
    perritoSchema.findByIdAndRemove(req.params.id, (error, data) => {
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