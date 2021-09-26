import { Router } from "express";
import ProductoController from "../controllers/productoController.js";
import { requiereAdmin } from "../middlewares/admin.js";

const router = new Router();
const productoController = new ProductoController();

router.get("/:id?", productoController.getProducts);

router.post("/", requiereAdmin, productoController.addProduct);

router.put("/:id", requiereAdmin, productoController.updateProduct);

router.delete("/:id", requiereAdmin, productoController.deleteProduct);

export default router;
