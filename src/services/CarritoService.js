import MongoService from "./MongoService.js";
import { carritoModel } from "../models/carrito.model.js";
import mongoose from "mongoose";

class CarritoService extends MongoService {
  constructor() {
    super(carritoModel, "Carrito");
    this.id = null;
    this.productos = [];
  }

  async add() {
    const data = {
      productos: this.productos,
    };
    try {
      const insertId = await this.addResource(data);
      return insertId;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete() {
    try {
      const message = await this.deleteResource(this.id);
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProductsInCarrito(id) {
    try {
      const carrito = await this.listOneResource(id);
      this.setProductos([]);
      if (carrito && carrito.length == 1) {
        this.setId(carrito[0]._id);
        this.setProductos(carrito[0].productos);
      }
      return this.productos;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addProduct(products) {
    try {
      let productos = await this.getProductsInCarrito(this.id);
      productos = [...productos, ...products];
      await this.schema.updateOne(
        { _id: mongoose.Types.ObjectId(this.id) },
        { productos }
      );
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(idProducto) {
    try {
      let productos = await this.getProductsInCarrito(this.id);
      let productosUpgrade = productos.filter((prd) => prd._id != idProducto);
      await this.schema.updateOne(
        { _id: mongoose.Types.ObjectId(this.id) },
        { productos: productosUpgrade }
      );
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  //GETTERS AND SETTERS
  setId(id) {
    this.id = id;
  }
  setProductos(productos) {
    this.productos = productos;
  }

  getId() {
    return this.id;
  }
  getProductos() {
    return this.productos;
  }
}

export default CarritoService;
