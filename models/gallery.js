var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var gallerySchema = mongoose.Schema({
     image:[],
     private:{type:Boolean,default:true},
     userId:String,
     
    
});

var gallery = mongoose.model("gallery", gallerySchema);
module.exports.gallery = gallery;
//for sign up
// module.exports.validateUserLogin = validateUserLogin; // for login
