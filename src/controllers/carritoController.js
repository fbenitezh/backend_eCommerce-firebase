const CarritoModel = require("../models/Carrito");
const Controller = require("./Controller");
const path = require('path');

class CarritoController extends Controller {
  constructor(props) {
    super(props);
    this.model = new CarritoModel(path.resolve(__dirname+`../../../public/carrito.json`));
  }

  async create(req, res) {
    res.status(200).json({
      ok: true,
      data: [1],
    });
  }

  async delete(req, res) {
    res.status(200).json({
      ok: true,
      data: [1],
    });
  }

  async getProducts(req, res) {
    res.status(200).json({
      ok: true,
      data: [1],
    });
  }

  async addProductById(req, res) {
    res.status(200).json({
      ok: true,
      data: [1],
    });
  }

  async deleteByIdProducto(req, res) {
    res.status(200).json({
      ok: true,
      data: [1],
    });
  }
}

module.exports = CarritoController;
