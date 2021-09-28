import MongoService from './MongoService.js';
import { productoModel } from '../models/producto.model.js';

class ProductoService extends MongoService{
  constructor() {
    super(productoModel,"Productos");
    this.id = null;
    this.nombre = null;
    this.descripcion = null;
    this.codigo = null;
    this.foto = null;
    this.precio = null;
    this.stock = null;
  }

  async get(id = null) {
    try {
      let data;
      if(id){
        data = await this.listOneResource(id);
      }else{
        data = await this.listResource();
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async add(){
    const data = {
      nombre:this.nombre,
      descripcion:this.descripcion,
      codigo:this.codigo,
      foto:this.foto,
      precio:this.precio,
      stock:this.stock
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
      nombre:this.nombre,
      descripcion:this.descripcion,
      codigo:this.codigo,
      foto:this.foto,
      precio:this.precio,
      stock:this.stock
    }
    try {
      await this.updateResource(data,this.id);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(){
    try {
      const message = await this.deleteResource(this.id);
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }

  inicializarProducto(data){
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

export default ProductoService;