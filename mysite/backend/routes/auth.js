const express = require('express');
const User = require('../modules/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const user = require('../modules/user');
const JWT_KEY = "hello@world"

router.post('/', 
    [body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })],
    async(req, res) => {
        try{
            const errors = validationResult(req)
            const data = req.body;
            var usr = await User.findOne({email:req.body.email})
            usr = User.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            if (!data) {
                return res.status(401).send("Sorry data isn`t found")
            }         
            const payload ={
                user:{
                    id:usr.id
                }
            }
            const auth_token = jwt.sign(payload,JWT_KEY)
            console.log(auth_token)
            res.status(200).send({success:true,auth_token})
        }catch(error){
            console.log(e)
            res.status(500).send({success:false,error:error})
        }
    })

    router.post('/login', async(req,res)=>{
        try {
            var usr = await User.findOne({email:req.body.email})
            //checking email and getting it
            if(!usr){   res.status(500).send({success:false,msg:"Email or Password is wrong"})}
            //checking password 
            if(usr.password!==req.body.password){   res.status(500).send({success:false,msg:"Email or Password is wrong"})}
            const payload = {
                user:{
                    id:usr.id
                }
            }
            const auth_token = jwt.sign(payload,JWT_KEY)
            res.status(200).send({success:true,auth_token,msg:"login successfully"})

        } catch (error) {
            console.log(error)
            res.status(500).send({success:false,error:error})
        }
    })



module.exports = router
