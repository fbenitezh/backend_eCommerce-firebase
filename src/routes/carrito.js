const { Router } = require("express");
const CarritoController = require("../controllers/carritoController");

const router = new Router();
const carritoController = new CarritoController();

router.post("/:id/productos", carritoController.addProductById);

router.post("/", carritoController.create);

router.delete("/:id/productos/:id_prod", carritoController.deleteByIdProducto);

router.delete("/:id", carritoController.delete);

router.get("/:id/productos", carritoController.getProducts);


module.exports = router;
