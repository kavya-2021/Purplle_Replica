const express = require('express');

const Wish = require('../models/wish.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();
const Product = require('../models/product.model');
router.get("/",async(req,res)=>{
    try{

        const wish = await Wish.find().lean().exec();
        return res.render("wishlist",{
            wish : wish
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const wish = await Wish.create(req.body);

        return res.status(201).send(wish);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        
        const wish = await Wish.findById(req.params.id).lean().exec();
        const allProducts=await Product.find().lean().exec();
        const Reqwish = await RequiredProd.create(wish);
        
          
        return res.render("productDescription",{
            required : Reqwish,
            allProducts:allProducts
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try{

       const wishDel = await Wish.findByIdAndDelete(req.params.id).lean().exec();
       const wish = await Wish.find().lean().exec();
        return res.render("wishlist",{
            wish : wish
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;