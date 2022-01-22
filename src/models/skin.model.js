const mongoose = require('mongoose');

const skinproductSchema = mongoose.Schema({
        code : {type: String, required: true,unique: true},
        title : {type: String, required: true},
        rating : {type: Number, required: true},
        brand: {type: String, required: true},
        price : {type: Number, required: true},
        discount: {type: Number, required: true},
        qty : {type: Number, required: true,default:1},
        description : {type: String, required: true},
        best_before : {type: String, required: true} ,
        skin_concern : {type: String, required: true},
        skin_type : {type: String, required: true},
        Speciality : {type: String, required: false},
        finish : {type: String, required: false},
        Benefits : {type: String, required: true},
        oneBenefit :{type: String, required: true},
        type: {type: String, required: true},
        origin : {type: String, required: true,default: "India"},
        image_url : [{type: String, required: true}]   
},{
    versionKey:false,
    timestamps : true
});


module.exports = mongoose.model("skinproduct",skinproductSchema);
