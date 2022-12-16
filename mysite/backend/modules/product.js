const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productname:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        unique:true
    },
    productprice:{
        type:Number,
        required:true
    },
    productoffer:{
        type:Number,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('product',productSchema)