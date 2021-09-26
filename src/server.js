import express from "express";
import routerProductos from "./routes/productos.js";
import routerCarrito from "./routes/carrito.js";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", express.static("./public"));
app.use("/api/productos", routerProductos);
app.use("/api/carrito", routerCarrito);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
