const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routerProductos = require("./routes/productos");
const routerCarrito = require("./routes/carrito");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", express.static("./public"));
app.use("/api/productos", routerProductos);
app.use("/api/carrito", routerCarrito);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
