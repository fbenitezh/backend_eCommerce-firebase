const CarritoModel = require("../models/Carrito");
const Controller = require("./Controller");
const path = require("path");
const carritoModel = new CarritoModel(
  path.resolve("./src/storage/carrito.json")
);

class CarritoController extends Controller {
  constructor() {
    super();
  }

  async create(req, res) {
    try {
      const { body } = req;
      carritoModel.inicializarCarrito(body);
      const insertId = await carritoModel.add();
      res.status(200).json({
        ok: true,
        insertId,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        data: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const {
        params: { id },
      } = req;
      carritoModel.setId(id);
      await carritoModel.delete();
      res.status(200).json({
        ok: true,
        info: 'Carrito eliminado',
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        data: error.message,
      });
    }
  }

  async getProducts(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const productos = await carritoModel.getProductsInCarrito(id);
      res.status(200).json({
        ok: true,
        data: productos,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        data: error.message,
      });
    }
  }

  async addProductById(req, res) {
    try {
      const {
        params: { id },
        body: { productos },
      } = req;
      await carritoModel.addProduct(productos, id);
      res.status(200).json({
        ok: true,
        info: "Producto agregado",
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        data: error.message,
      });
    }
  }

  async deleteByIdProducto(req, res) {
    try {
      const {
        params: { id, id_prod },
      } = req;
      await carritoModel.deleteProduct(id, id_prod);
      res.status(200).json({
        ok: true,
        info: "Producto eliminado",
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        data: error.message,
      });
    }
  }
}

module.exports = CarritoController;
