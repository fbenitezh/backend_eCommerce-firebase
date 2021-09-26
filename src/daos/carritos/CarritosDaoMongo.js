import ContenedorMongo from '../../contenedores/ContenedorMongodb.js';
import {carritoModel} from '../../models/mongo/carrito.model.js';

class CarritosDaoMongo extends ContenedorMongo{
  constructor(collection) {
    super(carritoModel,collection);
  }
  
}

export default CarritosDaoMongo;