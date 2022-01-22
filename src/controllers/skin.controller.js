const express = require('express');

const Skin = require('../models/skin.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();
const Product = require('../models/product.model');
router.get("/",async(req,res)=>{
    try{

        const skincare = await Skin.find().lean().exec();

        return res.render("skinproducts",{
            skin : skincare 
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const skin = await Skin.create(req.body);

        return res.status(201).send(skin);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        
        const product = await Skin.findById(req.params.id).lean().exec();
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


        

