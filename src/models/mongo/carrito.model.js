import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const carritoModel = new Schema({
  productos: {
    type: Array,
    required: true,
  },
});

