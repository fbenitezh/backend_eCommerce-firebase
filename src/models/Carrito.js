const Model = require("./Model");

class CarritoModel extends Model {
  constructor(schema) {
    super(schema);
    this.id = null;
    this.timestamp = null;
    this.productos = [];
  }

  async add() {
    const data = {
      id: this.getId(),
      timestamp: this.getTimestamp(),
      productos: this.getProductos(),
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
      const message = await this.deleteResource(this.getId());
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProductsInCarrito(id) {
    try {
      const carritos = await this.listResource();
      let carrito = carritos.filter((car) => car.id == id);
      this.setProductos([]);
      if (carrito && carrito.length == 1) {
        this.setId(carrito[0].id);
        this.setProductos(carrito[0].productos);
      }
      return this.productos;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addProduct(products, id) {
    try {
      await this.getProductsInCarrito(id);
      if (this.productos.length == 0) {
        this.setProductos(products);
      } else {
        this.setProductos([...this.productos, ...products]);
      }
      await this.updateResource({
        id: this.id,
        timestamp: Date.now(),
        productos: this.productos,
      },this.id);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(id,idProduct) {
    try {
      await this.getProductsInCarrito(id);
      const upgradeProducts = this.productos.filter((prd) => prd.id != idProduct);
      const newData = {
        id: this.id,
        timestamp: Date.now(),
        productos: upgradeProducts,
      };
      await this.updateResource(newData, this.id);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  inicializarCarrito(data, id = null) {
    this.setId(id);
    this.setTimestamp(Date.now());
    this.setProductos(data.productos);
  }

  //GETTERS AND SETTERS
  setId(id) {
    this.id = id;
  }
  setTimestamp(time) {
    this.timestamp = time;
  }
  setProductos(productos) {
    this.productos = productos;
  }

  getId() {
    return this.id;
  }
  getTimestamp() {
    return this.timestamp;
  }
  getProductos() {
    return this.productos;
  }
}

module.exports = CarritoModel;
