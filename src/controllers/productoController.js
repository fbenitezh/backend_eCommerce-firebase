import ProductoService from "../services/ProductoService.js";
import Controller from "../services/Controller.js";
const productoService = new ProductoService();

class ProductoController extends Controller {
  constructor() {
    super();
  }

  async getProducts(req, res) {
    const {
      params: { id },
    } = req;
    try {
      const data = await productoService.get(id);
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
      productoService.inicializarProducto(body);
      const response = await productoService.add();
      res.status(200).json({
        ok: true,
        insertId: response,
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
      productoService.setId(id);
      productoService.inicializarProducto(body);
      await productoService.update();
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
      productoService.setId(id);
      const response = await productoService.delete();
      res.status(200).json({
        ok: true,
        info: response,
        moreInfo: `Se ha eliminado el producto con el id ${productoService.getId()}`,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }
}

export default ProductoController;
