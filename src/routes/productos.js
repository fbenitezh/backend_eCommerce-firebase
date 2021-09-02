const { Router } = require("express");
const ProductoController = require("../controllers/productoController");

const router = new Router();
const productoController = new ProductoController();

router.get("/:id?", productoController.getProducts);

router.post("/", productoController.addProduct);

router.put("/:id", productoController.updateProduct);

router.delete("/:id", productoController.deleteProduct);

module.exports = router;
