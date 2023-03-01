var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var preferenceSchema = mongoose.Schema({
    gender: {   type: String,},
    userId:String,
    age: String,
    religious: {type: String,},
    caste: String,
    religiousStatus: String,
    clan: String,
    montherTonque: String,
    looks: String,
    complexion: String,
    build: String,
    country: String,
    martialStatus:String,
    house:String,
    profession:String,
    monthlyIncome:String,
    SisterCount : Number,
    BrotherCount : Number,
    socioeconomicStatus:String,
    otherNationalities:String,
});


var preference = mongoose.model("preference", preferenceSchema);
module.exports.preference = preference;
//for sign up
// module.exports.validateUserLogin = validateUserLogin; // for login
