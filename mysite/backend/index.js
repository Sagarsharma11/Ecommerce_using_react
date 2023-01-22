const connectMongo =  require("./db")
const express = require('express')
var cors = require('cors')
const { eventNames } = require("./modules/user")
var app = express()
app.use(express.json())
app.use(cors())
connectMongo()

const port = 5000;

app.use('/user',require('./routes/auth'))
app.use('/admin',require('./routes/admin'))

app.listen(port,()=>{
    console.log("running app at 5000")
})