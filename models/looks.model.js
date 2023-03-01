const mongoose = require('mongoose');
require("./userProfile");
require("./userRequest");
require("./religion");
require("./motherLanguage.model");

var looksSchema = new mongoose.Schema({

    name: { type: String, },
    status : { type: Boolean,default: false }
});
mongoose.model('Looks', looksSchema);
