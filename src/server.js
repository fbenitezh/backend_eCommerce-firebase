const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routerProductos = require("./routes/productos");
const routerCarrito = require("./routes/carrito");
const admin = true;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", express.static("./public"));
app.use("/productos", routerProductos);
app.use("/carrito", routerCarrito);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
