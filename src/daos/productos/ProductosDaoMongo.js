import ContenedorMongo from '../../contenedores/ContenedorMongodb.js';
import {productoModel} from '../../models/mongo/producto.model.js';

class ProductosDaoMongo extends ContenedorMongo{
  constructor(collection) {
    super(productoModel,collection);
  }
  
}

export default ProductosDaoMongo;