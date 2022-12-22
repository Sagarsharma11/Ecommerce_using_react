const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const product = require('../modules/product')
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'C:/Users/sagar/Desktop/Ecommerce_using_react/mysite/src/Component/image')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+"-"+file.originalname )
    }
  })

const upload = multer({ storage : storage})

router.post('/product' ,upload.single('productimage'), async(req,res)=>{
    try {
        var prod = await product.create({
            productname:req.body.productname,
            productimage:req.file.filename,
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

router.post('/fetchProduct' , async(req,res)=>{
    try{
      const prod = await product.find();
      res.status(200).send(prod)
    }catch(e){
      console.log("error",e)
      res.status(500).send({success:false,error:error})
    }
})

module.exports = router