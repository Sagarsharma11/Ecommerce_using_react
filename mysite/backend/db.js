// getting-started.js
const mongoose = require('mongoose');

const connectMongo = ()=>{

mongoose.connect('mongodb://localhost:27017/ecommerce',()=>{
    console.log("Connected")
}).catch((e)=>console.log(e));
  
}

module.exports = connectMongo;