const express = require('express');

const Cart = require('../models/cart.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();

const Product = require('../models/product.model');

router.get("/",async(req,res)=>{
    try{

        const cart = await Cart.find().lean().exec();
        return res.render("cart",{
            cart : cart
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const cart = await Cart.create(req.body);

        return res.status(201).send(cart);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        const allProducts=await Product.find().lean().exec();
        const cart = await Cart.findById(req.params.id).lean().exec();

        const Reqcart = await RequiredProd.create(cart);
        
        return res.render("productDescription",{
            cartProducts : Reqcart,
            allProducts:allProducts
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try{

       const cartDel = await Cart.findByIdAndDelete(req.params.id).lean().exec();
       const cart = await Cart.find().lean().exec();
        return res.render("cart",{
            cart : cart
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;