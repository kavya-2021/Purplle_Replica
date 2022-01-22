const mongoose = require("mongoose");

const sucSchema = mongoose.Schema({
    sta:{type:String,required:true},
    
})

module.exports = mongoose.model("suc",sucSchema);

