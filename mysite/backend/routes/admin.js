const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const product = require('../modules/product')

router.post('/product' , async(req,res)=>{
    try {
        var prod = await product.create({
            productname:req.body.productname,
            productimage:req.body.productimage,
            productprice:req.body.productprice,
            productoffer:req.body.productoffer       
        })
        if(!prod){
            res.status(500).send({success:false,error:"internal server error"})
        }
        res.status(200).send({success:true,msg:"product added successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,error:error})
    }
})

module.exports = router