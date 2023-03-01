const mongoose = require('mongoose');
require("./userProfile");
require("./userRequest");
require("./religion");

var motherLanguageSchema = new mongoose.Schema({

    name: { type: String, },
    status : { type: Boolean,default: false }
});
mongoose.model('MotherLanguage', motherLanguageSchema);
