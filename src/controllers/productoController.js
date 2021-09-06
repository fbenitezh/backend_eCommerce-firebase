const ProductoModel = require("../models/Producto");
const Controller = require("./Controller");
const path = require("path");
const productoModel = new ProductoModel(path.resolve("./src/storage/productos.json"));

class ProductoController extends Controller {
  constructor() {
    super();
  }

  async getProducts(req, res) {
    const {
      params: { id },
    } = req;
    try {
      const data = await productoModel.get(id);
      res.status(200).json({
        ok: true,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }

  async addProduct(req, res) {
    const { body } = req;
    try {
      productoModel.inicializarProducto(body);
      const insertId = await productoModel.add();
      res.status(200).json({
        ok: true,
        insertId,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }

  async updateProduct(req, res) {
    const {
      body,
      params: { id },
    } = req;
    try {
      productoModel.inicializarProducto(body, id);
      await productoModel.update();
      res.status(200).json({
        ok: true,
        info: "Producto modificado",
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      productoModel.setId(id);
      const response = await productoModel.delete();
      res.status(200).json({
        ok: true,
        info:response,
        moreInfo:`Se ha eliminado el producto con el id ${productoModel.getId()}`
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }
}

module.exports = ProductoController;
