const express = require("express");

const Payment = require("../models/payment.model");

const router = express.Router();

router.get("",async(req,res)=>{

    try{

        const payment = await Payment.find().lean().exec();

        return res.render("payment",{
            payment : payment
        })
      //  return res.status(200).send(payment);

    }catch(e){
        return res.status(501).send(e.message);
    }
})

module.exports = router;