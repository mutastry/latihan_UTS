var express = require('express');
var router = express.Router();

const pgnController = require('../controllers/pengguna');
router.get("/", pgnController.index); //list pengguna
router.post("/insert", pgnController.insert); //insert pengguna
router.patch("/update/:id", pgnController.update); //mengupdate pengguna
router.get("/show/:id", pgnController.show); //show detail pengguna by id
router.delete("/delete/:id", pgnController.destroy); //delete pengguna by id

module.exports = router;