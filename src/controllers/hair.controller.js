const express = require('express');

const Hair = require('../models/hair.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();
const Product = require('../models/product.model');
router.get("/",async(req,res)=>{
    try{
        const hair = await Hair.find().lean().exec();

        return res.render("hairproducts",{
            hair : hair 
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const hair = await Hair.create(req.body);

        return res.status(201).send(hair);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        
        const product = await Hair.findById(req.params.id).lean().exec();
        const allProducts=await Product.find().lean().exec();
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