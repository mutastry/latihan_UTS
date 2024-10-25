let mongoose = require("mongoose");

//https://mongoosejs.com/docs/schematypes.html
//Create Collection Schema
let schemapgn = new mongoose.Schema({
  nama: String,
  npm: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  alamat: {
    type: String,
    require: true,
  },
  tanggal_daftar: {
    type: Date
  }
});

//create Model from Schema
mongoose.model("Pengguna", schemapgn);