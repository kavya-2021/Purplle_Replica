
const express = require("express");

const Suc = require("../models/suc.model");

const router = express.Router();

router.get("",async(req,res)=>{

    try{   

        const suc = await Suc.find().lean().exec();

        return res.render("suc",{
            suc : suc
        })
      //  return res.status(200).send(suc);

    }catch(e){
        return res.status(501).send(e.message);
    }
})

module.exports = router;