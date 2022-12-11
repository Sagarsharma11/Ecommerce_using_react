const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productname:{
        type:String,
        required:true
    },
    productprice:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('product',productSchema)