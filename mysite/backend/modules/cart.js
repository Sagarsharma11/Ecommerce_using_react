const mongoose = require('mongoose');
const {Schema} = mongoose;

const Cart = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    Date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('cart',Cart)