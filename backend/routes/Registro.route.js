let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Registro
let studentSchema = require("../models/Registro");

// CREAR Registro
router.route("/Registro").post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;