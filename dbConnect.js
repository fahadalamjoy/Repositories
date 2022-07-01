const mongoose = require("mongoose");

require('dotenv').config();
const URL = process.env.DATABASE

mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo db connection Successfully");
});

connectionObj.on("error", () => {
  console.log("Mongo db connection Failed");
});
