const Model = require("./Model");

class CarritoModel extends Model {
  constructor(schema) {
    super(schema);
    this.id = null;
    this.timestamp = null;
    this.producto = {
      id: null,
      timestamp: null,
      nombre: null,
      descripcion: null,
      codigo: null,
      foto: null,
      precio: null,
      stock: null,
    };
  }

  


  //GETTERS AND SETTERS
  setId(id) {
    this.id = id;
  }
  setTimestamp(time) {
    this.timestamp = time;
  }
  setProducto(producto) {
    this.producto = {
      id: producto.id,
      timestamp: producto.timestamp,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      codigo: producto.codigo,
      foto: producto.foto,
      precio: producto.precio,
      stock: producto.stock,
    };
  }

  getId() {
    return this.id;
  }
  getTimestamp() {
    return this.timestamp;
  }
  getProducto() {
    return this.producto;
  }
}

module.exports = CarritoModel;
