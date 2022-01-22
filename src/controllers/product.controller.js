const express = require('express');

const Product = require('../models/product.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();

router.get("/",async(req,res)=>{
    try{

        const products = await Product.find().lean().exec();
        return res.render("product",{
            products: products
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const product = await Product.create(req.body);

        return res.status(201).send(product);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        const allProducts=await Product.find().lean().exec();
 
        const product = await Product.findById(req.params.id).lean().exec();

        const Reqproduct = await RequiredProd.create(product);
        
        return res.render("productDescription",{
            required : Reqproduct,
            allProducts:allProducts
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;