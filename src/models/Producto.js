const Model = require("./Model");

class ProductoModel extends Model {
  constructor(schema) {
    super(schema);
    this.id = null;
    this.timestamp = null;
    this.nombre = null;
    this.descripcion = null;
    this.codigo = null;
    this.foto = null;
    this.precio = null;
    this.stock = null;
  }

  
  
  
  
  //   GETTERS AND SETTERS
  setId(id) {
    this.id = id;
  }
  setTimestamp(time) {
    this.timestamp = time;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setDescripcion(desc) {
    this.descripcion = desc;
  }
  setCodigo(code) {
    this.codigo = code;
  }
  setFoto(url) {
    this.foto = url;
  }
  setPrecio(precio) {
    this.precio = precio;
  }
  setStock(stock) {
    this.stock = stock;
  }

  getId() {
    return this.id;
  }
  getTimestamp() {
    return this.timestamp;
  }
  getNombre() {
    return this.nombre;
  }
  getDescripcion() {
    return this.descripcion;
  }
  getCodigo() {
    return this.codigo;
  }
  getFoto() {
    return this.foto;
  }
  getPrecio() {
    return this.precio;
  }
  getStock() {
    return this.stock;
  }
}

module.exports = ProductoModel;
