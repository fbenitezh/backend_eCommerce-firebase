import Model from "./Model.js";

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

  async get(id = null) {
    try {
      const productos = await this.listResource();
      if (id) {
        let producto = productos.filter((prd) => prd.id == id);
        return producto;
      }
      return productos;
    } catch (error) {
      throw new Error(error);
    }
  }

  async add(){
    const data = {
      id:this.getId(),
      timestamp:this.getTimestamp(),
      nombre:this.getNombre(),
      descripcion:this.getDescripcion(),
      codigo:this.getCodigo(),
      foto:this.getFoto(),
      precio:this.getPrecio(),
      stock:this.getStock()
    }
    try {
      const insertId = await this.addResource(data);
      return insertId;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(){
    const data = {
      id:this.getId(),
      timestamp:this.getTimestamp(),
      nombre:this.getNombre(),
      descripcion:this.getDescripcion(),
      codigo:this.getCodigo(),
      foto:this.getFoto(),
      precio:this.getPrecio(),
      stock:this.getStock()
    }
    try {
      await this.updateResource(data,this.getId());
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(){
    try {
      const message = await this.deleteResource(this.getId());
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }

  inicializarProducto(data,id=null){
    this.setId(id);
    this.setTimestamp(Date.now());
    this.setNombre(data.nombre);
    this.setDescripcion(data.descripcion);
    this.setCodigo(data.codigo);
    this.setFoto(data.foto);
    this.setPrecio(data.precio);
    this.setStock(data.stock);
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

export default ProductoModel;
