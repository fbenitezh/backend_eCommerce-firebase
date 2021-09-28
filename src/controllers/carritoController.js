import CarritoService from "../services/CarritoService.js";
import Controller from "../services/Controller.js";
const carritoService = new CarritoService();

class CarritoController extends Controller {
  constructor() {
    super();
  }

  async create(req, res) {
    try {
      const {
        body: { productos },
      } = req;
      carritoService.setProductos(productos);
      const insertId = await carritoService.add();
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
      carritoService.setId(id);
      await carritoService.delete();
      res.status(200).json({
        ok: true,
        info: "Carrito eliminado",
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
      const productos = await carritoService.getProductsInCarrito(id);
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
      carritoService.setId(id);
      await carritoService.addProduct(productos);
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
      carritoService.setId(id);
      await carritoService.deleteProduct(id_prod);
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

export default CarritoController;
