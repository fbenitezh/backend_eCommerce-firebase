import mongoose from "mongoose";
import { config } from "../config/index.js";

mongoose.connect(config.db.mongodb.uri, config.db.mongodb.config, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conectado a la db");
  }
});
