const ProductoModel = require("../models/Producto");
const Controller = require("./Controller");

class ProductoController extends Controller{
    constructor() {
        super();
        this.prdModel = new ProductoModel('productos');
    }

    async getProducts(req,res){
        res.status(200).json({
            ok:true,
            data:[1]
        });
    }

    async addProduct(req,res){
        res.status(200).json({
            ok:true,
            data:[]
        });
    }

    async updateProduct(req,res){
        res.status(200).json({
            ok:true,
            data:[]
        });
    }

    async deleteProduct(req,res){
        res.status(200).json({
            ok:true,
            data:[]
        });
    }
}

module.exports = ProductoController;