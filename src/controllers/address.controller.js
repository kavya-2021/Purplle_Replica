const express = require("express");

const Address = require("../models/address.model");

const router = express.Router();

router.get("",async(req,res)=>{
  
    try{

        const address = await Address.find().lean().exec();

        return res.render("address",{
            address : address
        })
      //  return res.status(200).send(address);

    }catch(e){
        return res.status(501).send(e.message);
    }
})

module.exports = router;