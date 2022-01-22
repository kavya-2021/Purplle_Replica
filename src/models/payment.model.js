const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    name_on_card:{type:String,required:true},
    card_Number:{type:Number,required:true},
    cvv:{type:Number,required:true},
    ExpiryMM:{type:Number,required:false},
    ExpiryYY:{type:Number,required:true},
     
})

module.exports = mongoose.model("payment",paymentSchema);