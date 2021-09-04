const { Router } = require("express");
const ProductoController = require("../controllers/productoController");
const { requiereAdmin } = require("../middlewares/admin");

const router = new Router();
const productoController = new ProductoController();

router.get("/:id?", productoController.getProducts);

router.post("/", requiereAdmin, productoController.addProduct);

router.put("/:id", requiereAdmin, productoController.updateProduct);

router.delete("/:id", requiereAdmin, productoController.deleteProduct);

module.exports = router;
