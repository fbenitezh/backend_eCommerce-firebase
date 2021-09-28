import FirebaseService from "./FirebaseService.js";

class CarritoService extends FirebaseService {
  constructor() {
    super("Carrito");
    this.id = null;
    this.productos = [];
  }

  async add() {
    const data = {
      productos: this.productos,
    };
    try {
      const insertId = await this.addResource(data);
      return insertId;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete() {
    try {
      const message = await this.deleteResource(this.id);
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProductsInCarrito(id) {
    try {
      const carrito = await this.listResource(id);
      if (carrito && carrito.productos.length > 0) {
        console.log(carrito);
        this.setId(carrito.id);
        this.setProductos(carrito.productos);
      }else{
        this.setProductos([]);
      }
      return this.productos;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addProduct(products) {
    try {
      let productos = await this.getProductsInCarrito(this.id);
      productos = [...productos, ...products];
      const doc = this.query.doc(this.id);
      const item = await doc.update({productos});
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(idProducto) {
    try {
      let productos = await this.getProductsInCarrito(this.id);
      let productosUpgrade = productos.filter((prd) => prd._id != idProducto);
      const doc = this.query.doc(this.id);
      const item = await doc.update({productos:productosUpgrade});
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }

  //GETTERS AND SETTERS
  setId(id) {
    this.id = id;
  }
  setProductos(productos) {
    this.productos = productos;
  }

  getId() {
    return this.id;
  }
  getProductos() {
    return this.productos;
  }
}

export default CarritoService;
