const express = require('express');
const User = require('../modules/user');
const Cart = require('../modules/cart')
const Product = require('../modules/product')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const user = require('../modules/user');
const JWT_KEY = "hello@world"
const middleware = require('./middleware');
const _ = require("underscore");
const product = require('../modules/product');

router.post('/',
    [body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            const data = req.body;
            var usr = await User.findOne({ email: req.body.email })
            usr = User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            if (!data) {
                return res.status(401).send("Sorry data isn`t found")
            }
            const payload = {
                user: {
                    id: usr.id
                }
            }
            const auth_token = jwt.sign(payload, JWT_KEY)
            console.log(auth_token)
            res.status(200).send({ success: true, auth_token })
        } catch (error) {
            console.log(e)
            res.status(500).send({ success: false, error: error })
        }
    })

router.post('/login', async (req, res) => {
    try {
        var usr = await User.findOne({ email: req.body.email })
        //checking email and getting it
        if (!usr) { res.status(500).send({ success: false, msg: "Email or Password is wrong" }) }
        //checking password 
        if (usr.password !== req.body.password) { res.status(500).send({ success: false, msg: "Email or Password is wrong" }) }
        const payload = {
            user: {
                id: usr.id
            }
        }
        const auth_token = jwt.sign(payload, JWT_KEY)
        res.status(200).send({ success: true, auth_token, msg: "login successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error: error })
    }
})

router.post('/cart', middleware, async (req, res) => {
    try {

        const user_id = req.user.user.id;
        const product_id = req.body.product_id;
        if (!product_id) return res.status(500).send({ success: false, msg: 'something went wrong' })
        const cart = { user_id: user_id, product_id };
        console.log(cart)
        if (!cart) return res.status(500).send({ success: false, msg: 'something went wrong' })
        const result = await Cart.create(cart)
        if (!result) return res.status(500).send({ success: false, msg: 'something went wrong' })
        res.status(200).send({ success: true, msg: 'cart added successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error })
    }
})

router.get('/mycart', middleware, async (req, res) => {
    try {
        const user_id = req.user.user.id;
        const mycart_id = { user_id: user_id };
        if (!mycart_id) return res.status(500).send({ success: false, msg: 'something went wrong' })
        const result = await Cart.find(mycart_id, { product_id: 1 });
        if (!result) return res.status(500).send({ success: false, msg: 'something went wrong' })
        let product_id = _.pluck(result, "product_id");
        var myitems = [];
        myitems = await Product.find({ _id: { $in: product_id } });
        if (myitems.length === 0) return res.status(500).send({ success: true, msg: 'Cart is empty' })
        res.send({ success: true, msg: 'cart added successfully', array: myitems })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error })
    }
})

router.delete('/removeitem/:id', middleware, async (req, res) => {
    try {
        const user_id = req.user.user.id;
        const id = req.params.id
        const response = await Cart.findById(id);
        if (!response) return res.status(500).send({ success: false, msg: 'something went wrong' })
        const result = await Cart.findByIdAndDelete(id)
        if(!result) return res.status(500).send({ success: false, msg: 'something went wrong' })
        res.send({ success: true, msg: 'Item remove successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error })
    }
})

module.exports = router
