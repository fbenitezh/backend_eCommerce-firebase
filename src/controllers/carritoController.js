const CarritoModel = require("../models/Carrito");
const Controller = require("./Controller");

class CarritoController extends Controller {
  constructor(props) {
    super(props);
    this.model = new CarritoModel("carrito");
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
