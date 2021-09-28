import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const carritoModel = new Schema({
  productos: {
    type:Array,
    required:true
    // nombre:{
    //   type:String,
    //   required:true
    // },
    // descripcion:{
    //   type:String,
    //   required:true
    // },
    // codigo:{
    //   type:String,
    //   required:true
    // },
    // foto:{
    //   type:String,
    //   required:true
    // },
    // precio:{
    //   type:Number,
    //   required:true,
    //   min:0
    // },
    // stock:{
    //   type:Number,
    //   required:true,
    //   min:0
    // }
  }
});

