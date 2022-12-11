const connectMongo =  require("./db")
const express = require('express')
var app = express()
app.use(express.json())
connectMongo()

const port = 5000;

app.use('/user',require('./routes/auth'))
app.use('/admin',require('./routes/admin'))

app.listen(port,()=>{
    console.log("running app at 5000")
})