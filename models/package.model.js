const mongoose = require("mongoose");
require("./userProfile");
require("./userRequest");

const PackageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number },
    description: { type: String },
    image:{ type:Buffer },
    connect:{type:Number},
    expiry:String,
});
var Package = mongoose.model('Package', PackageSchema);
module.exports.Package = Package;


const PromotionSchema = new mongoose.Schema({
    name: {type: String},
    description:{type:String},
    promotionShow:{type:Boolean,default:false},

})
var Promotion = mongoose.model('Promotion', PromotionSchema);
module.exports.Promotion = Promotion;