const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    name:{type:String,required:true},
    pincode:{type:Number,required:true},
    Address:{type:String,required:true},
    Landmark:{type:String,required:false},
    City:{type:String,required:true},
    State:{type:String,required:true},
})

module.exports = mongoose.model("address",addressSchema);