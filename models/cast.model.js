const mongoose = require('mongoose');
require("./userProfile");
require("./userRequest");
require("./religion");
require("./motherLanguage.model");

var castSchema = new mongoose.Schema({

    name: { type: String, },
    status : { type: Boolean,default: false }
});
mongoose.model('Cast', castSchema);
