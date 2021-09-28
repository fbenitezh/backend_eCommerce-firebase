import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const productoModel = new Schema({
  nombre: {
    type: String,
    required: true,
    max: 100,
  },
  descripcion: {
    type: String,
    required: true,
    max: 500,
  },
  codigo: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
});